import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style.scss'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Profile from '../Assets/profile_image.png'

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(()=>{
    setFadeIn(true);
  },[])
  return (
    <Grid container>
      <Grid item className='intro' flexDirection='column'>
      <Typography variant='h5' className='name_start'>Hello I'm</Typography>
      <Typography variant='h3' className='name'>Prajjwal Kumar</Typography>
      <Typography variant='body1' className='occupation'>Web Developer</Typography>
      <div className={`about_contacts ${fadeIn ? 'fade-in' : ''}`}>
      <p className='child_icons'><EmailIcon /> &nbsp; prajjwalkumar033@gmail.com</p>
      <p className='child_icons'><CallIcon /> &nbsp; +91 9580290043</p>
      <p className='child_icons'><LocationOnIcon /> &nbsp; Bangalore, India</p>
      </div>
      <div className={`social_media_icons ${fadeIn ? 'fade-in' : ''}`}>
      <p className='icons'><TwitterIcon onClick={event =>  window.open('https://x.com/prajjwalkeshar5?t=afvq2aC9yNO2VUWCMM0jAQ&s=08', '_blank')} /></p>
      <p className='icons'><LinkedInIcon onClick={event =>  window.open('https://www.linkedin.com/in/prajjwal-kumar-516346137/', '_blank')} /></p>
      <p className='icons'><GitHubIcon onClick={event =>  window.open('https://github.com/pajjwal1', '_blank')} /></p>
      </div>
      </Grid>
      <Grid item className='profile_image'>
        <img src={Profile} height='320px' width='320px' alt='profile_image'/>
      </Grid>
    </Grid>
  )
}

export default Home
