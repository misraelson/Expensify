class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in hands computer';
    const options = ['thing one', 'Thing two', 'Thing four', 'Thing 11']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
   console.log(this.props)
    return (
      <dix>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </dix>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('She Gone');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
        {/* <Option /> */}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// to render a react component we use our CLASS NAME hence uppercase Header that looks like custom html

// to render we must use ReactDOM.render
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// Section 4 Lecture 18 : COMPONENT properties

// We are going to pass data in everytime we intialize a component (such as the header title of each page), this data is called PROPS

// We set up key value pairs. key can be anything we like
// Inside out components we have access to THIS. THIS references the instance of that component we have rendered. In this case for Header title-"Test Value" is this.props
// to pass it to our component, inside our h1 tag we add {jsx} a JavaScript expression with this.props.title

// Inside the IndecisionApp component RENDER we defined a new const title to be passed via jsx to header in the return
// We made a second const in IndecisionApp called subtitle. We gave header another prop called subtitle and set it equal to jsx {subtitle}
// Inside header component we set {this.props.subtitle} and our subtitle shows up

// created a new const inside IndecisionApp called options set it equal to some static strings
// then created a new PROPS on the <Options /> in IndecisionApp component

// inside the options component we access are options array this.props.options.map and use an arrow function and access the individual item in the array (option) => inside the <p> paragraph tag we want to set text and key. text being {option} inside p tags and key set to {option}

// THEN we remove p tags and render an instance of <Option />
// we then set up key equal to {option} and set up optionText={option}
// then inside Option component we set up jsx rendering {this.props.optionText}
// this gives us a ton of flexibility to change what option looks like. We can add text in front of {this.props.optionText} and it shows up for all the options

// Section 4 Lecture 29: EVENTS AND METHODS

// Apply jsx event handlers to class based components like Action

// first we set up a new method before render() in Action component called handlePick() then inside our button we set up an onClick={this.handlePick}
// back inside our new function we add an < alert('handlePick'); > that flashes a message to the screen when we click on that button

// add our <form onSubmit={this.handleAddOption}> to the AddOption component, gave it an <input> with type and name and added <button>
// then above inside the component (CLASS METHOD) we defined handleAddOption(e) that took in our event
// defined a const variable called option and set it equal to e.target.elements.option.value.trim()
// set the if(option) to return our alert(option) which will display the value of option in the flash message, so if option exists (is true) then alert(option)
