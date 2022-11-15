import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { movieGetId } from '../../actions/MovieAction';

export const MovieCard = ({ movies }) => {
  const API_IMG = import.meta.env.VITE_API_IMG;
	const dispatch = useDispatch();

	const handleMovieGetId = (id) => {
		dispatch(movieGetId(id));
	}
	
  return (
		<>
			{
				movies.results.map((movie) => {
					return movie.poster_path ? 
						<div className='group relative' key={ movie.id }>
							<Link to={ `/movies/${ movie.id }` } onClick={ () => handleMovieGetId( movie.id ) }>
								<img 
									src={ `${ API_IMG }${ movie.poster_path }` }
									alt='Imagen'
									className='rounded-lg'
								/>
								<div className='py-4'>
									<div className='text-sm text-center font-bold'>
										{ movie.original_title }
									</div>
								</div>
							</Link>
						</div>
						: ''
				})
			}
		</>
  )
}
