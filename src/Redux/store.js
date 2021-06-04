import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {courseReducer} from './Reduces/Reduces';

const coRed = combineReducers({
  course: courseReducer,
});

export const store = createStore(
  coRed,
  composeWithDevTools(applyMiddleware(thunk)),
);
