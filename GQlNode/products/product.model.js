const products = [
  {
    id: "redshoe",
    description: "Red Shoes",
    price: 42.12,
    reviews: [],
  },

  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getProducts() {
  return products;
}

function getproductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}
function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}
function findByID(id) {
  return products.find((product) => {
    return product.id === id;
  });
}
function addNewReview(id, rating, comment) {
  const matchedProduct = findByID(id);
  if (matchedProduct) {
    const newReview = {
      rating,
      comment,
    };
    matchedProduct.reviews.push(newReview);
    return newReview;
  }
}
module.exports = {
  getProducts,
  getproductsByPrice,
  addNewProduct,
  addNewReview,
};
