import React, { useState } from 'react';
import { AddTodo, SearchTodo } from './components';
import styles from './controlpanel.module.css';
import { useDispatch } from 'react-redux';
import { addNewTodo, sortTodo } from '../../store/actions';

export const ControlPanel = () => {
	const dispatch = useDispatch();

	const [titleTodo, setTitleTodo] = useState('');
	const [inputVisible, setInputVisible] = useState(true);

	const changeTodo = () => {
		if (titleTodo.length > 0) {
			dispatch(addNewTodo(titleTodo));
			setTitleTodo('');
		}
	};
	const sortTodoByAlphavite = () => {
		dispatch(sortTodo());
	};

	return (
		<div className={styles.container_contol}>
			{!inputVisible && (
				<button
					onClick={() => setInputVisible((prev) => !prev)}
					title="Свернуть поиск"
				>
					↪
				</button>
			)}
			<AddTodo
				titleTodo={titleTodo}
				setTitleTodo={setTitleTodo}
				inputVisible={inputVisible}
			/>
			<SearchTodo inputVisible={inputVisible} />
			{inputVisible && (
				<button
					onClick={() => setInputVisible((prev) => !prev)}
					title="Найти задачу"
				>
					🔎
				</button>
			)}
			<button onClick={sortTodoByAlphavite} title="Сортировка от А до Я">
				📶
			</button>

			<button onClick={changeTodo} title="Добавить заметку">
				➕
			</button>
		</div>
	);
};
