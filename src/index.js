import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {FILTER_TEXT_CHANGED} from './constants'

const globalReducer = (state, action) => {
  console.log(action.payload)
  switch (action) {
    case FILTER_TEXT_CHANGED:
      return {filterText: action.payload}
    default:
      return state;
  }
};

const initialState = {
  filterText: '',
};

const store = createStore(globalReducer,initialState);
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root'));
