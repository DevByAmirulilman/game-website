import { Box } from '@mui/material';
import React from 'react';
import { SiPlaystation5 } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiPlaystation4 } from "react-icons/si";
import { SiPlaystation3 } from "react-icons/si";


const platformIconMap = {
    'playstation5': <SiPlaystation5 size={20} color="#00FFFF" />,
    'pc': <FaLaptopCode size={20} color="#00FFFF" />,
    'xbox': <FaXbox size={20} color="#00FFFF" />,
    'playstation4': <SiPlaystation4 size={20} color="#00FFFF" />,
    'playstation3': <SiPlaystation3 size={20} color="#00FFFF" />,
};

const Platforms = ({ platforms }) => {
    return (
        <Box display="flex" gap={1} flexWrap="wrap">
            {platforms?.map((platformObj, index) => {
                const name = platformObj.platform?.slug?.toLowerCase() || '';
                const matchedIcon = Object.entries(platformIconMap).find(([key]) =>
                    name.includes(key)
                );

                return (
                    <Box key={index}>
                        {matchedIcon?.[1] || null} {/* No fallback text */}
                    </Box>
                );
            })}
        </Box>
    );
};

export default Platforms;
