import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers'; 
import { Provider } from 'react-redux';

// STORE - GLOBALIZED STATE
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//display the store in console
//store.subscribe(() => console.log(store.getState()));

//DISPATCH - HOW WE EXECTUTE AN ACTION, SENDS THE ACTION TO THE REDUCER, THEN THE REDUCER CHECKS WHAT TO DO, AND THE STORE GETS UPDATED  
//store.dispatch(increment());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);






