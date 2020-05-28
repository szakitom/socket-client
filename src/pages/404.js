import React from 'react'
import { css } from 'styled-components'

import { Layout } from '../components'

const NotFoundPage = () => (
  <Layout>
    <div
      css={css`
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
