import { Box, Card, Typography, Grid, Link } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import starFull from '../img/star-full.png';
import starEmpty from '../img/star-empty.png';
import Genres from './Genres';
import Publishers from './Publishers';
import Stores from './Stores';
import Platforms from './Platforms';

const GameDetail = () => {
    const navigate = useNavigate();
    const { screen, game, isLoading } = useSelector((state) => state.detail);
    console.log(game)

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const exitDetailHandler = (e) => {
        if (e.target.classList.contains('shadow')) {
            navigate('/');
        }
    };

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <img
                    alt="star"
                    key={i}
                    src={i <= rating ? starFull : starEmpty}
                    style={{ width: 20, height: 20 }}
                />
            );
        }
        return stars;
    };

    if (isLoading) return null;

    return (
        <Box
            className="shadow"
            onClick={exitDetailHandler}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.6)',
                zIndex: 100,
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                px: { xs: 1, sm: 2 },
                py: { xs: 2, sm: 4 },
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: 900,
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF',
                    borderRadius: 2,
                    px: { xs: 2, sm: 3 },
                    py: { xs: 3, sm: 4 },
                    boxShadow: 6,
                }}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: '#00FFFF', fontSize: { xs: '1.4rem', sm: '2rem' } }}
                >
                    {game.name}
                </Typography>

                <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                    {getStars()}
                    <Typography variant="body2" sx={{ color: '#CCCCCC' }}>
                        {game.rating} / 5
                    </Typography>
                </Box>

                <Box mt={2}>
                    <img
                        src={game.background_image}
                        alt={game.name}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Typography
                    mt={2}
                    variant="body1"
                    sx={{
                        color: '#CCCCCC',
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        textAlign: 'justify',
                    }}
                >
                    {game.description_raw}
                </Typography>

                <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                    <Genres genres={game.genres} />
                </Box>

                <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                    <Publishers publishers={game.publishers} />
                </Box>

                <Box display="flex" alignItems="center" gap={1} flexWrap="wrap" mt={2}>
                    <Typography sx={{ color: '#CCCCCC' }}>Stores:</Typography><Stores stores={game.stores} />
                </Box>

                <Box display="flex" alignItems="center" gap={1} flexWrap="wrap" mt={2}>
                    <Typography sx={{ color: '#CCCCCC' }}>Platforms:</Typography><Platforms platforms={game.platforms} />
                </Box>


                <Box display="flex" alignItems="center" gap={1} flexWrap="wrap" mt={2}>
                    <Typography sx={{ color: '#CCCCCC' }}>Website:</Typography>
                    <Link
                        href={game.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#00FFFF', wordBreak: 'break-all' }}
                    >
                        {game.website}
                    </Link>
                </Box>


                <Typography mt={4} variant="h6" sx={{ color: '#00FFFF' }}>
                    Screenshots
                </Typography>

                <Grid container spacing={2} mt={1}>
                    {screen.results?.map((shot) => (
                        <Grid item xs={12} sm={6} md={4} key={shot.id}>
                            <img
                                src={shot.image}
                                alt="screenshot"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Card>
        </Box>
    );
};

export default GameDetail;
