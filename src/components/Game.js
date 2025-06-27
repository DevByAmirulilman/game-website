import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from '@mui/material';
import { loadDetail } from '../actions/detailAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import Stores from './Stores';
import Platforms from './Platforms';

const Game = ({ name, released, image, id, stores, platforms, dominantColor }) => {
    const dispatch = useDispatch();
    const stringPathId = id.toString();

    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    };

    return (
        <Card
            onClick={loadDetailHandler}
            sx={{
                width: '100%',
                maxWidth: 360,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 3,
                boxShadow: 3,
                border: `2px solid ${'#00FFFF'}`,
                backgroundColor: '#0D0D0D',
                color: '#fff',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: `0 0 15px ${dominantColor || '#00FFFF'}`,
                },
            }}
        >
            <Link
                to={`/game/${id}`}
                style={{ textDecoration: 'none', color: 'inherit', height: '100%' }}
            >
                <CardHeader
                    title={
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 'bold', color: '#00FFFF', fontSize: '1rem' }}
                        >
                            {name}
                        </Typography>
                    }
                    subheader={
                        <Typography variant="caption" sx={{ color: '#ccc' }}>
                            {released}
                        </Typography>
                    }
                    sx={{ pb: 0 }}
                />

                <CardMedia
                    component="img"
                    image={smallImage(image, 640)}
                    alt={name}
                    sx={{
                        height: 180,
                        objectFit: 'cover',
                        borderRadius: '4px',
                    }}
                />

                <CardContent>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                        <Typography sx={{ color: '#CCCCCC' }}>Stores:</Typography><Stores stores={stores} />
                    </Box>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                        <Typography sx={{ color: '#CCCCCC' }}>Platforms:</Typography><Platforms platforms={platforms} />
                    </Box>
                </CardContent>
            </Link>
        </Card>
    );
};

export default Game;
