import React from 'react'
import { Box } from '@chakra-ui/react'

const SnakeSquare = ({ children }) => {
    return (
        <Box
            width='25px'
            height='25px'
            border='1px solid black'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            {children}
        </Box>
    )
}

export default SnakeSquare;
