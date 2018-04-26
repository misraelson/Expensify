import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the expense with the id of {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;

// we can populate prop object in dom such as location: search: with ?query=rent&sort=date
// or location: hash: with # key in our url such as #contact-us
// we want to set-up dynamic url's. how do we set up something say /edit/44 react router gives us a way
