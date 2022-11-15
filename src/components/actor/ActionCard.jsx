import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actorGetId } from '../../actions/ActorAction';

export const ActionCard = ({ actors }) => {
  const API_IMG = import.meta.env.VITE_API_IMG;
  const dispatch = useDispatch();

  const handleActorGetId = (id) => {
    dispatch(actorGetId(id));
  }

  return (
    <>
			{
				actors.results.map((actor) => {
					return actor.profile_path ? 
						<div className='group relative' key={ actor.id }>
							<Link to={ `/actor/${ actor.id }` } onClick={ () => handleActorGetId( actor.id ) }>
								<img 
									src={ `${ API_IMG }${ actor.profile_path }` }
									alt='Imagen'
									className='rounded-lg'
								/>
								<div className='py-4'>
									<div className='text-sm text-center font-bold'>
										{ actor.name }
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
