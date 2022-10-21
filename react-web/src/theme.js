import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: {
      body: {
        bg: '#FF8FEE',
        color: 'white',
      },
    },
  },
  colors: {
  },
}

// 3. extend the theme
const theme = extendTheme(config)

export default theme