

const ProductsArray = [
    {
        id: "prod_NmQD0LB6E9QoDd",
        name: "Toothbrush",
        price: 4.00,
        image: "/images/ember.png",
        count: 1,
    },
    {
        id: "prod_Nmt5fyj05oZnXa",
        name: "PolaDay Whitening Gel 9.5",
        description:
          "The active ingredient in PolaDay 9.5 is hydrogen peroxide, a proven whitening agent. Hydrogen peroxide is both safe and effective, so you'll get whiter teeth without sacrificing comfort.",
          price: 25,
          image: "/images/ember.png",
          count: 1,
    },
    {
       id: "prod_Nmt817CmDaC5o9",
       name: "PolaDay Whitening Gel 35%",
       description:
       "The active ingredient in PolaDay 9.5 is hydrogen peroxide, a proven whitening agent. Hydrogen peroxide is both safe and effective, so you'll get whiter teeth without sacrificing comfort.",
       price: 45,
       image: "/images/ember.png",
       count: 1,
    },
    {
        id: "prod_Nmt9kenhlCe0dX",
        name: "Ember Light",
        description:
        "Ember light therapy uses low-level light to stimulate gum and bone cells, accelerating tooth movement for faster and more comfortable teeth straightening. Used in conjunction with braces or Invisalign® to reduce discomfort and speed up treatment.",
        image: "/images/ember.png",
        price: 195,
        count: 1,
    },
    {
        id: "prod_NmtB65dcTRTUTK",
        name: "VPro",
        description:
        "VPro uses high-frequency vibrations to stimulate bone and gumline, accelerating tooth movement and improving bone regeneration. It works with braces or Invisalign, making it ideal for enhancing ongoing orthodontic treatment.",
        image: "../images/VPro-device.png",
        price: 585,
        count: 1,
    },
    {
        id: "prod_NmtCEQ0q2Sio1t",
        name: "VPro Mouthpiece",
        description:
        "Your Mouthpiece should be cleaned after each use. Detach the Mouthpiece from the Oscillator. Rinse the Mouthpiece under warm water and let dry. Clean the Oscillator with warm water as needed and let dry prior to storage charging.",
          image: "/images/VPro-mouthpiece.png",
          price: 35,
          count: 1, 
    },
    {
        id: "prod_NmtDKMLyW2OyqB",
        name: "Invisalign Aligner/Retainer Case",
        description:
        "This aligner case is made of safe, medical-grade thermoplastic material that won't release harmful chemicals into your Invisalign aligners. It's ideal for sensitive mouths and doesn't contain natural rubber latex. The compact design and magnetic closure make it convenient for on-the-go storage of Invisalign aligners and retainers.",
        image: "/images/invisalign-aligners-case.png",
        price: 10,
        count: 1,
    },
    {
        id: "prod_NmtEFTNbbKKR1k",
        name: "CocoFloss Dental Floss",
        description: "CocoFloss Dental Floss", 
        image: "/images/coco-floss.png",
        price: 6,
        count: 1,
        thumbnail: ["/images/strawberry.png"],
    },
    {
        id: "prod_NmQD0LB6E9QoDd",
        name: "E-Gift Card",
        price: "Enter Total",
        image: "/images/ember.png",
        count: 1,
       
    },
    // { name: "E-Gift Card", description: "E-Gift Card" },

];

function getProductData(id) {
    let productData = ProductsArray.find(product => product.id === id);
    if (productData === undefined){
        return undefined;

    }
    return productData;
}

export {ProductsArray, getProductData}