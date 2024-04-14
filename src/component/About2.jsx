import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './style.scss'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import technologyData from '../component/JSON/technology.json';
const About2 = () => {
  const [startDate] = useState(new Date('2019-02-20'));
  const currentDate = new Date();
  const dateDiff = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
  (currentDate.getMonth() - startDate.getMonth());
  const years = Math.floor(dateDiff / 12);
  const months = dateDiff % 12;
  const cardStyle = { flex: 1, minWidth: 150, marginRight: '20px', marginLeft: '20px', boxShadow: ' -1rem 0 3rem #000', backgroundColor: '#202026', color: '#fff' };
  const handleDownload = () => {
    const pdfPath = process.env.PUBLIC_URL + '/Prajjwal_Resume.pdf';
    const link = document.createElement('a');
      link.href = pdfPath;
      link.target = '_blank';
      link.download = 'prajjwal Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <Grid container className='about-two' flexDirection='column' id="about2">
      <Typography variant='body1' className='about_text'>About Me</Typography>
      <Typography variant='body1' width='90%'>I have overall {years}.{months}+ years of experience, and I worked as a front-end
      developer in my previous project. I'm having Rich experience in React JS as well as in JavaScript.
      Closely worked with clients on their requirements and day to day task. I'm looking forward to learn things that will help me
      to achieve my goals in project. I'm very passionate to work on new technologies and know about latest features of the technology.
      I'm fast learner with high grasping power.</Typography>
      <ul className='technologies'>
        <span>HTML</span>
        <span>CSS</span>
        <span>SASS</span>
        <span>Material UI</span>
        <span>Javascript</span>
        <span>Typescript</span>
        <span>ES6</span>
        <span>React JS</span>
        <span>Redux</span>
        <span>Saga</span>
        <span>React Testing Library (RTL)</span>
      </ul>
      <Button className='download_cv_button' onClick={handleDownload}>Download CV  &nbsp; &nbsp; <CloudDownloadIcon /> </Button>
      <Typography variant='body1' className='about_my_text'>What I do.</Typography>
      <div className='technology_combine'>
        {
            technologyData.map((data)=>{
            return(
                <Card sx={cardStyle} key={data.id}>
                    <CardContent>
                        <img src={data.image} alt={data.title} height='25px' width='25px' />
                        <Typography variant='h5' style={{marginTop: "20px"}}>{data.title}</Typography>
                        <Typography variant='body1' style={{marginTop: "20px"}}>{data.description}</Typography>
                    </CardContent>
                </Card>
            )})
        }
    </div>
    </Grid>
  )
}

export default About2
