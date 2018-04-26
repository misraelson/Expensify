import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This Is FROM DASHBOARD COMPONENT
  </div>
);

const AddExpensePage = () => (
  <div>
    This Is My ADD EXPENSE Component
  </div>
);

const EditExpensePage = () => (
  <div>
    This Is My EDIT EXPENSE Component
  </div>
);

const HelpPage = () => (
  <div>
    This Is My HELP PAGE Component
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

//
// installed react router DOM
// created router configuration
// just a single instance of <BrowserRouter> is required and we set up as many instances of <Route> as pages we have
// set up exact for first route
// config option historyApiFallback in webpack.config.js
// Lecture 78
// added switch for 404 pages: https://reacttraining.com/react-router/web/api/Switch
// put Switch inside BrowserRouter => changed our <div> with routes inside to <Switch>
// when ReactRouter sees switch it is going to move through route definitions in order and STOP when it sees a match
// when it finds a route match, switch will stop, but our NotFoundPage will match when route is not defined
// switch goes through one at a time and {NotFoundPage} is always found when there is no match
