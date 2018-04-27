import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
      case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    defualt:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// i'd like to increment the count and send to store via store.dispatch();
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'SET',
  count: 101
})

// console.log("this is from redux 101")

// check it out at: https://redux.js.org/ REDUX FOR ASYNC CONTEXTS

// STEP 1 INSTALL NEW TOOL: yarn add redux@3.7.2
// STEP 2: import stuff from the Redux library: import { createStore } from 'redux';
// create a const for store = createStore with arguement that is current state (state) and set equal to default state object = { count: 0 }
// STEP 3: return state and store.getState
// now in our broswer we get an object back with a count of 0. Successfully created our first redux state container, set a default state value and got that value back using store.getState
// MUST PASS STATE to createStore function
// Lecture 86: changing redux store value using actions
// ACTIONS are objects that get sent to Redux store

// we want to be able to change our store by sending diff actions
// then we added the action as second arguement to createStore
// instead of using if else statements we used switch statements
//   if (action.type === 'INCREMENT') {
//    return {
//    count: state.count + 1
//  };
//  } else {
//  console.log('running')
//  return state;
//  }
// this got gutted👆
// added store.subscribe function to be able to do something when state changes
// create const unsubscribe = store.subscribe which works basically like byebug
