const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Customer {
    id: ID!
    name: String!
    address: String!
    contact: String!
  }
  type Query {
    customers: [Customer]
    customer(id: ID!): Customer
  }
  type Mutation {
    createCustomer(name: String!, address: String!, contact: String!): Customer
    updateCustomer(
      id: ID!
      name: String!
      address: String!
      contact: String!
    ): Customer
    deleteCustomer(id: ID!): Customer
  }
`;

module.exports = typeDefs;
