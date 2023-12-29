import React from 'react'
import {Route, Routes } from 'react-router-dom'
import About from './component/About'
import Experience from './component/Experience'
import Professional from './component/Professional'
import Contact from './component/Contact'
import About2 from './component/About2'
import Skills from './component/Skills'

const Routess = () => {
  return (
    <Routes>
        <Route path='/' exact Component={About} />
        <Route path='/about' Component={About2} />
        <Route path='/skill' Component={Skills} />
        <Route path='/experience' Component={Experience} />
        <Route path='/professional' Component={Professional} />
        <Route path='/contact' Component={Contact} />
    </Routes>
  )
}

export default Routess
