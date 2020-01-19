import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Error from '../../pages/Error';
import UserPage from '../../pages/UserPage';
import IndexPage from '../../pages/IndexPage';

const Layout = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/user/">
        <Redirect to="/user/skromez" />
      </Route>
      <Route path="/user/:id" component={UserPage} />
      <Route exact path="/" component={IndexPage} />
      <Route path={'/*/*' && '/*/'} component={Error} />
    </Switch>
  </>
);

export default Layout;
