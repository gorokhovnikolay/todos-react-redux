const initialState = [];

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TODOS': {
			return [...action.payload];
		}

		case 'SEARCH_TODO': {
			const { data, value } = action.payload;
			return [
				...data.filter(({ title }) => {
					if (title) {
						return title.toLowerCase().includes(value.trim().toLowerCase());
					}
					return false;
				}),
			];
		}

		case 'SORT_TODO': {
			return [
				...state.sort((a, b) => {
					if (a.title[0] > b.title[0]) {
						return 1;
					}
					if (a.title[0] < b.title[0]) {
						return -1;
					}
					return 0;
				}),
			];
		}
		default:
			return state;
	}
};
