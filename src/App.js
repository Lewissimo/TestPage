import logo from './logo.svg';
import './App.css';
import Nav from './layout/Nav';
import Content from './layout/Content';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App" sx={{
        minHeight: '100svh',
        minWidth: '100vw',
        backgroundColor: "#031B31",
    }}>
      <Nav/>
      <Content />
    </Box>
  );
}

export default App;
