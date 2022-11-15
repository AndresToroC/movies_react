import Swal from "sweetalert2";
import { types } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const actorAll = (page = null) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'es-ES',
		page: (page) ? page : ''
  });

  return async(dispatch) => {
    try {
      await fetch(`${ API_URL }person/popular?${ params.toString() }`)
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: types.actorAll,
            payload: data
          })
        })
        .catch(() => {
          Swal.fire({
            title: 'Error!',
						text: 'Ah ocurrido un error',
						icon: 'error',
						confirmButtonText: 'Ok'
          });
        })
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
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'es-ES'
  });

  return async(dispatch) => {
    try {
      await fetch(`${ API_URL }/person/${ actorId }?${ params.toString() }`)
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: types.actorGetId,
            payload: data
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'Error!',
						text: 'Ah ocurrido un error',
						icon: 'error',
						confirmButtonText: 'Ok'
          });
        })
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