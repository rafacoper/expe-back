const config = {
  username: "postgres",
  password: "postgres",
  database: "exke",
  host: "localhost",
  dialect: 'postgres',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
