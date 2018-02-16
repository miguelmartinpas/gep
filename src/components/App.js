import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { HomePage } from '../components';

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default';

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </ThemeProvider>
);

export default App;
