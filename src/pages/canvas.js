import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import { css } from 'styled-components'

import Layout from '../components/Layout'
import useWindowSize from '../hooks/useWindowSize'
import { colorConverter, redraw, isBrowser } from '../utils'
import { Header, QRSidebar, CanvasBorder } from '../components'

const CanvasPage = () => {
  const [init, setInit] = useState(false)
  const windowSize = useWindowSize()
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [widthIndexes, setWidthIndexes] = useState([])
  const [heightIndexes, setHeightIndexes] = useState([])
  const [userCount, setUserCount] = useState(0)
  const socket = useRef()
  const canvas = useRef()
  const headerHeight = 50
  const sideBarWidth = 350
  const [pixelSize, setPixelSize] = useState(50)

  const url =
    process.env.GATSBY_FRONTEND_URL || (isBrowser() && window.location.origin)
  const token = new URLSearchParams(isBrowser() && window.location.search).get(
    'token'
  )

  const changeColor = ({ color, column, row }) => {
    canvas.current
      .getContext('2d')
      .putImageData(colorConverter(color), column, row)
  }

  useEffect(() => {
    const connect = async () => {
      const s = io(`${process.env.GATSBY_API_URL}/canvas?token=${token}`)
      s.on('welcome', ({ db, width: _width, height: _height }) => {
        setWidth(_width)
        setHeight(_height)
        setWidthIndexes([...Array(_width).keys()])
        setHeightIndexes([...Array(_height).keys()])

        const ctx = canvas.current.getContext('2d')
        ctx.scale(_width, _height)
        ctx.mozImageSmoothingEnabled = false
        ctx.imageSmoothingEnabled = false

        redraw({ ctx, width: _width, height: _height, db })
      })
      s.on('colorChange', (message) => changeColor(message))
      s.on('userCount', (count) => setUserCount(count))
      socket.current = s
    }

    if (!init) {
      connect()
      setInit(true)
    }
  }, [init, token])

  useEffect(() => {
    const [windowWidth, windowHeight] = windowSize
    let noQR = false
    if (windowWidth <= 900) {
      noQR = true
    }
    const maxSize = noQR
      ? Math.min(windowHeight - headerHeight, windowWidth)
      : Math.min(windowHeight - headerHeight, windowWidth - sideBarWidth)
    const sections = Math.max(width + 1, height + 1)
    setPixelSize(Math.floor(maxSize / sections))
  }, [width, height, windowSize])

  const handleSnapshot = () => {
    socket.current.emit(
      'save',
      canvas.current.toDataURL('image/png'),
      (message) => {
        alert(message)
      }
    )
  }

  const handleReset = () => {
    socket.current.emit('reset', (message) => {
      alert(message)
    })
  }

  return (
    <Layout>
      <div
        css={css`
          width: 100%;
        `}
      >
        <Header users={userCount} height={headerHeight} />
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr auto;

            @media (max-width: 900px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          <QRSidebar
            url={url}
            width={sideBarWidth}
            token={token}
            onSnapshot={handleSnapshot}
            onReset={handleReset}
          />
          <CanvasBorder
            height={height}
            width={width}
            pixelSize={pixelSize}
            widthIndexes={widthIndexes}
            heightIndexes={heightIndexes}
          >
            <canvas
              css={css`
                grid-area: canvas;
                height: ${height * pixelSize}px;
                width: ${width * pixelSize}px;
                image-rendering: pixelated;
              `}
              ref={canvas}
              width={width}
              height={height}
            />
          </CanvasBorder>
        </div>
      </div>
    </Layout>
  )
}

export default CanvasPage
