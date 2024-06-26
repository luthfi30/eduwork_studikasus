const mongoose = require("mongoose");
const { dbHost, dbName, dbPort } = require("../app/config");

mongoose.set("debug", true); // Enable debug logs

mongoose
  .connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err));

const db = mongoose.connection;

module.exports = db;
