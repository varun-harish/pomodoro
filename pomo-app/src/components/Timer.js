import { Box, Container, Stack, VStack } from '@chakra-ui/react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Timer() {
    return (
        <Container>
            <Box bg='#48BB78' w='100%' p={5} color='white'>
                <CountdownCircleTimer
                    isPlaying
                    duration={1500}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </Box>
        </Container>
        
    );
}