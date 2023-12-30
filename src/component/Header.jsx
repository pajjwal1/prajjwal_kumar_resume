import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.scss'
import { Grid } from '@mui/material'

const Header = () => {
  return (
    <Grid container sm={12} md={12} lg={12} xl={12} className='main_header'>
        <Link className='header_item' to='/'>Home</Link>
        <Link className='header_item' to='/about'>About</Link>
        <Link className='header_item' to='/skill'>Skill</Link>
        <Link className='header_item' to='/experience'>Experience</Link>
        <Link className='header_item' to='contact'>Contact</Link>
    </Grid>
  )
}

export default Header
