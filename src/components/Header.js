import React from 'react'
import { css } from 'styled-components'

const Header = ({ users, height }) => (
  <div
    css={css`
      background: #cecece;
      height: ${height}px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    `}
  >
    Active controllers:&nbsp;
    <span
      css={css`
        font-weight: bold;
      `}
    >
      {users}
    </span>
  </div>
)

export default Header
