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
module.exports = {
  getProducts,
};
