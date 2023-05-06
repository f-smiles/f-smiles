import React from "react";
import { getProductData } from "./products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const SingleProductPage = () => {
    const { id } = useParams();
  const productData = getProductData(id);
    const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

    useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    const storedTotal = localStorage.getItem('total');
    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }
  }, []);

  if (!productData) {
    return <div>Product not found</div>;
  }

    const addToCart = (productId) => {
    console.log('Adding product to cart:', productId);
    const productData = getProductData(productId);
    if (productData !== undefined) {
      setCart([...cart, productData]);
      setTotal(total + productData.price);
      localStorage.setItem('cart', JSON.stringify([...cart, productData]));
      localStorage.setItem('total', total+productData.price)
    }
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="images">
        <img className="bg-FAFAF8 md:max-w-xs max-h-full px-12 pb-12 pt-20" src={productData.image} alt={productData.name} />
        </div>
        <div className="mt-20 col-span-2 md:col-span-1">
          <div className="product">
          <h1 className="col-span-4 text-center text-lg">{productData.name}</h1>
            <h2 className="text-tan">{productData.price} USD</h2>
            <p className="desc text-rose">
             {productData.description}
            </p>
            <div className="buttons">
            <button onClick={() => addToCart(productData.id)} className="rounded-full px-4 py-2 bg-rose-200 text-white rounded hover:bg-blue-700">Add to bag</button>
              {/* <button className="bg-rose-200 hover:bg-rose text-white uppercase py-2 px-4 rounded">
                <span>♥</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;


// const SingleProductPage = () => {
//   const { id } = useParams();
//   const productData = getProductData(id);
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);


//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//     const storedTotal = localStorage.getItem('total');
//     if (storedTotal) {
//       setTotal(JSON.parse(storedTotal));
//     }
//   }, []);

//   if (!productData) {
//     return <div>Product not found</div>;
//   }

//   const addToCart = (productId) => {
//     console.log('Adding product to cart:', productId);
//     const productData = getProductData(productId);
//     if (productData !== undefined) {
//       setCart([...cart, productData]);
//       setTotal(total + productData.price);
//       localStorage.setItem('cart', JSON.stringify([...cart, productData]));
//       localStorage.setItem('total', total+productData.price)
//     }
//   };


//   return (
//     <div className="mt-40">
//       <div key={productData.id} className="grid grid-cols-4 gap-4">
//         <div className="flex flex-col justify-start items-center">
//           <img className="bg-FAFAF8 md:max-w-xs max-h-full px-12 pb-12 pt-20" src={productData.image} alt={productData.name} />
       
//         </div>
//         <div className="flex flex-col justify-start">
//         <h4 className="col-span-4 text-center text-lg">{productData.name}</h4>
//         <p className="md:max-w-xs max-h-full px-12 pb-12 pt-20">{productData.description}</p>
//           <p>{productData.price} USD</p>
//           <button onClick={() => addToCart(productData.id)} className="rounded-full px-4 py-2 bg-slate-300 text-white rounded hover:bg-blue-700">Add to bag</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProductPage;
