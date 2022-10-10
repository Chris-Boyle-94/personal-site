import React, { useEffect, useState } from 'react'
import { Flex, Grid, Stack, Text } from '@chakra-ui/react'
import Food from './Food'
import Player from './Player'
import SnakeSquare from './SnakeSquare'

const Snake = () => {
    const [points, setPoints] = useState(0)
    const startingPosition = '9-5'
    const [headPosition, setHeadPosition] = useState(startingPosition)
    const [playerBodyPositions, setPlayerBodyPositions] = useState([])

    const size = []
    for (let i = 0; i < 10; i++) {
        size.push(i)
    }

    return (
        <Stack width='253px'>
            <Text>Snake</Text>
            <Text>Score: {points}</Text>
            <Grid border='2px solid black'>
                {size.map(row => {
                    const allSquares = []
                    for (let i = 0; i < 10; i++) {
                        let position = `${row}-${i}`
                        console.log()
                        allSquares.push(
                            <SnakeSquare key={i} position={position}>
                                {position == startingPosition && <Player />}
                            </SnakeSquare>
                        )
                    }
                    return (
                        <Flex key={row}>
                            {allSquares}
                        </Flex>
                    )
                    
                })}
            </Grid>
        </Stack>
    )
}

export default Snake;
