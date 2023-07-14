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
  console.log(inventoryItems);

  return (
    <div className="max-w-screen-lg mx-auto my-32 text-center">
      {loading ? (
        <p>loading...</p>
      ) : (
        <section
          id="products"
          className={`flex flex-col justify-center space-y-8 text-center`}
        >
          <h2>Products</h2>
          <div className="px-12 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center gap-4 sm:gap-8 md:gap-16">
            {inventoryItems.length > 0 &&
              inventoryItems.map((item) => (
                <Link
                  to={`/products/${item.product.id}`}
                  key={item.product.id}
                  className="space-y-4"
                >
                  <figure>
                    <img
                      className="object-contain aspect-video w-full h-auto"
                      src={item.product.images[0]}
                      alt={item.product.name}
                    />
                  </figure>
                  <figcaption className="flex justify-between items-baseline">
                    <p>{item.product.name}</p>
                    <h6>$ {item.price.unit_amount / 100}</h6>
                  </figcaption>
                </Link>
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
