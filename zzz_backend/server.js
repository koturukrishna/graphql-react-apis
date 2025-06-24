const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const cors = require("cors");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const app = express();
dotenv.config();
app.use(cors());

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const PORT = process.env.PORT || 8000;
const MMONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MMONGO_URI)
  .then(() => {
    console.log("mangodb is connected successfully");
  })
  .catch((error) => console.log("connection error"));

app.get("/", (req, res) => {
  res.send(`<h1>Hello Krishna I am Server!</h1>`);
});

// app.listen(PORT, () => {
//   console.log("Server Started at Port", PORT);
// });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(
      `Server listening on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

// console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);

startServer();
