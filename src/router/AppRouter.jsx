import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { ActorScreen } from '../components/actor/ActorScreen';
import { ActorShow } from '../components/actor/ActorShow';
import { MovieScreen } from '../components/movies/MovieScreen';
import { MovieShow } from '../components/movies/MovieShow';

export const AppRouter = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/movies" element={<MovieScreen />} />
				<Route path="/movies/:id" element={<MovieShow />} />

				<Route path="/actor" element={<ActorScreen />} />
				<Route path="/actor/:id" element={<ActorShow />} />

				{/* Redireccionar a la pagina principal si la ruta no esta definida */}
				<Route path="*" element={<Navigate to="/movies" />} />
			</Routes>
		</BrowserRouter>
  )
}
