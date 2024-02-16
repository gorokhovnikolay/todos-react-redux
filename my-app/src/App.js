import { useDispatch } from 'react-redux';
import { TodoList, ControlPanel } from './components';
import styles from './app.module.css';
import { useEffect } from 'react';
import { getTodos } from './store/actions';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<h1>Список дел:</h1>
			<ControlPanel />
			<TodoList />
		</div>
	);
};
