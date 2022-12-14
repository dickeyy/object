import Spline from '@splinetool/react-spline';
import { Box, ChakraProvider, Heading, Text } from '@chakra-ui/react';
import theme from '../theme';

export default function HomePage() {
  return (

    <ChakraProvider theme={theme}>
      <Box h={'100vh'} >
        <Spline aria-hidden={'true'} scene="https://prod.spline.design/h9lum21vjzEXnlHT/scene.splinecode" />

        {/* <Heading pos={'absolute'} top={0} >Object</Heading> */}
      </Box>
    </ChakraProvider> 
  );
}
