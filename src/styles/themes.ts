import {theme, DefaultTheme} from '@chakra-ui/core';

const CustomTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.purple,
      400: '#4F70DF',
    },
    yellow: {
      ...theme.colors.yellow,
      400: '#FCB02B',
    },
  },
};

export default CustomTheme;
