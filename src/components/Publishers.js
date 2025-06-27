import { Box, Typography } from '@mui/material';
import React from 'react';

const Publishers = ({ publishers }) => {
  if (!publishers || publishers.length === 0) return null;

  return (
    <Box mt={2}>
      <Typography variant="subtitle2" sx={{ color: '#CCCCCC', mb: 1 }}>
        Publishers:
      </Typography>
      <Box display="flex" gap={1} flexWrap="wrap">
        {publishers.map((pub, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#00FFFF20',
              px: 2,
              py: 1,
              borderRadius: 2,
            }}
          >
            <Typography variant="caption" sx={{ color: '#00FFFF' }}>
              {pub.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Publishers;
