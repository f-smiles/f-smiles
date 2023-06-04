import React, { useContext } from "react";
import { getProductData } from "./products";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import CartContext from "../../app/CartContext";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const SingleProductPage = () => {
  const [mainImage, setMainImage] = useState("");
  const { id } = useParams();
  const productData = getProductData(id);
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    const storedTotal = localStorage.getItem("total");
    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }
  }, []);

  if (!productData) {
    return <div>Product not found</div>;
  }

  const addToCart = (productId) => {
    console.log("Adding product to cart:", productId);
    const productData = getProductData(productId);
    if (productData !== undefined) {
      const existingProductIndex = cart.findIndex(
        (product) => product.id === productId
      );

      const quantityToAdd = quantity;

      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].count += quantityToAdd;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        const updatedProductData = {
          ...productData,
          count: quantityToAdd,
        };
        const updatedCart = [...cart, updatedProductData];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      setTotal((prevTotal) => prevTotal + productData.price * quantityToAdd);
      localStorage.setItem("total", total + productData.price * quantityToAdd);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleThumbnailClick = (thumbnail) => {
    setMainImage(thumbnail);
  };

  const accordionContentStyle = open ? {} : { display: "none" };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg ">
        <div className="grid grid-cols-3">
          <div className="col-span-1 flex flex-col items-center">
            {productData?.thumbnail &&
              productData.thumbnail.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index}`}
                  className="w-16 h-auto cursor-pointer rounded-full mb-2"
                  onClick={() => handleThumbnailClick(thumbnail)}
                />
              ))}
          </div>
          <div className="col-span-1">
            <div className="bg-cover bg-center bg-no-repeat h-96">
              <img
                src={mainImage || productData?.image}
                alt={productData?.name}
                className="max-w-full max-h-full"
              />
            </div>
          </div>
          <div className="col-span-1 p-4 flex flex-col justify-center">
            <h1 className="text-gray-900 font-bold text-2xl mb-2">
              {productData.name}
            </h1>
            <div className="text-indigo-700 mb-5 flex items-center justify-between">
              ${productData.price}
            </div>
            <div className="flex items-center mb-2">
              <div
                className="rounded border-indigo-700 border flex items-center"
                style={{ padding: "2px", width: "74px" }}
              >
                <button
                  onClick={handleDecrement}
                  className="px-2 py-1 text-indigo-700 rounded"
                  style={{ zIndex: 10, marginRight: "-1px" }}
                >
                  -
                </button>
                <span
                  className="px-2 py-1 text-indigo-700 rounded"
                  style={{ minWidth: "24px", textAlign: "center" }}
                >
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="px-2 py-1 text-indigo-700 rounded"
                  style={{ zIndex: 10, marginLeft: "-1px" }}
                >
                  +
                </button>
              </div>
              <div className="ml-2 col-span-2 sm:col-auto">
                <button
                  onClick={() => addToCart(productData.id)}
                  className="px-4 py-2 border-indigo-700 text-indigo-700 border text-sm uppercase rounded z-10"
                >
                  Add to Bag
                </button>
              </div>
            </div>
            <div style={{ height: "200px", overflowY: "auto" }}>
              <Accordion open={open === 1} animate={customAnimation}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="text-sm cursor-pointer"
                >
                  Description
                  <ChevronUpIcon
                    className={`${
                      open === 1 ? "transform rotate-180" : ""
                    } w-4 h-4 inline-block ml-1 transition-transform duration-200`}
                  />
                </AccordionHeader>
                <AccordionBody style={{ width: "100%" }}>
                  <div>{productData.description}</div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} animate={customAnimation}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-sm cursor-pointer"
                >
                  How To Use
                  <ChevronUpIcon
                    className={`${
                      open === 2 ? "transform rotate-180" : ""
                    } w-4 h-4 inline-block ml-1 transition-transform duration-200`}
                  />
                </AccordionHeader>
                <AccordionBody style={accordionContentStyle}>
                  <div>{productData.description}</div>
                </AccordionBody>
              </Accordion>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
