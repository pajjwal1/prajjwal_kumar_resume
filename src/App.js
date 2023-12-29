import { Grid } from '@mui/material';
import About from './component/About';
import Header from './component/Header';
import Routess from './Routess';
import About2 from './component/About2';

function App() {
  return (
    <Grid container>
      <Header />
      <About />
      {/* <About2 /> */}
      <Routess />
    </Grid>
  );
}

export default App;
