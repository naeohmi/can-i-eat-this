const axios = require('axios');
const promise = require('bluebird');
const options = { promiseLib: promise };
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/project3';
const db = pgp(connectionString);

module.exports = {
    db: db,
    axios: axios,
}