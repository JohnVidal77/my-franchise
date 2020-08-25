import React from 'react';
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core';
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming';

import CustomTheme from '../../styles/themes';

const ThemeContainer: React.FC = ({children}) => {
  return (
    <ChakraThemeProvider theme={CustomTheme}>
      <ColorModeProvider value="light">
        <EmotionThemeProvider theme={CustomTheme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default ThemeContainer;
