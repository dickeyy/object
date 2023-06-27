import Spline from '@splinetool/react-spline';
import { Box, ChakraProvider, Heading, Text } from '@chakra-ui/react';
import theme from '../theme';

export default function HomePage() {
  return (

    <ChakraProvider>
      <Box h={'100vh'} >
        <Spline aria-hidden={'true'} scene="https://prod.spline.design/5myx-z1U5t7Ny2Oe/scene.splinecode" />

        {/* <Heading pos={'absolute'} top={0} >Object</Heading> */}
      </Box>
    </ChakraProvider> 
  );
}
