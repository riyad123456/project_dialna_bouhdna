
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "apple",
  password : "papi",
  host: "localhost",
  port: 5432,
  database: "csi2532"
});


module.exports = pool;