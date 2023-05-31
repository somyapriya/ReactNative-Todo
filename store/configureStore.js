import { createStore, combineReducers } from 'redux';
import todoReducer from '../reducers/state';
const rootReducer = combineReducers(
{ todoSelector: todoReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;