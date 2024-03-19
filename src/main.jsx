import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from './Router/Router.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
    <Router />
    </ParallaxProvider>
  </React.StrictMode>,
)
