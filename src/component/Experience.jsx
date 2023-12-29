import { Grid, Typography } from '@mui/material'
import React from 'react'
import './style.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Experience = () => {
  const cardStyle = { marginBottom: '15px', marginRight: '20px' ,minWidth: 150, boxShadow: ' -1rem 0 3rem #000', backgroundColor: '#202026', color: '#fff' };
  return (
    <Grid container flexDirection='row' className='experience_component'>
      <Grid item md={6} lg={6} xl={6} className='education'>
      <Typography variant='h5' className='education_title'>Education</Typography>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant='h5' style={{ fontWeight: 'bold', lineHeight: '30px' }}>Bachelor of Technology</Typography>
            <Typography variant='body1'>In Information Technology</Typography>
            <Typography variant='h6' style={{color: '#0bceaf'}}><i> United College of Engineering and Research</i></Typography>
            <Typography variant='body1' style={{color: '#0bceaf'}}>2014-2018</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} lg={6} xl={6} className='work'>
      <Typography variant='h5' className='work_title'>Work Experience</Typography>
      <Card sx={cardStyle}>
          <CardContent>
            <Typography variant='h5' style={{ fontWeight: 'bold', lineHeight: '30px' }}>IBM Bangalore</Typography>
            <Typography variant='body1' style={{color: '#0bceaf'}}> FrontEnd Developer </Typography>
            <Typography variant='body1' style={{color: '#0bceaf'}}>Oct 2021 - Present</Typography>
            <Typography variant='h6' style={{color: '#0bceaf'}}><i> Roles and Responsibility --</i></Typography>
            <li>Developed React JS Application for front end Development from Scratch.</li>
            <li>Written Re-usable component to improve website performance and reusability of code.</li>
            <li>Collaborated with cross functional teams to implement new features and end to end integration.</li>
            <li>Analysis and provide the best possible solution for the development.</li>
            <li>Collaborated with clients for Requirement Gathering.</li>
            <li>Performed Unit test for better code coverage.</li>
            <li>Conducted KT Sessions for new joiners and supported them.</li>
            <li>Written Cypress test cases for end to end testing of website. </li>
            <li>Followed development standards and code review documentation.</li>
          </CardContent>
      </Card>
      <Card sx={cardStyle}>
          <CardContent>
            <Typography variant='h5' style={{ fontWeight: 'bold', lineHeight: '30px' }}>Capgemini Bangalore</Typography>
            <Typography variant='body1' style={{color: '#0bceaf'}}> FrontEnd Developer </Typography>
            <Typography variant='body1' style={{color: '#0bceaf'}}>Feb 2019 - Oct 2021</Typography>
            <Typography variant='h6' style={{color: '#0bceaf'}}><i> Roles and Responsibility --</i></Typography>
            <li>Developed React JS Application for front end Development.</li>
            <li>Written Re-usable component to improve website performance and reusability of code.</li>
            <li>Collaborated with cross functional teams to implement new features and end to end integration.</li>
            <li>Analysis and provide the best possible solution for the development.</li>
            <li>Involved in Resolving Bugs.</li>
            <li>Performed Unit test for better code coverage.</li>
            <li>Followed development standards and code review documentation.</li>
          </CardContent>
      </Card>
      </Grid>
    </Grid>
  )
}

export default Experience
