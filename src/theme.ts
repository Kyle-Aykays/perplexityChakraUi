import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#2a2a2a',
      800: '#1a1a1a',
      900: '#111111',
    },
    cyan: {
      400: '#20d4e7',
      500: '#00bcd4',
      600: '#00acc1',
    },
  },
  fonts: {
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
  components: {
    Input: {
      variants: {
        perplexity: {
          field: {
            bg: 'gray.800',
            border: '1px solid',
            borderColor: 'gray.700',
            borderRadius: '16px',
            color: 'white',
            fontSize: 'lg',
            h: '60px',
            px: '20px',
            _placeholder: {
              color: 'gray.400',
            },
            _focus: {
              borderColor: 'gray.600',
              boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1)',
            },
            _hover: {
              borderColor: 'gray.600',
            },
          },
        },
      },
    },
    Card: {
      variants: {
        perplexity: {
          container: {
            bg: 'gray.800',
            borderColor: 'gray.700',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
  },
});

export default theme;