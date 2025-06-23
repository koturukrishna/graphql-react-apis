const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const cors = require("cors");
const typedef = require("./schema");
const resolvers = require("./resolvers");

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

const server = new ApolloServer({
  typeDefs: typedef,
  resolvers: resolvers,
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("mongodb is connected successfully");
  })
  .catch((error) => {
    console.log("connection error");
  });

app.get("/", (req, res) => {
  res.send(`<h1>Hello This is graphql server</h1>`);
});

// Use the `start` method to start the Apollo Server
async function startApolloServer() {
  await server.start();

  // Apply middleware after the server has started
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(
      `Server listening on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

// Start the Apollo Server
startApolloServer();
