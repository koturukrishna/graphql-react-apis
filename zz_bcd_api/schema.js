const { gql } = require("apollo-server-express");

// Define the GraphQL schema using the gql template literal

const typeDefs = gql`
  # Post type represents a blog post
  type User {
    id: ID! # Unique identifier for the post
    firstname: String! # Title of the post, non-nullable
    lastname: String! # Content of the post, non-nullable
    address: String!
    contact: Int!
  }

  # Query type defines the available queries for fetching data
  type Query {
    users: [User] # Query to get a list of all posts
    user(id: ID!): User # Query to get a specific post by ID
  }

  # Mutation type defines the available mutations for modifying data
  type Mutation {
    createUser(
      firstname: String!
      lastname: String!
      address: String!
      contact: Int!
    ): User
    updateUser(
      id: ID!
      firstname: String
      lastname: String
      address: String
      contact: Int
    ): User
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;
