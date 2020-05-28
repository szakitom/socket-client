import React from 'react'
import { css } from 'styled-components'

const OpacitySlider = ({ opacity, onChange }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    `}
  >
    <div
      css={css`
        margin-bottom: 10px;
      `}
    >
      Opacity
    </div>
    <input
      type="range"
      min={0}
      max={255}
      value={opacity}
      onChange={onChange}
      css={css`
        width: 220px;
        cursor: pointer;
        appearance: none;
        height: 10px;
        border-radius: 2px;
        background: #cecece80;
        outline: 0;

        ::-webkit-slider-thumb {
          appearance: none;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #868686;
          cursor: pointer;
          border: 0;
        }

        ::-moz-range-thumb {
          appearance: none;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #868686;
          cursor: pointer;
          border: 0;
        }
      `}
    />
  </div>
)

export default OpacitySlider
