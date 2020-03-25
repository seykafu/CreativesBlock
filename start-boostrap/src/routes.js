import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './src/App.js';
import index from './src/index.js';
Import Stories from './src/Stories.js';
// import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={index} />
    <Route path="/some/where" component={Stories} />
  </Route>
);