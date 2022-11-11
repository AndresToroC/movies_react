import Swal from "sweetalert2";
import { types } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Se obtiene el top de peliculas
export const movieAll = (page = null) => {
	const params = new URLSearchParams({
		api_key: API_KEY,
		language: 'es-ES', 
		page: (page) ? page : ''
	});

	return async(dispatch) => {
		try {
			await fetch(`${ API_URL }movie/top_rated?${ params.toString() }`)
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

export const movieSearch = (name) => {
	const params = new URLSearchParams({
		api_key: API_KEY,
		query: name,
		language: 'es-ES'
	});

	return async(dispatch) => {
		try {
			await fetch(`${ API_URL }search/movie?${ params.toString() }`)
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

export const movieGetId = (id) => {
	const params = new URLSearchParams({
		api_key: API_KEY,
		language: 'es-ES'
	});

	return async(dispatch) => {
		try {
			await fetch(`${ API_URL }movie/${ id }?${ params.toString() }`)
				.then(res => res.json())
				.then(data => {
					dispatch({
						type: types.movieGetId,
						payload: data
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