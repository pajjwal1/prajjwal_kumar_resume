import { Grid } from '@mui/material';
import About from './component/About';
import Header from './component/Header';
import Routess from './Routess';
import About2 from './component/About2';
import Skills from './component/Skills';

function App() {
  return (
    <Grid container>
      <Header />
      <Routess />
      <About2 />
      <Skills />
    </Grid>
  );
}

export default App;
