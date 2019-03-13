import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'src/reducers/rootReducer';

let middleware = process.env.NODE_ENV === 'development' ?
  [ require('redux-immutable-state-invariant').default(), thunk]
  :[ thunk ];


export default function configureStore() {
  return createStore(rootReducer, {}, applyMiddleware( ...middleware ));
}