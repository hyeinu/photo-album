import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import App from './components/App'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      {/* <Route path='/albums' component={}></Route>
      <Route path='/album/:id' component={}></Route>
      <Route path='/image/:id' component={}></Route> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
