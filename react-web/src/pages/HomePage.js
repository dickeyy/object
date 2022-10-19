import Spline from '@splinetool/react-spline';
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

export default function HomePage() {
  return (

    <ChakraProvider theme={theme}>
      <Box h={'100vh'}>
        <Spline scene="https://prod.spline.design/Hm5UqT0sSCBgR9pY/scene.splinecode" />
      </Box>
    </ChakraProvider>
  );
}
