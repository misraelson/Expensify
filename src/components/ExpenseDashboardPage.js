import React from 'react';

const ExpenseDashboardPage = () => (
  <div>
    This Is FROM DASHBOARD COMPONENT
  </div>
);

export default ExpenseDashboardPage;

// Redux allows our components to describe what they need from the global redux state container making our components truly reusable
// Redux is a STATE CONTAINER, we create a REDUX STORE that is json array of data
// eg) expenses: [{_id: 'abc', description: 'rent', amount: 109500}]
// individual components are going to be able to define what they need from the store and what they want to add to the store
