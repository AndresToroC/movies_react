import { types } from "../types/types";

const initialState = {
	movies: {
		results: []
	}
}

export const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
			case types.movieAll:
				return {
					...state,
					movies: action.payload
				};
	
			default:
				return state;
    }
}