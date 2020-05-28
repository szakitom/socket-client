import React from 'react'
import { css } from 'styled-components'
import QRCode from 'qrcode.react'
import Button from './Button'

const QRSidebar = ({ url, width, token, onSnapshot, onReset }) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px 20px;
      width: ${width}px;
      justify-self: center;

      @media (max-width: 900px) {
        display: none;
      }
    `}
  >
    <div
      css={css`
        height: 100%;
        background: #cecece80;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 20px;
        box-shadow: 1px -1px 4px 2px #2f202029;
        max-height: 500px;
        padding: 20px 0;
      `}
    >
      <div
        css={css`
          font-size: 20px;
        `}
      >
        Take control over a pixel
      </div>
      <div
        css={css`
          padding: 20px 50px;
          width: 100%;
        `}
      >
        <QRCode
          value={url}
          style={{
            width: '100%',
            height: '100%',
          }}
          size={300}
          bgColor="transparent"
        />
      </div>
      <a
        css={css`
          color: #3f51b5;
        `}
        href={url}
        rel="noreferrer noopener"
        target="_blank"
      >
        {url}
      </a>
      {token && (
        <div
          css={css`
            display: flex;
            justify-content: space-evenly;
            width: 100%;
          `}
        >
          <Button onClick={onSnapshot}>Snapshot</Button>
          <Button onClick={onReset}>Reset</Button>
        </div>
      )}
    </div>
  </div>
)

export default QRSidebar
