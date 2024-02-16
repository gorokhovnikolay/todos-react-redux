import React, { useState } from 'react';
import { removeAction, editAction } from '../../../store/actions';
import styles from './todo.module.css';
import { useDispatch } from 'react-redux';

export const Todo = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(completed);

	const removeTodoItem = (id) => {
		dispatch(removeAction(id));
	};
	const changeCheckedTodo = ({ id, e }) => {
		dispatch(editAction({ id, e }));
	};

	return (
		<div className={styles.todo_item}>
			<div className={styles.todo_item__left}>
				<input
					type="checkbox"
					defaultChecked={checked}
					onChange={(e) => {
						changeCheckedTodo({ e, id });
						setChecked((prev) => !prev);
					}}
				/>
				<div key={id}>{title}</div>
			</div>
			<div className={styles.todo_item__right}>
				<button onClick={() => removeTodoItem(id)}>x</button>
			</div>
		</div>
	);
};
