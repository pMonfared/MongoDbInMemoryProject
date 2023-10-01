const { MongoMemoryServer } = require("mongodb-memory-server");

const mongoDbConnect = async () => {
  const mongoServer = await MongoMemoryServer.create();
  console.log("mongoSvr", mongoServer);
  const mongoUri = mongoServer.getUri();

  console.log("mongoUri", mongoUri);
};

const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const server = app.listen(port, async () => {
  await mongoDbConnect();
  console.log(`Listening on port ${port}...`);
});

module.exports = server;
