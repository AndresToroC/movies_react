import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actorAll } from '../../actions/ActorAction'
import { Header } from '../elements/Header'
import { ActionCard } from './ActionCard'

export const ActorScreen = () => {
  const dispatch = useDispatch();

  const { actors } = useSelector(state => state.actor);

  useEffect(() => {
    dispatch(actorAll());
  }, [])

  return (
    <>
			<Header />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {
            (!actors.results.length) ? (
              <div className="text-md font-bold mt-6">
                No se encontraron registros
              </div>
            ) : (
              <div className='mt-6 grid grid-cols-2 gap-y-4 gap-x-6 md:grid-cols-6'>
                <ActionCard actors={ actors } />
              </div>
            )
          }
        </div>
      </main>
    </>
  )
}
