import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

//
// installed react router DOM
// created router configuration
// just a single instance of <BrowserRouter> is required and we set up as many instances of <Route> as pages we have
// set up exact for first route
// config option historyApiFallback in webpack.config.js
