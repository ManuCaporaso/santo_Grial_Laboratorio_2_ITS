import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import Principal from './Principal'
import Footer from './Footer'
import './assets/css/styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Principal/>
    <Footer/>
  </React.StrictMode>,
)
