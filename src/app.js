class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

// a react component is just an es6 class
// we use the global REACT with the COMPONENT class value which gives us all the react features
// REact components all REQUIRE one method: render
class Header extends React.Component {
  render() {
    return (
      <dix>
        <h1>Indecision</h1>
        <h2>Put your life in hands computer</h2>
      </dix>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options component goes here</p>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        OPTION Component Here
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>AddOptions component goes here</p>
      </div>
    );
  }
}

// to render a react component we use our CLASS NAME hence uppercase Header that looks like custom html

// to render we must use ReactDOM.render
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
