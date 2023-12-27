import React from 'react'
import { useDispatch } from 'react-redux'
import { increadAmmount, decreasedAmmount, removedAmmount } from '../redux/features/basketSlice'

const Product = ({ name, price, image, ammount }) => {

  const dispatch = useDispatch()



  return (
    <div className='flex flex-row  gap-8 px-10 '>
      <img src={image} alt={name + 'glassed'} className='w-40' />
      <div className='w-1/2 px-10 mr-9'>
        <p className='text-xl font-medium'>{name}</p>
        <p className='text-lg tracking-wide'>${price}</p>
        <button onClick={() => dispatch(removedAmmount({ name }))} className='text-red-500 tracking-wide pt-1 pb-3'>Remove </button>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-lg font-medium'>Ammount</p>
        <div className='flex flex-row items-center gap-4 text-gray-600 font-medium'>
          <button
            onClick={() => {
              if (ammount === 1) {
                dispatch(removedAmmount({ name }))
                return
              } dispatch(decreasedAmmount({ name }))
            }} className=' text-xl rounded-full px-3  bg-indigo-600 hover:bg-indigo-800 text-white'>-</button>
          <p>{ammount}</p>
          <button onClick={() => dispatch(increadAmmount({ name }))} className='text-xl rounded-full px-3  bg-indigo-600 hover:bg-indigo-800 text-white'>+</button>
        </div>
      </div>

    </div>
  )
}

export default Product
