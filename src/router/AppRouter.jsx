import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { MovieScreen } from '../components/movies/MovieScreen';
import { SerieScreen } from '../components/series/SerieScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/movies" element={<MovieScreen />} />
				<Route path="/series" element={<SerieScreen />} />

				{/* Redireccionar a la pagina principal si la ruta no esta definida */}
				<Route path="*" element={<Navigate to="/movies" />} />
			</Routes>
		</BrowserRouter>
  )
}
