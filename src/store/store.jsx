import { configureStore } from "@reduxjs/toolkit";
import { MovieReducer } from "../reducers/Moviereducer";
import { ActorReducer } from "../reducers/ActorReducer";

export default configureStore({
	reducer: {
		movie: MovieReducer,
		actor: ActorReducer
	}
})