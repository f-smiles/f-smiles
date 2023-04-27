const ProductsArray = [
    {
        id: "prod_NmQEUfKHJOePim",
        name: "toothpaste",
        price: 2.00
    },
    {
        id: "prod_NmQD0LB6E9QoDd",
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