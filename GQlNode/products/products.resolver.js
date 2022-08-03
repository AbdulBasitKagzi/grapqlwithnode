const {
  getProducts,
  getproductsByPrice,
  addNewProduct,
  addNewReview,
} = require("./product.model");
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
  // adding a reslover for mutation
  Mutation: {
    addNewProduct: (_, args) => {
      return addNewProduct(args.id, args.description, args.price);
    },
    addNewReview: (_, args) => {
      return addNewReview(args.id, args.rating, args.comment);
    },
  },
};
