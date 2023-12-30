import { Grid } from '@mui/material';
import Header from './component/Header';
import {Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import About2 from './component/About2';
import Skills from './component/Skills';
import Experience from './component/Experience';
import Contact from './component/Contact';
import { ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from '@mui/system';
import theme from './component/Theme/theme';

function App() {
  return (
    <Grid container>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Header />
          <Home />
          <About2 />
          <Skills />
          <Experience />
          <Contact />
          <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' Component={About2} />
          <Route path='/skill' Component={Skills} />
          <Route path='/experience' Component={Experience} />
          <Route path='/contact' Component={Contact} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </Grid>
  );
}

export default App;
