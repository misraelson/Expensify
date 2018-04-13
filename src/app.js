console.log('App.js is running!');

// JSX- is JavaScript XML
var template = <div><h1>Indecision App!!</h1> <p>This is some info</p></div>;
// we named our element app in index.html so thats what we call here
var appRoot = document.getElementById('app');
// this is where we are going
ReactDOM.render(template, appRoot);
