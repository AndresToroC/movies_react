import { types } from "../types/types";

const initialState = {
	movies: {
		results: []
	},
	movieSelected: {}
}

export const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
			case types.movieAll:
				return {
					...state,
					movies: action.payload,
					movieSelected: {}
				};

			case types.movieGetId:
				return {
					...state,
					movieSelected: action.payload
				}
	
			default:
				return state;
    }
}