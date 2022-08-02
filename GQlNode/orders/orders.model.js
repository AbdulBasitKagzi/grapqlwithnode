const orders = [
  {
    date: "2005-5-22",
    subtotal: 90.22,
    item: [
      {
        product: {
          id: "redShoe",
          description: " Old Red Shoes",
          price: 45.12,
          reviews: [
            {
              rating: 5,
            },
          ],
        },
        quantity: 2,
      },
    ],
  },
];

function getOrder() {
  return orders;
}

module.exports = {
  getOrder,
};
