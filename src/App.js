import { Grid } from '@mui/material';
import About from './component/About';
import Header from './component/Header';
import Routess from './Routess';

function App() {
  return (
    <Grid container>
      <Header />
      <About />
      <Routess />
    </Grid>
  );
}

export default App;
