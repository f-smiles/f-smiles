import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBag } from "../../store/bagSlice";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Toast from "./Toast";

export default function AddToBag({ product, price }) {
  const dispatch = useDispatch();

  const [productQuantity, setProductQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const handleDecrement = () => {
    if (productQuantity > 1) {
      setProductQuantity((prevQuantity) => prevQuantity -= 1);
    }
  };

  const handleIncrement = () => {
    setProductQuantity((prevQuantity) => prevQuantity += 1);
  };

  const handleAddToBag = () => {
    dispatch(
      addToBag({
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: price.unit_amount / 100,
        quantity: productQuantity,
      })
    )
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false);
    }, 3000)
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex group text-primary50">
          <p className="mr-2 text-gray-700">Quantity:</p>
          <button
            className={`${productQuantity > 1 ? 'hover:bg-primary50 hover:text-white' : ''} px-2 py-1 transition-colors duration-150 ease-linear border rounded-tl rounded-bl border-primary50`}
            type="button"
            disabled={productQuantity === 1}
            onClick={handleDecrement}
          >
            <MinusIcon className="w-4 h-4" />
          </button>
          <span className="px-3 py-1 text-gray-700 border-t border-b border-primary50">
            {productQuantity}
          </span>
          <button
            className="px-2 py-1 transition-colors duration-150 ease-linear border rounded-tr rounded-br border-primary50 hover:bg-primary50 hover:text-white"
            type="button"
            onClick={handleIncrement}
          >
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
        <button
          className="z-10 self-stretch px-5 py-4 text-sm text-white uppercase transition-colors duration-300 rounded bg-primary50 hover:bg-primary30"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      </div>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 40 }}
          exit={{ opacity: 0, y: 80 }}
        >
          <Toast />
        </motion.div>
      )}
    </>
  );
}