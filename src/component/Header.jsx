import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
import { Grid } from '@mui/material'

const Header = () => {
  return (
    <Grid container sm={12} md={12} lg={12} xl={12} className='main_header'>
        <NavLink className='header_item' to='/'>Home</NavLink>
        <NavLink className='header_item' to='/about'>About</NavLink>
        <NavLink className='header_item' to='/experience'>Experience</NavLink>
        <NavLink className='header_item' to='/professional'>Professional</NavLink>
        <NavLink className='header_item' to='/contact'>Contact</NavLink>
    </Grid>
  )
}

export default Header
