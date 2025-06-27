import './App.css';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import { Route, Routes } from 'react-router-dom';
import GameDetail from './components/GameDetail';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{backgroundColor:'#0D0D0D'}}>
      <Nav />
      <Routes>
        {/* Handles both "/" and "/games/:id" */}
        <Route path="/game-website" element={<MainContent />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
