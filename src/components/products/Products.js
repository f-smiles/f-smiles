import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../../store/productsSlice'
import { fetchPrices } from '../../store/pricesSlice'
import { addToBag } from '../../store/bagSlice'

export default function Products() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchPrices())
  }, [dispatch])

  const { status, all_products, error } = useSelector(state => state.products)

  const { all_prices } = useSelector(state => state.prices)

  const getProductPrice = (productId) => {
    const price = all_prices.find((price) => price.product === productId)
    return price ? (price.unit_amount / 100) : ''
  }

  const handleAddToBag = async (productId) => {
    const product = {
      id: productId,
      name: all_products.find(product => product.id === productId)?.name,
      image: all_products.find(product => product.id === productId)?.images[0],
      price: getProductPrice(productId)
    };
    await dispatch(addToBag(product));
  }


  return (
    <div className='max-w-screen-lg mx-auto my-32 text-center'>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      <section id="products" className={`${
        status === 'loading' ? 'hidden' : 'flex flex-col justify-center space-y-8 text-center'
      }`}>
        <h2 className='text-3xl mb-8'>Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center gap-4 sm:gap-8 md:gap-16'>
        {status === 'succeeded' &&
          all_products.map((product) => (
            <div className="space-y-8" key={product.id}>
              <Link to={`/products/${product.id}`} className="space-y-8">
                <img className="w-full aspect-video object-contain mix-blend-color-burn" src={product.images[0]} alt={product.name} />
                <h2>{product.name}</h2>
              </Link>
              <button className="mx-auto flex items-center justify-between gap-2 px-4 hover:text-zinc-50 hover:bg-stone-900 border border-gray-900 text-gray-900 py-2 rounded-full transition-colors duration-300" type="button" aria-label={`Add to Bag ${product.name}`}
                // onClick={() => handleAddToBag(
                //   { id: product.id, name: product.name, image: product.images[0], price: getProductPrice(product.id) }
                // )}
                onClick={() => handleAddToBag(product.id)}
              >
                <span>Add to Bag</span>
                <span className='w-px h-6 bg-violet-500'></span>
                <span>{getProductPrice(product.id)} $</span>
              </button>
            </div>
        ))}
        </div>
      </section>
    </div>
  )
}