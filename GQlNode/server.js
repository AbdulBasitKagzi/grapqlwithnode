// making imports
const express = require("express");
const path = require("path");
// buildschema allows us to create schema using graphql schema language
// buildschema function is used when we want to make schema with build schema function
// const { buildSchema } = require("graphql");

// to meke express respond to graphql queries
const { graphqlHTTP } = require("express-graphql");

// it is used to replace buildSchema function
// first we need to install graphqltools Command: npm install @graphql-tools/schema
const { makeExecutableSchema } = require("@graphql-tools/schema");

// loadfilessync function is used to read .graphql files and pass the text to typedefs in makeexecutable schema
// first we need to install graphqltools Command: npm install @graphql-tools/load-files
const { loadFilesSync } = require("@graphql-tools/load-files");

const app = express();
// it is used to make query and query will include description and price of product
// here we are creating schema for a product
// "!" means the field is required

// buildschema function is replaced by makeexcutable schema to make schema
// const schem = buildSchema(`
// type Query {
//     products: [Product]
//     orders: [Orders]
//   }

//   type Product {
//     id: ID!
//     description: String!
//     reviews: [Review]
//     price: Float!
//   }
//   type Review {
//     rating: Int!
//     comment: String
//   }
//   type Orders {
//     date: String!
//     subtotal: Float
//     item: [OrderItem]
//   }
//   type OrderItem {
//     product: Product!
//     qunatity: Int!
//   }

// `);

// to load the files in typeArray
const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
// storing resolvers in variable
const resolverArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));
// makeexecutableschema is a function used by grphql tools to build schema
const schema = makeExecutableSchema({
  // typeDefs is the way grapql tools call schema
  typeDefs: typesArray,
  //   resolvers are used to respond to queries
  resolvers: resolverArray,
  // Query: {
  //   products: async (parents, args, context, info) => {
  //     // now the data will pass through resolver
  //     console.log("products");
  //     const product = await Promise.resolve(parents.products);
  //     return product;
  //   },
  //   orders: (parents, args, context, info) => {
  //     // now the data will pass through resolver
  //     console.log("orders");
  //     return parents.orders;
  //   },
  // },
});
    
// values that are going to be used in the query
const root = {
  // after
  products: require("./products/product.model"),
  orders: require("./orders/orders.model"),

  //   before
  //   products: [
  //     {
  //       id: "redshoe",
  //       description: "Red Shoes",
  //       price: 42.12,
  //       reviews: [
  //         {
  //           rating: 5,
  //           comment: "very nice",
  //         },
  //       ],
  //     },

  //     {
  //       id: "bluejean",
  //       description: "Blue Jeans",
  //       price: 55.55,
  //       reviews: [
  //         {
  //           rating: 5,
  //           comment: "very nice",
  //         },
  //       ],
  //     },
  //   ],
  //   orders: [
  //     {
  //       date: "2005-5-22",
  //       subtotal: 90.22,
  //       item: [
  //         {
  //           product: {
  //             id: "redShoe",
  //             description: " Old Red Shoes",
  //             price: 45.12,
  //             reviews: [
  //               {
  //                 rating: 5,
  //               },
  //             ],
  //           },
  //           quantity: 2,
  //         },
  //       ],
  //     },
  // ],
};

app.use(
  "/graphql",
  graphqlHTTP({
    // it is the schema that we created above
    schema: schema,
    // it determines the value used in our response to query
    rootValue: root,
    // to run graphql on the pornt on which server is running
    graphiql: true,
  })
);

// listening
app.listen(3000, () => {
  console.log("Runnig graphql server...");
});
