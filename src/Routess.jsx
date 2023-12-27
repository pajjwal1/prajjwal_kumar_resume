import React from 'react'
import {Route, Routes } from 'react-router-dom'
import About from './component/About'
import Experience from './component/Experience'
import Professional from './component/Professional'
import Contact from './component/Contact'

const Routess = () => {
  return (
    <Routes>
        <Route path='/about' Component={About} />
        <Route path='/experience' Component={Experience} />
        <Route path='/professional' Component={Professional} />
        <Route path='/contact' Component={Contact} />
    </Routes>
  )
}

export default Routess
