const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'Az205220$%^',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'softnowebpanel'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};