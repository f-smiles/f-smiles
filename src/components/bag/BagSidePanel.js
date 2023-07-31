import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeFromBag, clearBag } from '../../store/bagSlice'
import { XMarkIcon } from '@heroicons/react/24/outline'


export default function BagSidePanel({ isBagOpen, setIsBagOpen }) {

  const dispatch = useDispatch()

  const bagItems = useSelector(state => state.bag.line_items)

  const getBagTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    bagItems.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  const handleToggleSidePanel = () => {
    setIsBagOpen(false);
  };

  const handleCheckout = async () => {
    await axios.post(`${process.env.REACT_APP_HOST}/api/v1/checkout/sessions/create-checkout-session`, bagItems)
    .then((response) => {
      if (response.data.url) {
        window.location.href = response.data.url
        // if (clearBagOnRedirect) { dispatch(clearBag()) }
      }
    }).catch((error) => console.log(error.message))
  }

  return (
    <>
    {isBagOpen && (
      <div className='fixed inset-0 z-50 h-screen overflow-hidden transition-all duration-500 bg-white/30 backdrop-blur-sm'>
        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="w-screen h-screen max-w-md transform translate-x-0 bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between p-6">
                <h2 className="text-lg font-medium text-gray-900">Shopping Bag</h2>
                <button type="button" className="p-2 -m-2 text-gray-400 hover:text-gray-500" onClick={handleToggleSidePanel}>
                  <span className="sr-only">Close panel</span>
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 px-4 py-6 sm:px-6">
                <ul className="space-y-6 divide-y divide-gray-200">
                {bagItems.length === 0 ? (
                  <li className="px-4 space-y-8 sm:px-0">
                    <p className='text-sm leading-6 text-gray-500'>You currently do not have any items in your bag.</p>
                  </li>
                  ) : (bagItems.map((item, index) => (
                    <li key={index} className="flex py-6">
                      <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                        <img src={item.image} alt={item.name} className="object-cover object-center w-full h-full" />
                      </div>
                      <div className="flex flex-col flex-1 ml-4">
                        <span className="flex justify-between text-base font-medium text-gray-900">
                          <p><Link to={`/products/${item.id}`}>{item.name}</Link></p>
                          <p className="ml-4">${item.price * item.quantity}</p>
                        </span>
                        <p className="text-gray-500">{item.variant}</p>
                        <p className="text-gray-500">${item.price}</p>
                        <span className="flex items-center justify-between flex-1 text-sm">
                          <p className="text-gray-500">Qty: {item.quantity}</p>
                          <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => dispatch(removeFromBag(item.id))}>Remove</button>
                          </div>
                        </span>
                      </div>
                    </li>
                )))}
                </ul>
              </div>

            <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal ({getBagTotal().totalQuantity} items)</p>
                <p>${getBagTotal().totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <button href="#" className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-colors duration-300 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                onClick={handleCheckout}
                // onClick={() => handleCheckout(false)}
                >Checkout</button>
              </div>
              <div className="mt-6">
                <Link to="/bag" className="flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 transition-colors duration-300 ease-in-out border border-indigo-600 rounded-md shadow-sm hover:text-white hover:bg-indigo-700" onClick={handleToggleSidePanel}>View Bag</Link>
              </div>
              <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                <p>or <button type="button" className="ml-1 font-medium text-indigo-600 transition-colors duration-300 ease-in-out hover:text-indigo-500" onClick={handleToggleSidePanel}>Continue Shopping<span aria-hidden="true"> &rarr;</span></button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}
