console.log('App.js is running!');

// JSX- is JavaScript XML
var template = <p>This is JSX from app.js!</p>;
// we named our element app in index.html so thats what we call here
var appRoot = document.getElementById('app');
// this is where we are going
ReactDOM.render(template, appRoot);
