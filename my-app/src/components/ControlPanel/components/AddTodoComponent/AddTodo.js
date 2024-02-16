import React from 'react';

import styles from './addTodo.module.css';

export const AddTodo = ({ titleTodo, setTitleTodo, inputVisible }) => {
	return (
		<input
			className={inputVisible ? styles.add_input : styles.add_input2}
			style={inputVisible ? { width: '100%' } : { width: '0%' }}
			type="text"
			value={titleTodo}
			placeholder="Создайте новую задачу"
			onChange={(e) => setTitleTodo(e.target.value)}
		/>
	);
};
