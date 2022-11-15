import Swal from "sweetalert2";
import { FetchApi } from "../helpers/FetchApi";
import { types } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Se obtiene el top de peliculas
export const movieAll = (page = null) => {
	return async(dispatch) => {
		try {
			const data = await FetchApi('movie/top_rated', page);
			
			if (data) {
				dispatch({
					type: types.movieAll,
					payload: data
				})
			}
		} catch (error) {
			Swal.fire({
				title: 'Error!',
				text: 'Ah ocurrido un error',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		}
	}
}

export const movieSearch = (query) => {
	return async(dispatch) => {
		try {
			const data = await FetchApi('search/movie', '', query);
      
			if (data) {
				dispatch({
					type: types.movieAll,
					payload: data
				})
			}

		} catch (error) {
			Swal.fire({
				title: 'Error!',
				text: 'Ah ocurrido un error',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		}
	}
}

export const movieGetId = (id) => {
	return async(dispatch) => {
		try {
			const data = await FetchApi(`movie/${ id }`);
      
			if (data) {
				dispatch({
					type: types.movieGetId,
					payload: data
				})
			}
		} catch (error) {
			Swal.fire({
				title: 'Error!',
				text: 'Ah ocurrido un error',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		}
	}
}