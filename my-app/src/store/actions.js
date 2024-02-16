import { readTodo, createTodo, deleteTodo, updateTodo } from '../api';

const readrTodos = readTodo();

const getTodosFn = (dispatch) => {
	readrTodos().then((data) => {
		dispatch({
			type: 'GET_TODOS',
			payload: data,
		});
	});
};

export const getTodos = () => {
	return getTodosFn;
};
export const addNewTodo = (newTitle) => {
	const addTodos = createTodo({ title: newTitle, completed: false });
	addTodos().then(() => console.log('Задача создана'));

	return getTodosFn;
};

export const removeAction = (id) => {
	const delTodo = deleteTodo(id);
	delTodo().then(() => console.log('Задача успешно удалена'));
	return getTodosFn;
};

export const editAction = ({ id, e }) => {
	const { checked } = e.target;
	const editTodo = updateTodo({ id, completed: checked });
	editTodo().then(() => console.log('Задача успешно изменена'));
	return getTodosFn;
};

export const sortTodo = () => {
	return {
		type: 'SORT_TODO',
	};
};

export const searchTodo = (value) => {
	return (dispatch) => {
		readrTodos().then((data) => {
			dispatch({
				type: 'SEARCH_TODO',
				payload: { data, value },
			});
		});
	};
};
