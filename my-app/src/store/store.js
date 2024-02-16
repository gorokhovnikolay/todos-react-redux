import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer } from './reducers/todosReducer';
import { controlPanelReducer } from './reducers/controlPanelReducer';

const reducer = combineReducers({
	todosState: todosReducer,
	controlPanelState: controlPanelReducer,
});

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
