import React from 'react';
import Game from './Game';
import { Typography, Grid, Box } from '@mui/material';

const Games = ({ games, title }) => {
  if (!games || games.length === 0) return null;
  return (
    <Box>
      <Typography
        variant="h6"
        align="center"
        sx={{ color: '#CCCCCC', mb: 2, fontWeight: 'bold' }}
      >
        {title}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={12} key={game.id}>
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              stores={game.stores}
              dominantColor={game.dominant_color}
              platforms={game.platforms}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Games;
