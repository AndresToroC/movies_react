import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Header } from '../elements/Header';

export const ActorShow = () => {
  const IMG_URL = import.meta.env.VITE_API_IMG;

  const { actorSelected: actor } = useSelector(state => state.actor);

  if (!Object.keys(actor).length) {
    return (
      <>Cargando...</>
    );
  }

  return (
    <>
      <Header />
			
			<main>
        <div className="mx-auto max-w-4xl py-10 px-4 lg:max-w-7xl lg:px-40">
					<div className='bg-white rounded-lg border border-gray-200 shadow-md'>
						<div className='grid grid-cols-1 gap-10 md:grid-cols-2 sm:grid-cols-2'>
							<div className='sm:p-6 md:p-6 lg:p-6'>
								<img 
									src={ `${ IMG_URL }${ actor.profile_path} `}
									alt='Imagen'
									className='rounded-t sm:rounded-lg md:rounded-lg lg:rounded-lg'
								/>
							</div>
							<div className='px-6 sm:p-6 md:p-6 lg:p-6'>
								<div className='flex justify-end'>
									<Link to="/actor" className='bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-400'>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
										</svg>
									</Link>
								</div>

								<div className='flex justify-between text-sm pt-4'>
									<p className='font-bold text-xl capitalize'>{ actor.name }</p>
								</div>

								<div className='pt-4 text-md italic text-gray-600'>
									<p>Fecha de nacimiento: { actor.birthday }</p>
									<p>{ actor.place_of_birth }</p>
								</div>
							</div>
						</div>
						{/* Description */}
						<div className='p-6 pt-4'>
							<p className='font-bold'>Biografía</p>
							<p className='text-sm'>{ actor.biography }</p>
						</div>
					</div>
				</div>
			</main>
    </>
  )
}
