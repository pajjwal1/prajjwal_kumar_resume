import { Grid } from '@mui/material';
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
          <Home />
          <About2 />
          <Skills />
          <Experience />
          <Contact />
        </ThemeProvider>
      </StyledEngineProvider>
    </Grid>
  );
}

export default App;
