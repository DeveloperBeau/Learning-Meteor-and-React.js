import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { Tracker } from 'meteor/tracker';

import Login from '../imports/ui/Login';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/links" component={Link}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

window.browserHistory = browserHistory;

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathName = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push("/links");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push("/");
  }

});


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
