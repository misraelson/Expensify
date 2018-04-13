'use strict';

console.log('App.js is running!');

// JSX- is JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App!!'
  ),
  ' ',
  React.createElement(
    'p',
    null,
    'This is some info'
  )
);
// we named our element app in index.html so thats what we call here
var appRoot = document.getElementById('app');
// this is where we are going
ReactDOM.render(template, appRoot);
