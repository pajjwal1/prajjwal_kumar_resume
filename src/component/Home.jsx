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
      <p className='icons'><TwitterIcon /></p>
      <p className='icons'><LinkedInIcon /></p>
      <p className='icons'><GitHubIcon /></p>
      </div>
      </Grid>
      <Grid item className='profile_image'>
        <img src={Profile} height='320px' width='320px' alt='profile_image'/>
      </Grid>
    </Grid>
  )
}

export default Home
