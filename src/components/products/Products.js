import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchInventory } from "../../store/inventorySlice";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getInventory = async () => {
      await dispatch(fetchInventory());
    };
    getInventory();
    setLoading(false);
  }, []);

  const inventoryItems = useSelector((state) => state.inventory.items);
  // console.log(inventoryItems);

  return (
    <div className="max-w-screen-lg mx-auto my-32 text-center">
      {loading ? (
        <p>loading...</p>
      ) : (
        <section
          id="products"
          className="flex flex-col justify-center space-y-8 text-center lg:space-y-0"
        >
          <h2>Products</h2>
          <div className="px-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 lg:px-0">
            {inventoryItems.length > 0 &&
              inventoryItems.map((item) => (
                <div key={item.product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-video group-hover:opacity-75 lg:h-80">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center lg:object-contain lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 lg:mt-0 flex justify-between items-baseline text-sm text-gray-700">
                    <p>
                      <Link to={`/products/${item.product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.product.name}
                      </Link>
                    </p>
                    <p className="font-semibold">
                      ${item.price.unit_amount / 100}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}

// const getProductPrice = (productId) => {
//   const price = all_prices.find((price) => price.product === productId);
//   return price ? price.unit_amount / 100 : "";
// };

{
  /* {status === 'loading' && <p>Loading...</p>}
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
          <img className="w-full aspect-video object-contain" src={product.images[0]} alt={product.name} />
          <h2>{product.name}</h2>
        </Link>
      </div>
  ))}
  </div>
</section> */
}
