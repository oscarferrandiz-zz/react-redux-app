import React from 'react';
import { Route, IndexRoute } from 'react-router';

// App
import App from 'components/app/App';

// Pages
import Home from 'components/pages/Home';

const configureRoutes = () => (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </div>
);

export default configureRoutes;
