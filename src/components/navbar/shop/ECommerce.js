import React from "react";


const ECommerce = () => {
  return (
    <div>
      <section className="flex flex-wrap gap-4 justify-center py-20 text-center">
        <Card
          img="../images/vpro-device.png"
          title="VPro"
          description="VPro uses high-frequency vibrations to stimulate bone and gumline, accelerating tooth movement and improving bone regeneration. It works with braces or Invisalign, making it ideal for enhancing ongoing orthodontic treatment."
          buttonText="Add To Cart"
         
        />
        <Card
          img="../images/VPro-mouthpiece.png"
          title="VPro Mouthpiece"
          description="Clean the Mouthpiece after each use by detaching it from the Oscillator, rinsing it with warm water, and letting it dry. Replace as needed."
          buttonText="Add To Cart"
        />
        <Card
          img="../images/ember.png"
          title="Ember Light"
          description="Ember light therapy uses low-level light to stimulate gum and bone cells, accelerating tooth movement for faster and more comfortable teeth straightening. Used in conjunction with braces or Invisalign® to reduce discomfort and speed up treatment."
          buttonText="Add To Cart"
        />
        <Card
          img=""
          title="PolaDay 9.5% Whitening Gel"
          description="The active ingredient in PolaDay 9.5 is hydrogen peroxide, a proven whitening agent. Hydrogen peroxide is both safe and effective, so you'll get whiter teeth without sacrificing comfort."
          buttonText="Add To Cart"
        />
        <Card
          img=""
          title="PolaDay 35% Whitening Gel"
          description="The active ingredient in PolaDay 9.5 is hydrogen peroxide, a proven whitening agent. Hydrogen peroxide is both safe and effective, so you'll get whiter teeth without sacrificing comfort."
          buttonText="Add To Cart"
        />
        <Card
          img="../images/invisalign-aligners-case.png"
          title="Invisalign® aligner/retainer case"
          description="This aligner case is made of safe, medical-grade thermoplastic material that won't release harmful chemicals into your Invisalign aligners. It's ideal for sensitive mouths and doesn't contain natural rubber latex. The compact design and magnetic closure make it convenient for on-the-go storage of Invisalign aligners and retainers."
          buttonText="Add To Cart"
        />
        <Card
          img="../images/coco-floss.png"
          title="CocoFloss Dental Floss"
          description="The active ingredient in PolaDay 9.5 is hydrogen peroxide, a proven whitening agent. Hydrogen peroxide is both safe and effective, so you'll get whiter teeth without sacrificing comfort."
          buttonText="Add To Cart"
        />
          <Card
          img=""
          title="E-Gift Card"
          description="E-Gift Card"
          buttonText="Add To Cart"
        />
      </section>
    </div>
  );
};

const Card = ({ img, title, description, buttonText }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-easing="linear"
      className="bg-F1F1F0 max-w-xs px-12 pb-12 pt-20 flex flex-col"
    
    >
      <div className="grid grid-rows-2 gap-4">
        <img className="h-32 mx-auto my-auto self-center" src={img} alt={title} />
        <div>
          <h3 className="uppercase mb-4">{title}</h3>
          <p>{description}</p>
          {buttonText && <button className="rounded-full text-sm px-8 py-2 border border-black">{buttonText}</button>}
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
