import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./pages/styles/theme.js"
import GlobalStyles from './pages/styles/global.js'
import { NewNote } from './pages/NewNote/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <NewNote />
    </ThemeProvider>
  </React.StrictMode>,
)
