import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { movieGetId } from '../../actions/MovieAction';
import { Header } from '../elements/Header'

export const MovieShow = () => {
	const IMG_URL = import.meta.env.VITE_API_IMG;

	const dispatch = useDispatch();
	const { id } = useParams();

	const { movieSelected: movie } = useSelector(state => state.movie);
	
	useEffect(() => {
		dispatch(movieGetId(id));
	}, [id])
	
	if (!Object.keys(movie).length ) {
		return (
			<></>
		);
	}

	const vote_avarege = `${ ((movie.vote_average / 100) * 1000).toFixed(0) }%`;

  return (
    <>
			<Header />
			
			<main>
        <div className="mx-auto max-w-4xl py-10 px-4 lg:max-w-7xl lg:px-40">
					<div className='bg-white rounded-lg border border-gray-200 shadow-md'>
						<div className='grid grid-cols-1 gap-10 md:grid-cols-2 sm:grid-cols-2'>
							<div className='sm:p-6 md:p-6 lg:p-6'>
								<img 
									src={ `${ IMG_URL }${ movie.poster_path} `}
									alt='Imagen'
									className='rounded-t sm:rounded-lg md:rounded-lg lg:rounded-lg'
								/>
							</div>
							<div className='px-6 sm:p-6 md:p-6 lg:p-6'>
								<div className='flex justify-end'>
									<Link to="/movies" className='bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-400'>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
										</svg>
									</Link>
								</div>

								<div className='flex justify-between text-sm pt-4'>
									<p className='font-bold text-xl capitalize'>{ movie.title }</p>
									<div className='flex justify-end gap-2'>
										{ movie.runtime } m
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
								</div>

								<div className='pt-4 text-md italic text-gray-600'>
									<p>{ movie.release_date }</p>
									
									{/* Eslogan */}
									<p>{ movie.tagline }</p>
								</div>

								<div className='pt-4'>
									<p className='font-bold'>Puntuación de usuario</p>
									<div className="w-full bg-gray-200 rounded-full">
										<div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: vote_avarege }}> 
											{ vote_avarege }
										</div>
									</div>
								</div>

								{/* Genres */}
								<div className='pt-4'>
									<p className='font-bold'>Generos</p>
									<ul className='pl-6 list-disc text-gray-500'>
										{
											movie.genres.map((genre) => (
												<li key={ genre.id } className='text-sm capitalize'>{ genre.name }</li>
											))
										}
									</ul>
								</div>
							</div>
						</div>
						{/* Description */}
						<div className='p-6 pt-4'>
							<p className='font-bold'>Descripción</p>
							<p className='text-sm'>{ movie.overview }</p>
						</div>
					</div>
				</div>
			</main>
    </>
  )
}
