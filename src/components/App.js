import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LoginPage, HomePage, SignupPage, ListPage } from '../components';

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default';

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/list" component={HomePage} exact />
      <Route path="/users" component={ListPage} exact />
      <Route path="/signup" component={SignupPage} exact />
      <Route path="/" component={LoginPage} exact />
      <Redirect exact from="/sample" to="/" />
    </Switch>
  </ThemeProvider>
);

export default App;
