import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
    404! - <Link to="/">Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify APP</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> <br/>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> <br/>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink> <br/>
    <NavLink to="/help" activeClassName="is-active">Get Help</NavLink> <br/>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage} />
      </Switch>
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
// Lecture 78
// added switch for 404 pages: https://reacttraining.com/react-router/web/api/Switch
// put Switch inside BrowserRouter => changed our <div> with routes inside to <Switch>
// when ReactRouter sees switch it is going to move through route definitions in order and STOP when it sees a match
// when it finds a route match, switch will stop, but our NotFoundPage will match when route is not defined
// switch goes through one at a time and {NotFoundPage} is always found when there is no match

// Lecture 79 Learning to Link between pages
// https://reacttraining.com/react-router/web/api/Link import Link into React Router DOM
// in our NotFoundPage component added a Link: <Link to="/">Home</Link>
// this does client side rendering, now we make call to ReactDom render() and renders "/"
// BrowserRouter needs a single route element so we need a <div> then we dump an instance of <Header> inside the <div> below <BrowserRouter> and put all the <Switch> stuff below
// now we see header everywhere
// import NavLink https://reacttraining.com/react-router/web/api/NavLink
// added activeClassName="is-active" to <NavLink> to allow us to style our links over in _base.scss partal we set font-weight to bold so that links are bold when user is on that page
// Lecture 80
