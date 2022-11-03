import { configureStore } from "@reduxjs/toolkit";
import { MovieReducer } from "../reducers/Moviereducer";

export default configureStore({
	reducer: {
		movie: MovieReducer
	}
})