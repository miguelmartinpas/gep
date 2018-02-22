import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LoginPage, HomePage } from '../components';

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default';

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/list" component={HomePage} exact />
      <Route path="/" component={LoginPage} exact />
    </Switch>
  </ThemeProvider>
);

export default App;
