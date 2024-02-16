import React, { useRef, useState } from 'react';
import styles from './searchTodo.module.css';
import { useDispatch } from 'react-redux';
import { searchTodo } from '../../../../store/actions';
import { debounce } from './utils/debounce';

export const SearchTodo = ({ inputVisible }) => {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();
	const debounceValue = useRef(debounce(dispatch, 1000)).current;

	const onSearch = (e) => {
		const { value } = e.target;
		setSearchValue(value);
		debounceValue(searchTodo(value));
	};

	return (
		<input
			className={inputVisible ? styles.search_input : styles.search_input2}
			type="text"
			value={searchValue}
			placeholder="Найти задачу"
			onChange={onSearch}
		/>
	);
};
