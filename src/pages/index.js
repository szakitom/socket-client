import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import { css } from 'styled-components'

import { RGBToHex, hexToRGB } from '../utils'
import { Layout, Row, Bold, OpacitySlider, ColorPreview } from '../components'

const IndexPage = () => {
  const [init, setInit] = useState(false)
  const [row, setRow] = useState(0)
  const [color, setColor] = useState('#ffffff')
  const [opacity, setOpacity] = useState(255)
  const [column, setColumn] = useState(0)
  const socket = useRef()

  useEffect(() => {
    const connect = async () => {
      const data = await fetch(process.env.GATSBY_API_URL)
      const { row, column, color } = await data.json()
      const [r, g, b, alpha] = color
      if (alpha !== 0 || r !== 0 || g !== 0 || b !== 0) {
        setColor(RGBToHex(r, g, b))
        setOpacity(alpha)
      }
      setRow(row)
      setColumn(column)
      const s = io(
        `${process.env.GATSBY_API_URL}/client?column=${column}&row=${row}`
      )
      socket.current = s
    }

    if (!init) {
      connect()
      setInit(true)
    }
  }, [init])

  const sendColor = (color, opacity) => {
    socket.current.emit(
      'color',
      {
        color: hexToRGB(color, opacity),
        column,
        row,
      },
      () => {}
    )
  }

  const handleColor = (e) => {
    const color = e.target.value
    setColor(color)
    sendColor(color, opacity)
  }

  const handleOpacity = (e) => {
    const opacity = e.target.value
    setOpacity(opacity)
    sendColor(color, opacity)
  }

  return (
    <Layout>
      <div
        css={css`
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            margin: 20px;
            width: 300px;
            font-size: 18pt;
          `}
        >
          <Row>
            <p>Row: </p>
            <Bold>{row + 1}</Bold>
          </Row>
          <Row>
            <p>Column: </p>
            <Bold>{column + 1}</Bold>
          </Row>
        </div>
        <label
          css={css`
            width: 200px;
            height: 100px;
            border: 5px solid #cecece80;
            border-radius: 5px;
            cursor: pointer;
            outline: 0;
          `}
        >
          <ColorPreview color={color} opacity={opacity} />
          <input
            type="color"
            value={color}
            onChange={handleColor}
            css={css`
              opacity: 0;
            `}
          />
        </label>
        <OpacitySlider opacity={opacity} onChange={handleOpacity} />
      </div>
    </Layout>
  )
}

export default IndexPage
