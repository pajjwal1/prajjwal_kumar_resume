import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './style.scss'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import technologyData from './technology.json';
const About2 = () => {
    const cardStyle = { minWidth: 150, marginRight: '20px', marginLeft: '20px', boxShadow: ' -1rem 0 3rem #000', backgroundColor: '#202026', color: '#fff' };
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
    <Grid container className='about-two' flexDirection='column'>
      <Typography variant='body1' className='about_text'>About Me</Typography>
      <Typography variant='body1'>Hello, I’m a Patrick, web-developer based on Paris. I have rich experience in web site design & building and customization. Also I am good at</Typography>
      <ul className='technologies'>
        <span>HTML</span>
        <span>CSS</span>
        <span>SASS</span>
        <span>Material UI</span>
        <span>Javascript</span>
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
                        <Typography variant='h5'>{data.title}</Typography>
                        <Typography variant='body1'>{data.description}</Typography>
                    </CardContent>
                </Card>
            )})
        }
    </div>
    </Grid>
  )
}

export default About2
