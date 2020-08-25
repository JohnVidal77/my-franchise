import React from 'react';
import ThemeContainer from '../contexts/themes/theme-container';

import Router from './router';

function App() {
  return (
    <ThemeContainer>
      <Router />
    </ThemeContainer>
  );
}

export default App;
