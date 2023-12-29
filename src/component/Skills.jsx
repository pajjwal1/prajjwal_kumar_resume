import { Grid, Typography } from '@mui/material'
import React from 'react'
import Language from '../component/JSON/language.json';
import Box from '@mui/material/Box';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import Professional from '../component/JSON/professional.json';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Skills = () => {
    console.log(Language);
  return (
    <Grid container flexDirection='row' className='skills_component'>
        <Grid item md={6} lg={6} xl={6}>
        <Typography variant='h4' sx={{marginBottom: '30px'}}>Technology</Typography>
        {Language.map((value) => {
            return(
                <div key={value.id} className='technology_level'>
                    <Typography variant='body1' className='technology_name'>{value.language_name}</Typography>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={value.completion} />
                    </Box>
                </div>
            )
        })}
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
        <Typography variant='h4' sx={{marginBottom: '30px'}}>Professional Skills</Typography>
        {Professional.map((value)=>{
            return(
                <div key={value.id} className='professional_skill'>
                    <Box sx={{ width: '100%' }}>
                        <CircularProgressWithLabel value={value.completion} />
                    <Typography variant='body1'>{value.skill_name}</Typography>
                    </Box>
                </div>
            )
        })}
        </Grid>
    </Grid>
  )
}

export default Skills
