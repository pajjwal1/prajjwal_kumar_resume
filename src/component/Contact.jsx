import { Button, Grid, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PlaceIcon from '@mui/icons-material/Place';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import './style.scss'
import Map from './Map';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  p: 4,
  boxShadow: ' -1rem 0 3rem #000',
  backgroundColor: '#202026',
  color: '#fff'
};

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
  const location = {
    address: 'telecom layout',
    lat: 13.051866,
    lng: 77.636471,
};
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container flexDirection='row' className='contact_boss' id='contact'>
    <Grid item className='contact_component'>
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
    <Grid item className='contact_form'>
        <Grid flexDirection='row' item md={6} lg={6} xl={6}>
          <TextField className='textfield' sx={{width: '49%',marginRight: '10px'}} label="First Name" placeholder='First Name' variant="outlined" />
          <TextField label="Last Name" sx={{width: '49%'}} placeholder='Last Name' variant="outlined" />
          <TextField label="Your Email" placeholder='Your Email' variant="outlined" fullWidth />
          <TextField label="Your Message" placeholder='Your Message' multiline rows={5} fullWidth />
          <Button className='submit_button' fullWidth onClick={handleOpen}>Submit</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography id="transition-modal-title" variant="h6" sx={{color: '#0bceaf'}} component="h2">
                    Congrats!!!
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    You have successfully submitted your Query to me!!!
                  </Typography>
                </Box>
              </Fade>
            </Modal>
        </Grid>
        <Grid item md={6} lg={6} xl={6} className='place_map'>
        <Map location={location} zoomLevel={15} />
        </Grid>
    </Grid>
  </Grid>
  )
}

export default Contact
