import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './helpers/localStorage';

const reducers = () => ({});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk);
const serverState = window.INITIAL_STATE;
const persistedState = loadState();
const initialState = { ...serverState, ...persistedState };

const store = createStore(reducers, initialState, composeEnhancers(middleware));

store.subscribe(
  throttle(() => {
    saveState({
      cart: store.getState().cart
    });
  }, 1000)
);

export default store;
