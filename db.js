const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost or hosting service",
  database: "database name",
  password: "database password",
  port: 5432,
});

module.exports = pool;
