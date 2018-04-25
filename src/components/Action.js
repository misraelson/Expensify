import React from 'react';

const Action = (props) => (
  <div>
    <button className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);

export default Action;

// with ES6 'class' is a reserved word so to give styling to our elements we use className="description"
// then over in our _button.scss partial we can give that button custom styling
