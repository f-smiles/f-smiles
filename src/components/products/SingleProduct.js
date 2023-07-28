import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../store/singleProductSlice";
import SingleProductLoader from "./SingleProductLoader";
import AddToBag from "./AddToBag";
import SingleProductCarousel from "./SingleProductCarousel";

export default function SingleProduct() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { id } = useParams();

  const productAndPrice = useSelector((state) => state.singleProduct.single_product);
  const { product, price } = productAndPrice;

  useEffect(() => {
    const getProduct = async () => {
      await dispatch(fetchSingleProduct(id));
    };
    getProduct();

    const loadingDelay = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(loadingDelay);
  }, [dispatch, id]);

  return (
    <main className="bg-white ">
      <div className="max-w-screen-lg py-32 mx-auto">
      {loading ? (
        <SingleProductLoader />
      ) : (
          <div className="grid w-full grid-cols-1 px-12 space-y-10 md:space-y-0 md:px-0 md:grid-cols-2 md:gap-12">
            {productAndPrice && product && price && (
              <>
                <section id="product-details" className="relative md:order-last">
                  <div className="flex flex-col justify-center w-full space-y-8">
                    <div id="product-details" className="h-max">
                      <h1 className="mb-2 text-3xl font-bold text-gray-800">{product.name}</h1>
                      <h2 className="mb-4 text-2xl text-indigo-700">${price.unit_amount / 100}</h2>
                      <p className="pt-4 leading-7 border-t border-gray-300">{product.description}</p>
                    </div>
                    <div id="bag-controls">
                      <AddToBag product={product} price={price} />
                    </div>
                  </div>
                </section>
                <section id="product-carousel">
                  <SingleProductCarousel product={product} />
                </section>
              </>
            )}
          </div>
      )}
      </div>
    </main>
  );
}