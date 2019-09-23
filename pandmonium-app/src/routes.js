// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components

import App from './components/App'
import Hamburgers from './views/Hamburgers';
import Page404 from './components/Page404'

// Home
import Home from './views/selectTable';

// import Library from './containers/Library';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/hamburgers" component={Hamburgers} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
      {/* <Route path="/hamburgers/:id" component={Hamburger} /> */}
    </Switch>
  </App>;

export default AppRoutes;