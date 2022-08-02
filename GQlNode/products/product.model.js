const products = [
  {
    id: "redshoe",
    description: "Red Shoes",
    price: 42.12,
    reviews: [
      {
        rating: 5,
        comment: "very nice",
      },
    ],
  },

  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [
      {
        rating: 5,
        comment: "very nice",
      },
    ],
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
module.exports = {
  getProducts,
  getproductsByPrice,
};
