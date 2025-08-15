import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  // Custom color palettes that work well with your warm theme
  sage: {
    50: '#f0f4f3',
    100: '#dde8e4',
    200: '#b8d0c7',
    300: '#8bb4a6',
    400: '#5d9984',
    500: '#4a7c69',    // Main sage color - earthy teal
    600: '#3d6454',
    700: '#325144',
    800: '#2a4237',
    900: '#243730'
  },
  oceanGreen: {
    50: '#f0f7f4',
    100: '#dcede4',
    200: '#bcdccb',
    300: '#8fc5aa',
    400: '#5ea885',
    500: '#4a9270',    // Main ocean green - deeper teal
    600: '#3a7459',
    700: '#305e49',
    800: '#294c3c',
    900: '#243f32'
  },
  dustyTeal: {
    50: '#f2f6f5',
    100: '#e0ebe8',
    200: '#c1d7d1',
    300: '#95bdb4',
    400: '#699f95',
    500: '#52847b',    // Main dusty teal - muted and warm
    600: '#426a63',
    700: '#375651',
    800: '#2f4742',
    900: '#293b37'
  },
  // More bluish teal variations
  oceanBlue: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',    // Main ocean blue - bright blue-teal
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  tealBlue: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',    // Main teal blue - similar to current teal but more blue
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a'
  },
  coolTeal: {
    50: '#f1f9f9',
    100: '#d4edeb',
    200: '#a8dbd6',
    300: '#74c2bd',
    400: '#4ca5a0',
    500: '#3d8b85',    // Main cool teal - balanced blue-green
    600: '#326e6a',
    700: '#2b5856',
    800: '#264947',
    900: '#233d3c'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
