import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes'
import { unregister } from 'core'
import Layout from 'layout'
import { GlobalStyles } from 'styles'

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)

unregister()
