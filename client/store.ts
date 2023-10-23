// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import slice from './features/slice';
// import thunk from 'redux-thunk';

const store = configureStore(
  {
    reducer: { groups: slice },
  },
  composeWithDevTools(/* applyMiddleware(thunk) */),
);

// store.dispatch(loadMarkets());

export default store;
