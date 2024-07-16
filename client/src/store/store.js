import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import reducers from '../reducers'; 

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});
// const store = configureStore(
//    reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export default store;