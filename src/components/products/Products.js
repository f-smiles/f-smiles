import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/productsSlice";
import { fetchPrices } from "../../store/pricesSlice";
import ProductsLoader from "./ProductsLoader";
import GiftCards from "./GiftCards";

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const sortOptions = [
  { name: 'Price: Low to High', current: false },
  { name: 'Price: High to Low', current: false },
];

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
    setLoading(false);
  }, [dispatch]);

  const products = useSelector((state) => state.products.all_products);
  const prices = useSelector((state) => state.prices.all_prices);

  const [selectedSortOption, setSelectedSortOption] = useState(null);

  const sortProducts = (option) => {
    if (option === "Price: Low to High") {
      return [...products].sort((a, b) => {
        const lowestPriceA = Math.min(...prices.filter((price) => price.product === a.id).map((p) => p.unit_amount));
        const lowestPriceB = Math.min(...prices.filter((price) => price.product === b.id).map((p) => p.unit_amount));
        return lowestPriceA - lowestPriceB;
      });
    } else if (option === "Price: High to Low") {
      return [...products].sort((a, b) => {
        const highestPriceA = Math.max(...prices.filter((price) => price.product === a.id).map((p) => p.unit_amount));
        const highestPriceB = Math.max(...prices.filter((price) => price.product === b.id).map((p) => p.unit_amount));
        return highestPriceB - highestPriceA;
      });
    }
    return products;
  };

  const sortedProducts = selectedSortOption ? sortProducts(selectedSortOption) : products;

  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="max-w-screen-lg py-32 mx-auto text-center">
        {loading ? (
          <ProductsLoader />
        ) : (
          <>
            <section
              id="products"
              className="flex flex-col justify-center space-y-8 text-center lg:space-y-0"
            >
              <div className="flex justify-between px-6 pb-6 border-b border-gray-200">
                <h2 className="text-neutral-800">Products</h2>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                      Sort by
                      <ChevronDownIcon
                        className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <p
                                className={classNames(
                                  option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}
                                onClick={() => setSelectedSortOption(option.name)}
                              >
                                {option.name}
                              </p>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                
              </div>
              <div className="grid grid-cols-1 px-12 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 lg:px-0">
                {products && sortedProducts.map((product) => (
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
            <GiftCards />
          </>
        )}
      </section>
    </main>
  );
}