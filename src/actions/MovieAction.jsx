import { types } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Se obtiene el top de peliculas
export const movieAll = () => {
	return async(dispatch) => {
		try {
			await fetch(`${ API_URL }movie/top_rated?api_key=${ API_KEY }`)
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: types.movieAll,
						payload: data
					})
				})
				.catch((e) => {
					Swal.fire({
						title: 'Error!',
						text: 'Ah ocurrido un error',
						icon: 'error',
						confirmButtonText: 'Ok'
					})
				})
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