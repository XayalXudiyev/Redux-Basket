import React from 'react'
import Navbar from './components/Navbar'
import BasketProducts from './components/BasketProducts'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { updateTotal } from './redux/features/basketSlice'


export default function App() {

  const { products } = useSelector(store => store.basketReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  

   } , [products,dispatch])


  return (


    <div>
      <Navbar />
      <BasketProducts />
    </div>

  )
}
