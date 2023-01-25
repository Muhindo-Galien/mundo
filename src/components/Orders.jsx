import React from 'react'
import { useGlobalState } from '../store'
import OderCard from './OderCard';

const Orders = ({loaded, setLoaded}) => {
  const [myorders] = useGlobalState('myorders')
  
  return (
    <>
        <div className='max-w-4xl mx-auto pt-24 text-gray-600 pb-10'>
          <h2 className='mx-5 text-center py-2 sm:py-5 font-bold text-2xl'>My orders</h2>
          {myorders?.length > 0?(
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-3 py-2.5 mx-4'>
              <OderCard/>
            </div>
            
          ):(

            <div className='flex justify-center items-center'>
              <h1 className='font-bold text-green-400 pt-10'>You don't have any order yet!</h1>
            </div>
          )}
        </div>
    </>
  )
}

export default Orders