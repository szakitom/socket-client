import React from 'react'
import { createGlobalStyle, css } from 'styled-components'
import { Helmet } from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 300;
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div
      css={css`
        height: 100vh;
        display: flex;
        justify-content: center;
      `}
    >
      {children}
    </div>
  </>
)

export default Layout
