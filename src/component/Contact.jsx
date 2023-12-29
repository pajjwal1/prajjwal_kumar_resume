import { Grid, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PlaceIcon from '@mui/icons-material/Place';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import './style.scss'

const Contact = () => {
  const cardStyle = { 
    minWidth: 150, 
    marginRight: '20px', 
    marginLeft: '40px', 
    boxShadow: ' -1rem 0 3rem #000', 
    backgroundColor: '#202026', 
    color: '#fff',
    padding: '60px 40px'
  };
  return (
    <Grid flexDirection='row'>
    <Grid container className='contact_component'>
      <Typography variant='h4' sx={{marginBottom: '60px'}}>Contact Me</Typography>
      <div className='contact_combine'>
      <Card sx={cardStyle}>
          <CardContent>
            <PlaceIcon style={{borderRadius: '50px', border: '1px solid #0bceaf', padding:'40px'}}/>
            <Typography variant='h5' sx={{marginTop: '30px', marginBottom: '30px'}}>Address</Typography>
            <Typography variant='body1'>5th Avenue, 34th floor, New york</Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyle}>
          <CardContent>
            <EmailOutlinedIcon style={{borderRadius: '50px', border: '1px solid #0bceaf', padding:'40px'}}/>
            <Typography variant='h5' sx={{marginTop: '30px', marginBottom: '30px'}}>Email</Typography>
            <Typography variant='body1'>prajjwalkumar033@gmail.com</Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyle}>
          <CardContent>
            <LocalPhoneRoundedIcon style={{borderRadius: '50px', border: '1px solid #0bceaf', padding:'40px'}}/>
            <Typography variant='h5' sx={{marginTop: '30px', marginBottom: '30px'}}>Phone</Typography>
            <Typography variant='body1' sx={{paddingLeft: '50px', paddingRight: '50px'}}>+91 9580290043</Typography>
          </CardContent>
        </Card>
      </div>
    </Grid>
    <Grid className='contact_form'>
        <Grid item md={6} lg={6} xl={6}>
          Hello
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
        Hello
        </Grid>
    </Grid>
  </Grid>
  )
}

export default Contact
