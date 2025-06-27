import { Box, Typography } from '@mui/material';
import React from 'react';

const Genres = ({ genres }) => {
  return (
    <Box display="flex" gap={1} flexWrap="wrap">
      {genres?.map((genre, index) => (
        <Box key={index} sx={{ backgroundColor: '#00FFFF20', px: 2, py: 1, borderRadius: 2 }}>
          <Typography variant="caption" sx={{ color: '#00FFFF' }}>
            {genre.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Genres;
