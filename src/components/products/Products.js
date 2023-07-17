import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchInventory } from "../../store/inventorySlice";
import ProductsLoader from "./ProductsLoader";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getInventory = async () => {
      await dispatch(fetchInventory());
    };
    getInventory();

    const loadingDelay = setTimeout(() => {
      setLoading(false);
    }, 1000);
  
    return () => clearTimeout(loadingDelay);
  }, []);

  const inventoryItems = useSelector((state) => state.inventory.items);

  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-lg mx-auto py-32 text-center">
        {loading ? (
          <ProductsLoader />
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
    </main>
  );
}