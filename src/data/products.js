import productImage from "../assets/product.jpeg";

const products = [
  
  {
    image: productImage,
    productId: "medium-roast",
    categoryId: "coffee-beans",
    title: "cook ",
    description: `beautiful`,
    price: 11,
  },
  {
    image: productImage,
    productId: "medium-roast",
    categoryId: "coffee-beans",
    title: "cook ",
    description: `beautiful`,
    price: 11,
  },
  {
    image: productImage,
    productId: "medium-roast",
    categoryId: "coffee-beans",
    title: "cook ",
    description: `beautiful`,
    price: 11,
  },
  {
    image: productImage,
    productId: "coffee-cup",
    categoryId: "accessories",
    title: " dogs",
    description: `beautiful`,
    price: 50,
  },
  {
    image: productImage,
    productId: "coffee-cup",
    categoryId: "accessories",
    title: " dogs",
    description: `beautiful`,
    price: 50,
  },
  {
    image: productImage,
    productId: "coffee-cup",
    categoryId: "accessories",
    title: " dogs",
    description: `beautiful`,
    price: 50,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);    
  }

  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}