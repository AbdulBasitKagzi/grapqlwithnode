const { getProducts } = require("./product.model");
module.exports = {
  Query: {
    products: () => {
      return getProducts();
    },
  },
};
