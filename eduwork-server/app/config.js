const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

module.exports = {
  rootPath: path.resolve(__dirname, ".."),
  secretkey: process.env.SECRET_KEY,
  serviceName: process.env.SERVICE_NAME,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
};
