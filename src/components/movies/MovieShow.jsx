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

	const { movieSelected } = useSelector(state => state.movie);
	
	useEffect(() => {
		dispatch(movieGetId(id));
	}, [id])
	
	if (!Object.keys(movieSelected).length ) {
		return (
			<></>
		);
	}

  return (
    <>
			<Header />
			
			<main>
        <div className="mx-auto max-w-2xl py-10 px-4 lg:max-w-7xl lg:px-8">
					<div className='bg-white p-6 rounded-lg border border-gray-200 shadow-md'>
						<div className='grid grid-cols-1 gap-10 md:grid-cols-2 sm:grid-cols-2'>
							<div>
								<img 
									src={ `${ IMG_URL }${ movieSelected.poster_path} `}
									alt='Imagen'
									className='rounded-md'
								/>
							</div>
							<div>
								<div>
									<Link to="/movies" className='bg-gray-500 rounded-md'>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
										</svg>
									</Link>
								</div>

								<div className='flex justify-between text-sm pt-4'>
									<h2 className='font-bold text-lg capitalize'>{ movieSelected.title }</h2>
									<div className='flex justify-end gap-2'>
										{ movieSelected.runtime } m
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
								</div>

								{/* Eslogan */}
								<div className='pt-4'>
									<h3 className='font-bold'>Eslogan</h3>
									<p className='text-sm'>{ movieSelected.tagline }</p>
								</div>

								{/* Genres */}
								<div className='pt-4'>
									<h3 className='font-bold'>Generos</h3>
									<ul className='pl-6 list-disc text-gray-500'>
										{
											movieSelected.genres.map((genre) => (
												<li key={ genre.id } className='text-sm capitalize'>{ genre.name }</li>
											))
										}
									</ul>
								</div>
							</div>
						</div>
						{/* Description */}
						<div className='pt-4'>
							<h3 className='font-bold'>Descripción</h3>
							<p className='text-sm'>{ movieSelected.overview }</p>
						</div>
					</div>
				</div>
			</main>
    </>
  )
}
