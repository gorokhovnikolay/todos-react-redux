import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './components/Todo';
import styles from './todoList.module.css';

export const TodoList = () => {
	const todos = useSelector((state) => state.todosState);

	return (
		<div className={styles.todo_container}>
			{todos.length > 0 ? (
				todos.map(({ id, title, completed }) => (
					<Todo key={id} id={id} title={title} completed={completed} />
				))
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};
