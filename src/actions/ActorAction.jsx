import Swal from "sweetalert2";
import { FetchApi } from "../helpers/FetchApi";
import { types } from "../types/types";

export const actorAll = (page = null) => {
  return async(dispatch) => {
    try {
      const data = await FetchApi('person/popular', page);
      
			if (data) {
        dispatch({
          type: types.actorAll,
          payload: data
        })
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Ah ocurrido un error',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }
}

export const actorGetId = (actorId) => {
  return async(dispatch) => {
    try {       
      const data = await FetchApi(`/person/${ actorId }`);
      
			if (data) {
        dispatch({
          type: types.actorGetId,
          payload: data
        })
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Ah ocurrido un error',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }
}