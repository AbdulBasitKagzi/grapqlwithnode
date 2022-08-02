const { getProducts, getproductsByPrice } = require("./product.model");
module.exports = {
  Query: {
    products: () => {
      return getProducts();
    },
    // when we are not using an earlier argument we can replace it with "_"
    // here we have replace argument called parent by "_"
    productsByPrice: (_, args) => {
      return getproductsByPrice(args.min, args.max);
    },
  },
};
