<<<<<<< HEAD
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "papi",
  host: "localhost",
  port: 5432,
  database: "csi2532"
});

=======
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  
  host: "localhost",
  port: 5432,
  database: "csi2532"
});

>>>>>>> 16de7496470fa220a8a9dec0073b4e61bb6dd86b
module.exports = pool;