import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPrices } from '../../store/pricesSlice'
import { fetchSingleProduct } from '../../store/singleProductSlice'
import { addToBag, incrementQuantity, decrementQuantity } from '../../store/bagSlice'
import { MinusIcon, PlusIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'

export default function SingleProduct() {

  const dispatch = useDispatch()

  const { id } =  useParams()
  const { all_prices } = useSelector(state => state.prices)

  const { status, single_product, error } = useSelector(state => state.singleProduct)
  const { description, images, name, quantity = 1 } = single_product

  useEffect(() => {
    dispatch(fetchPrices())
    dispatch(fetchSingleProduct(id))
  }, [id])

  const getProductPrice = (productId) => {
    const price = all_prices.find((price) => price.product === id);
    return price ? (price.unit_amount / 100) : '';
  }

  // accordion
  const [ open, setOpen ] = useState(1)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className='max-w-screen-lg mx-auto my-32'>
      {status === 'loading' && <p className='text-center'>Loading...</p>}
      {status === 'failed' && <p className='text-center'>Error: {error}</p>}
      {status === 'succeeded' && (
        <section className='w-full grid grid-cols-1 md:grid-cols-2' key={id}>
          <div className=''>
            <img className='w-full aspect-video object-contain' src={images[0]} alt={`${name}`} />
          </div>
          <div className=''>
            <h1 className='text-gray-900 font-bold text-3xl mb-2'>{name}</h1>
            <h2 className='text-indigo-700 mb-4 text-2xl'>${getProductPrice(id)}</h2>
            <div className='flex items-center gap-8 w-max'>
              <div id='controls' className='flex flex-col mx-auto space-y-2'>
                <div className='flex'>
                  <button className='rounded-tl rounded-bl border border-indigo-700 text-indigo-700 py-1 px-2' type='button' onClick={() => dispatch(decrementQuantity(single_product.id))} disabled={quantity === 1}>
                    <MinusIcon className='w-4 h-4' />
                  </button>
                  <span className='border-b border-t border-indigo-700 py-1 px-3'>{quantity}</span>
                  <button className='rounded-tr rounded-br border border-indigo-700  text-indigo-700 py-1 px-2' type='button' onClick={() => dispatch(incrementQuantity(single_product.id))}>
                    <PlusIcon className='w-4 h-4' />
                  </button>
                </div>
              </div>
              <button className='px-4 py-1 self-stretch border-indigo-700 text-indigo-700 border text-sm uppercase rounded z-10 hover:bg-indigo-700 hover:text-white transition-colors duration-300' onClick={() => dispatch(addToBag(
                  { id: id, name: name, image: images[0], price: getProductPrice(id), quantity: quantity }
              ))}>Add to Bag</button>
            </div>
            <div className='my-8'>
                <Accordion open={open === 1} animate={customAnimation}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <span className='text-sm'>Description</span>
                    <span><ChevronDownIcon className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`} /></span>
                  </AccordionHeader>
                  <AccordionBody>
                    {description}
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                  <span className='text-sm'>How To Use</span>
                  <span><ChevronDownIcon className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`} /></span>
                  </AccordionHeader>
                  <AccordionBody>
                    {/* TODO: replace with metadata or features */}
                    {description}
                  </AccordionBody>
                </Accordion>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}