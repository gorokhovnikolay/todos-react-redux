const fetching = (method, { id, ...payload } = {}) => {
	let url = 'http://localhost:3004/todos';
	let options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};
	switch (method) {
		case 'GET':
			break;
		case 'POST':
			options.body = JSON.stringify(payload);
			break;
		case 'PATCH':
			url += `/${id}`;
			options.body = JSON.stringify(payload);
			break;
		case 'DELETE':
			url += `/${id}`;
			break;

		default:
			break;
	}

	return () => fetch(url, options).then((response) => response.json());
};

export const createTodo = (newTodo) => fetching('POST', newTodo);
export const readTodo = () => fetching('GET');
export const updateTodo = (newTodo) => fetching('PATCH', newTodo);
export const deleteTodo = (todoID) => fetching('DELETE', { id: todoID });
