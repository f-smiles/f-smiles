import React from "react";
import { products } from "../../../store/seed";

const ECommerce = () => {
  return (
    <div>
      <section className="flex flex-wrap gap-4 justify-center py-20 text-center">
        {products.map((product) => {return (
          <Card
            name={product.name}
            image={product.image}
            description={product.description}
            buttonText="Add To Cart"
          />);
        })}
      </section>
    </div>
  );
};

const Card = ({ image, name, description, buttonText }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-easing="linear"
      className="bg-F1F1F0 max-w-xs px-12 pb-12 pt-20 flex flex-col"
    >
      <div className="grid grid-rows-2 gap-4">
        <img
          className="h-32 mx-auto my-auto self-center"
          src={image}
          alt={name}
        />
        <div>
          <h3 className="uppercase mb-4">{name}</h3>
          <p>{description}</p>
          {buttonText && (
            <button className="rounded-full text-sm px-8 py-2 border border-black">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
