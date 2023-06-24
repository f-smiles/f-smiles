import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearBag } from '../../store/bagSlice'

function CheckoutSuccess() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const checkoutStatus = queryParams.get('status')

  const dispatch = useDispatch()

  useEffect(() => {
    if (checkoutStatus === 'success')
      dispatch(clearBag())
  }, [checkoutStatus, dispatch])

  return (
    <div className='mt-32'>
      <h2>Checkout Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>It will be ready for pickup at any of our locations when it is ready.</p>
      <p>You will be notified by email???</p>
      <p>
        Incase of any inqueries contact support at{" "}
        <strong>support@onlineshop.com</strong>
      </p>
    </div>
  )
}

export default CheckoutSuccess