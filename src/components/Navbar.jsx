import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const ammount = useSelector(store => store.basketReducer.price)
    console.log(ammount)
    return (
        <div className=' flex flex-row justify-evenly  p-4 text-lg font-medium bg-slate-400'>
            <p>Home </p>
            <p>Basket
                <span className=' text-xs align-top bg-red-600 text-white rounded-full px-2 py-1 mx-1'>
                    {ammount}
                </span>
            </p>
        </div>
    )
}

export default Navbar