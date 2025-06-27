import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadGames } from '../actions/gamesAction';
import Games from './Games';

const MainContent = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { newGames, upcoming, popular, searched } = useSelector((state) => state.games);

  return (
    <Box
      sx={{
        backgroundColor: '#0D0D0D',
        minHeight: '100vh',
        p: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {searched.length > 0 && (
          <Grid item xs={12}>
            <Games title="Search Results" games={searched} />
          </Grid>
        )}

        {/* Row for 3 aligned categories */}
        <Grid item xs={12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Games title="Popular Games" games={popular} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Games title="Upcoming Games" games={upcoming} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Games title="New Games" games={newGames} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
