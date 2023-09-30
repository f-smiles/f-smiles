import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { incrementQuantity, decrementQuantity, removeFromBag, clearBag, getBagTotal } from '../../store/bagSlice';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { MinusSmallIcon, PlusSmallIcon, TrashIcon } from '@heroicons/react/24/outline';

const apiUrl = process.env.REACT_APP_HOST;

export default function Bag() {

  const dispatch = useDispatch();

  const bagItems = useSelector(state => state.bag.line_items);

  const getBagTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    bagItems.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    });
    return { totalPrice, totalQuantity }
  };

  const handleCheckout = async () => {
    await axios.post(`${apiUrl}/api/v1/checkout/sessions/create-checkout-session`, bagItems)
    .then((response) => {
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    }).catch((error) => console.log(error.message))
  };


  return (
    <section className='max-w-screen-lg mx-auto my-16 md:my-32'>
      {bagItems.length === 0 ? (
        <div className="px-4 space-y-8 sm:px-0">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">Shopping Bag</h2>
          <p className='text-sm leading-6 text-gray-500'>You currently do not have any items in your bag.</p>
          <Link to='/products' className='block px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm w-max hover:bg-indigo-700'>Shop Now &rarr;</Link>
        </div>
        ) : (
        <>
          <div className="px-2 py-2 border border-t-0 lg:px-0 border-b-gray-700 border-x-0">
            <h2 className="mb-6 font-semibold leading-7 text-gray-900">Shopping Bag</h2>
          </div>
          <div className='flex justify-end w-full px-8 mt-6 sm:px-4 lg:px-0 '>
            <button className='flex items-center gap-2 px-3 py-1 my-6 border rounded text-danger-500 border-danger-500' type='button' onClick={() => dispatch(clearBag())}>
              <span>Clear Bag</span>
              <TrashIcon className='w-5 h-5' />
            </button>
          </div>
            <dl className="px-4 lg:px-0 ≈ w-full divide-y divide-gray-300">
            {bagItems && bagItems.map((item) => (
              <div className="px-4 py-6 mb-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={item.id}>
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{item.name}</h3>
                  <p className="max-w-2xl mt-1 text-sm leading-6 text-gray-500">${item.price}</p>
                  <img className="object-contain object-center mt-4 rounded-md aspect-square" src={item.image} alt={item.name} />
                </dt>
                <dd className="flex justify-between mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <div id='controls' className='flex flex-col mx-auto mt-6 space-y-2 md:mt-0'>
                    <div className='flex'>
                      <button className={`${item.quantity === 1 ? 'border-indigo-300 text-gray-400 disabled' : 'border-indigo-700 text-indigo-700'}rounded-tl rounded-bl border  py-1 px-2`} type='button' disabled={item.quantity === 1}
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        <MinusSmallIcon className='w-4 h-4' />
                      </button>
                      <span className='px-3 py-1 border-t border-b border-indigo-700'>{item.quantity}</span>
                      <button className='px-2 py-1 text-indigo-700 border border-indigo-700 rounded-tr rounded-br' type='button'
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        <PlusSmallIcon className='w-4 h-4' />
                      </button>
                    </div>
                    <button className='flex justify-between gap-2 text-danger-500' type='button' onClick={() => dispatch(removeFromBag(item.id))}>
                      <span>Remove</span>
                      <XCircleIcon className='z-0 w-6 h-6' />
                    </button>
                  </div>
                  <div className='flex flex-col items-end mt-6 md:mt-0'>
                    <p>${item.price * item.quantity}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </dd>
              </div>
            ))}
            <div className="px-4 sm:px-0">
              <div className='flex justify-between'>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Subtotal: ({getBagTotal().totalQuantity} items)</h3>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">${getBagTotal().totalPrice.toFixed(2)}</h3>
              </div>
              <p className="mt-1 text-sm leading-6 text-gray-500">Shipping and taxes will be calculated at checkout.</p>
              <div className='flex items-end justify-between' >
                <Link to='/products' className='font-medium text-indigo-600 hover:text-indigo-500'>
                  <span aria-hidden="true">&larr; </span>Continue Shopping
                </Link>
                <button className='px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700' type="button" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>

            </div>
            </dl>
        </>
      )}
    </section>
  )
}

