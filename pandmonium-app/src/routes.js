// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import SelectTable from './views/selectTable';

// import Hamburgers from './components/Hamburgers';
// import Hamburger from './components/Hamburger';
import Page404 from './components/Page404/Page404';

// Container
import Home from './containers/Home';
// import Library from './containers/Library';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route exact path="/library" component={Library} /> */}
      {/* <Route exact path="/library/:id" component={Library} /> */}
      {/* <Route exact path="/hamburgers" component={Hamburgers} />
      <Route path="/hamburgers/:id" component={Hamburger} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/selectTable" component={SelectTable} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;