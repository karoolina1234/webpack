import { legacy_createStore as createStore, combineReducers } from 'redux';
import loginReducer from './reducer';
import reducerDetail from './reducerDetail';

const rootReducer = combineReducers({
    login: loginReducer, 
    hero: reducerDetail, 
  });

const store = createStore(rootReducer);


export default store;