import { types } from "../types/types";

const initialState = {
  actors: {
    results: []
  },
  actorSelected: {}
}

export const ActorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.actorAll:
      return {
        ...state,
        actors: action.payload
      }

    case types.actorGetId:
      return {
        ...state,
        actorSelected: action.payload
      }
  
    default:
      return state;
  }
}