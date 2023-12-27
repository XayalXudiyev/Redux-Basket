import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const BasketProducts = () => {

  const { products, total, ammount } = useSelector(store => store.basketReducer)

  return (
    <div className='py-4 flex flex-col text-center'>
      <p className='text-2xl text-center font-medium'>Basket</p>

      {ammount === 0
        ? <p className='text-lg text-center font-medium'>Your basket is empty</p>
        : <div className=''>
          <div className='w-40 '>
            {
              products.map((item, i) =>
                <Product
                  key={new Date().getTime + Math.random()}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  ammount={item.ammount}

                />
              )
            }
          </div>
          <div className='flex flex-row items-center justify-evenly py-8'>
            <p className='text-2xl font-medium'>Total</p>
            <p className='text-2xl font-medium'>${total}</p>
          </div></div>
      }

    </div>
  )
}

export default BasketProducts
