import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBag } from "../../store/bagSlice";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function AddToBag({ product, price }) {
  const dispatch = useDispatch();

  const [productQuantity, setProductQuantity] = useState(1);

  const handleDecrement = () => {
    if (productQuantity > 1) {
      setProductQuantity((prevQuantity) => prevQuantity -= 1);
    }
  };
  
  const handleIncrement = () => {
    setProductQuantity((prevQuantity) => prevQuantity += 1);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex">
          <p className="mr-2 text-gray-700">Quantity:</p>
          <button
            className="rounded-tl rounded-bl border border-indigo-700 text-indigo-700 py-1 px-2"
            type="button"
            disabled={productQuantity === 1}
            onClick={handleDecrement}
          >
            <MinusIcon className="w-4 h-4" />
          </button>
          <span className="border-b border-t border-indigo-700 py-1 px-3">
            {productQuantity}
          </span>
          <button
            className="rounded-tr rounded-br border border-indigo-700  text-indigo-700 py-1 px-2"
            type="button"
            onClick={handleIncrement}
          >
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
        <button
          className="px-5 py-4 self-stretch text-sm uppercase rounded z-10 bg-indigo-700 text-white transition-colors duration-300"
          onClick={() =>
            dispatch(
              addToBag({
                id: product.id,
                name: product.name,
                image: product.images[0],
                price: price.unit_amount / 100,
                quantity: productQuantity,
              })
            )
          }
        >
          Add to Bag
        </button>
      </div>
    </>
  );
}