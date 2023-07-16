import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrices } from "../../store/pricesSlice";
import { fetchSingleProduct } from "../../store/singleProductSlice";
import {
  addToBag,
  incrementQuantity,
  decrementQuantity,
} from "../../store/bagSlice";
import {
  MinusIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SingleProductCarousel from "./SingleProductCarousel";
import { RadioGroup } from "@headlessui/react";

export default function SingleProduct() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { all_prices } = useSelector((state) => state.prices);

  const { status, single_product, error } = useSelector(
    (state) => state.singleProduct
  );
  const { description, images, name, quantity = 1 } = single_product;

  useEffect(() => {
    dispatch(fetchPrices());
    dispatch(fetchSingleProduct(id));
  }, [id]);

  // console.log(single_product.metadata?.variants);
  const variants = single_product.metadata?.variants?.split(", ");
  // console.log(variants);
  let [variant, setVariant] = useState(variants ? variants[0] : "");

  const getProductPrice = (productId) => {
    const price = all_prices.find((price) => price.product === id);
    return price ? price.unit_amount / 100 : "";
  };

  // accordion
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto my-32">
      {status === "loading" && <p className="text-center">Loading...</p>}
      {status === "failed" && <p className="text-center">Error: {error}</p>}
      {status === "succeeded" && (
        <section className="w-full px-12 md:px-0 grid grid-cols-1 md:grid-cols-2 md:gap-12">
          <div id="product-details" className="md:order-last">
            <h1 className="text-gray-800 font-bold text-3xl mb-2">{name}</h1>
            <h2 className="text-indigo-700 mb-4 text-2xl">
              ${getProductPrice(id)}
            </h2>
            <div id="bag-controls" className="flex items-center gap-8 w-max">
              <div className="flex flex-col mx-auto space-y-2">
                <div className="flex">
                  <button
                    className="rounded-tl rounded-bl border border-indigo-700 text-indigo-700 py-1 px-2"
                    type="button"
                    onClick={() =>
                      dispatch(decrementQuantity(single_product.id))
                    }
                    disabled={quantity === 1}
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="border-b border-t border-indigo-700 py-1 px-3">
                    {quantity}
                  </span>
                  <button
                    className="rounded-tr rounded-br border border-indigo-700  text-indigo-700 py-1 px-2"
                    type="button"
                    onClick={() =>
                      dispatch(incrementQuantity(single_product.id))
                    }
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                className="px-4 py-1 self-stretch border-indigo-700 text-indigo-700 border text-sm uppercase rounded z-10 hover:bg-indigo-700 hover:text-white transition-colors duration-300"
                onClick={() =>
                  dispatch(
                    addToBag({
                      id: id,
                      name: name,
                      image: images[0],
                      price: getProductPrice(id),
                      quantity: quantity,
                    })
                  )
                }
              >
                Add to Bag
              </button>
            </div>
            <div id="product-variants" className="w-full py-8">
              <div className="w-full max-w-md">
                {variants && variants.length > 0 ? (
                  <RadioGroup value={variant} onChange={setVariant}>
                    <RadioGroup.Label className="text-gray-700">
                      Select Option:
                    </RadioGroup.Label>
                    <div className="p-4 space-y-2">
                      {variants.map((variant) => (
                        <RadioGroup.Option
                          key={variant}
                          value={variant}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-300"
                                : ""
                            }
                    ${
                      checked
                        ? "bg-indigo-500 bg-opacity-100 text-white"
                        : "bg-white"
                    }
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium  ${
                                        checked ? "text-white" : "text-gray-900"
                                      }`}
                                    >
                                      {single_product.name} - {variant}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="span"
                                      className={`inline ${
                                        checked
                                          ? "text-sky-100"
                                          : "text-gray-500"
                                      }`}
                                    >
                                      <span>{variant}</span>
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="shrink-0 text-white">
                                    <CheckIcon className="h-6 w-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                ) : null}
              </div>
            </div>
            <Accordion open={open === 1} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                <span className="text-sm">Description</span>
                <span>
                  <ChevronDownIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </span>
              </AccordionHeader>
              <AccordionBody>{description}</AccordionBody>
            </Accordion>
          </div>
          <div id="product-carousel">
            <SingleProductCarousel product={single_product} />
          </div>
        </section>
      )}
    </div>
  );
}

{
  {
    /* {variants && variants.length > 0
              ? variants.map((variant) => <li key={variant}>{variant}</li>)
              : null} */
  }
  /* <Accordion open={open === 2} animate={customAnimation}>
<AccordionHeader onClick={() => handleOpen(2)}>
  <span className="text-sm">How To Use</span>
  <span>
    <ChevronDownIcon
      className={`${
        open ? "rotate-180 transform" : ""
      } h-5 w-5 text-purple-500`}
    />
  </span>
</AccordionHeader>
<AccordionBody>
  {/* TODO: replace with metadata or features */
}
// {Array.from(metadata.images.split(", ")).map(
//   (image, index) => (
//     <img key={index} src={image} alt={image} />
//   )
// )}
// {Array.from(metadata.images.split(", ")).map(
//   (imageLink, index) => (
//     <Link key={index} to={imageLink}>
//       {imageLink}
//     </Link>
//   )
// )}
// </AccordionBody>
// </Accordion> */}
