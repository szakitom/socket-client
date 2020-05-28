import React from 'react'
import { css } from 'styled-components'

import Index from './CanvasIndex'
import Overlay from './Overlay'

const CanvasBorder = ({
  children,
  height,
  width,
  pixelSize,
  widthIndexes,
  heightIndexes,
}) => (
  <div
    css={css`
      height: ${(height + 1) * pixelSize}px;
      width: ${(width + 1) * pixelSize}px;
      display: grid;
      justify-self: center;
      grid-template-areas:
        'space column'
        'row canvas';
      position: relative;
    `}
  >
    <Overlay width={width + 1} height={height + 1} size={pixelSize} />
    <div
      css={css`
        grid-area: space;
      `}
    />
    <div
      css={css`
        grid-area: column;
        display: flex;
        width: ${pixelSize * width}px;
        height: ${pixelSize}px;
      `}
    >
      {widthIndexes.map((index) => (
        <Index key={index}>{index + 1}</Index>
      ))}
    </div>
    <div
      css={css`
        grid-area: row;
        display: flex;
        flex-direction: column;
        height: ${pixelSize * height}px;
        width: ${pixelSize}px;
      `}
    >
      {heightIndexes.map((index) => (
        <Index key={index}>{index + 1}</Index>
      ))}
    </div>
    {children}
  </div>
)

export default CanvasBorder
