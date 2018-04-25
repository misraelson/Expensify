import React from 'react';
import Modal from 'react-modal';
// create our component, it will be a stateless functional component
// make it equal to an arrow function and export it
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Okay</button>
  </Modal>
);

export default OptionModal;

// must give out Modal props in order to work. needs isOpen and contentLabel which is for accessibility

// Section 7 Lecture 61: Modals

// SETTING UP A MODAL
// added react-modal library to add modal functionality to our app
// these are the set up handlers:

// isOpen={!!props.selectedOption}
// onRequestClose={props.handleCloseModal}
// contentLabel="Selected Option"

// created new file in components called OptionModal.js
// imported react
// looked in react-modal docs and tracked down what we needed to import: import Modal from 'react-modal';
// import OptionModal in IndecisionApp
// we set up the actual component as a stateless component using CONST OptionModal = () =>
// set it equal to an arrow function
// then set our export at the bottom: export default OptionModal;
// we set up a div with some dummy text for a sanity check

// inside our return in IndecisionApp we create an instance of <OptionModal> at the bottom inside the render()

// back in OptionModal.js we set up <Modal> instance inside the const
// passed in two props to <Modal isOpen={true} contentLabel="Selected Option" to make our modal validator
// instead of static true or false, we want to track state of our Modal
// back in IndecisionApp we want to track a new thing in state = { selectedOption: undefined
// then we passed that new state to <OptionModal /> set selectedOption={this.state.selectedOption}
// we changed isOpen={false} => isOpen{!!selectedOption} using double !! to convert state of selectedOption to real boolean values

// instead of firing alert in handlePick we want to set the state
// added this.setState in handlePick to be able to set selectedOption: option -> whatever is in the option variable above
// used some conditional rendering to check if {props.selectedOption} is truthy or not && if true render p tag
// && <p>{props.selectedOption}</p>
// if option exists it will be displayed

// ABILITY TO CLOSE THE MODAL:
// created a new handler in IndecisionApp called handleCloseModal. left args empty, set up arrow with function body.
// called this.setState() called it and passed in updater function in order to clear value -> selectedOption: undefined
// now that handler is all set up we can pass that down into option modal. we call it same thing
// handleCloseModal={this.handleCloseModal} now the Modal component has access to handleCloseModal as a PROP
// when does it need to call it? when the button gets clicked. so we set up an onClick
// we reference {props.handleCloseModal} that causes the function to actually fire when the button gets clicked
