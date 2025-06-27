import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaSteam } from "react-icons/fa";
import { SiPlaystation } from "react-icons/si";
import { SiEpicgames } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import { BsXbox } from "react-icons/bs";
import { IoLogoGameControllerB } from "react-icons/io";


const storeIconMap = {
    steam: <FaSteam size={24} />,
    playstationstore: <SiPlaystation size={24} />,
    epicgames: <SiEpicgames size={24} />,
    nintendo: <BsNintendoSwitch size={24} />,
    xboxstore: <BsXbox size={24} />,
    gog: <IoLogoGameControllerB size={24} />,
};

const Stores = ({ stores }) => {

    return (
        <Box display="flex" gap={2}>
            {stores?.map((store, index) => {
                const slug = store.store.slug.replace(/-/g, '') || store.store.name?.toLowerCase(); // adjust based on your data
                const icon = storeIconMap[slug];

                return (
                    <Box key={index}>
                        {icon || <span>{store.store.name}</span>}
                    </Box>
                );
            })}
        </Box>
    );
};

export default Stores;
