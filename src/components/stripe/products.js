const ProductsArray = [
    {
        id: "price_1N0rNGF1lRcn4KYhnzWs8nvv",
        name: "toothpaste",
        price: 2.00
    },
    {
        id: "price_1N0rNxF1lRcn4KYheNZRpmAR",
        name: "toothbrush",
        price: 4.00
    },
];

function getProductData(id) {
    let productData = ProductsArray.find(product => product.id === id);
    if (productData === undefined){
        return undefined;

    }
    return productData;
}

export {ProductsArray, getProductData}