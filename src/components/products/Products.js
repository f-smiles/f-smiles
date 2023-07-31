import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/productsSlice";
import { fetchPrices } from "../../store/pricesSlice";
import ProductsLoader from "./ProductsLoader";
import GiftCards from "./GiftCards";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getProducts = async () => {
      await dispatch(fetchProducts());
    };
    getProducts();
    const getPrices = async () => {
      await dispatch(fetchPrices());
    };
    getPrices();

    const loadingDelay = setTimeout(() => {
      setLoading(false);
    }, 250);
  
    return () => clearTimeout(loadingDelay);
  }, [dispatch]);

  const products = useSelector((state) => state.products.all_products);
  const prices = useSelector((state) => state.prices.all_prices);

  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="max-w-screen-lg py-32 mx-auto text-center">
        {loading ? (
          <ProductsLoader />
        ) : (
          <section
            id="products"
            className="flex flex-col justify-center space-y-8 text-center lg:space-y-0"
          >
            <h2>Products</h2>
            <div className="grid grid-cols-1 px-12 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 lg:px-0">
              {products && products.map((product) => (
                  <div key={product.id} className="relative group">
                    <div className="w-full overflow-hidden rounded-md aspect-h-1 aspect-w-1 lg:aspect-video group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="object-cover object-center w-full h-full lg:object-contain lg:h-full lg:w-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 text-sm text-left text-gray-700 lg:mt-0">
                      <p>
                        <Link to={`/products/${product.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </p>
                      {prices && prices.filter((price) => price.product === product.id).map((productPrice) => (
                        <p key={productPrice.id}>$ {productPrice.unit_amount / 100}</p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}
      </section>
      <section className="py-32 mx-auto text-center ">
        <GiftCards />
      </section>
    </main>
  );
}