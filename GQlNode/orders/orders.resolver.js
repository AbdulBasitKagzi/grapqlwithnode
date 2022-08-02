const { getOrder } = require("./orders.model");

module.exports = {
  Query: {
    orders: () => {
      return getOrder();
    },
  },
};
