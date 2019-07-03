// we will learn how to use combineReducers to create multiple smaller functions and combine them together.
import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';

const uuid = require('uuid/v1');

// ACTION GENERATORS
// want to be able to ADD_EXPENSE
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(), //npm library uuid universally unique identifiers, later on they come from db
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// we are going to learn how we can break up the application into multiple reducers
// we are going to use a single reducers for each root property in our redux store
// we have expenses: and we have filters:
// we are going to create two reducers and combine them to create one store

// EXPENSES REDUCER create variable for reducer function set it equal to reducer function, take in two arguemnts
// default state is an empty array
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
    // this takes our expense state array and adds action.expense onto the array
      return [
        ...state,
        action.expense
      ];
       //state.concat(action.expense)
       case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

// FILTERS REDUCER

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// STORE CREATION

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// create a static object that represents the various thins we want to keep track of
const demoState = {
  // create an expenses array, and add objects into the array {} set objects like so id: ''
  expenses: [{
    id: 'randomlygenerated',
    description: 'Jan Rent',
    note: 'This was the final payment for this address',
    amount: 54500,
    createdAt: 0
  }],
  // we will track something else on redux store: filters which is an object
  filters: { // we are going to track current value for certain filters
    text: 'rent', // can search through note: object and display only the matches
    sortBy: 'dateoramount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// previously we passed reducer functions directly into createStore that allowed us to just have one reducer that maintains the entire state, that gets messy
// instead we use combineReducers, call it and passing return value into createStore and on this object we define what we want our redux store to look like
// now instead of being just an array we have an object with two properties
// expenses property managed by expensesReducer etc.
// how to we get our reducers to respond to specific actions?


// spreading through user crashes our app because spread syntax on pbjects is not mainstream yet
// we need to add a babel plugin babeljs.docs/plugins/transform-object-rest-spread
// yarn add babel-plugin-transform-object-rest-spread@6.23.0
const user = {
  name: "Jen",
  age: 24
}

console.log({...user});