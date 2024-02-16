import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer } from './reducers/todosReducer';
import { controlPanelReducer } from './reducers/controlPanelReducer';

const reducer = combineReducers({
	todosState: todosReducer,
	controlPanelState: controlPanelReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
