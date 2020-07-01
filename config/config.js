const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  env: process.env.NODE_ENV
};

module.exports = {
  "development": {
    "username": "postgres",
    "password": "mteburhx",
    "database": "mashat_db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "mashat",
    "password": "mteburhx",
    "database": "mashat_db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
