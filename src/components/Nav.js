import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import { useDispatch } from 'react-redux';
import {fetchSearch} from '../actions/gamesAction';

const Nav = () => {
  const [query, setQuery] = useState('');
    const dispatch = useDispatch();
  const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(query));
        setQuery("");
  };

  return (
    <Box
      sx={{
        p: { xs: 3, md: 5 },
        backgroundColor: '#0D0D0D',
        textAlign: 'center',
      }}
    >
      <Typography
        fontFamily="'Barrio', cursive"
        color="#00FFFF"
        variant="h1"
        sx={{
          fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
          mb: 3,
        }}
      >
        Game News
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, sm: 3 },
        }}
      >
        <SportsEsportsTwoToneIcon
          sx={{
            width: { xs: 60, sm: 80, md: 100 },
            height: { xs: 60, sm: 80, md: 100 },
            color: '#00FFFF',
          }}
        />

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: 'center',
            width: '100%',
            maxWidth: 600,
          }}
        >
          <TextField
            placeholder="Search games..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
            autoFocus
            sx={{
              backgroundColor: '#00FFFF',
              borderRadius: 1,
            }}
          />
          <Button type="submit" variant="outlined" sx={{ whiteSpace: 'nowrap' }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
