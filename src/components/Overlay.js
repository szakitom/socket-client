import React from 'react'
import { css } from 'styled-components'

const Overlay = ({ width, height, size }) => (
  <div
    css={css`
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      width: ${width * size}px;
      opacity: 0.4;
      z-index: -1;
      bottom: 0;
      right: 0;
    `}
  >
    {[...Array(width * height).keys()].map((id, index) => (
      <div
        key={id}
        css={css`
          width: ${size}px;
          height: ${size}px;
          border: 1px solid lightgray;
          ${index >= width * (height - 1) && 'border-bottom: 0;'}
          ${(index + 1) % width === 0 && 'border-right: 0;'}
          ${index % height === 0 && 'border-left: 0;'}
          ${index < width && 'border-top: 0;'}
        `}
      />
    ))}
  </div>
)

export default Overlay
