import { Home } from './components'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyled } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />

    <GlobalStyled />
  </React.StrictMode>
)