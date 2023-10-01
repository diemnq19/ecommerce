const config = {
  database: {
    connection: 'postgres://postgres:123456@localhost:1234/ecommerce',
  },
  api: {
    host: "localhost",
    port: 8080,
  },
  jwt: {
    secretKey: "secretKey123",
  },
  sendgrid: {
    secretKey: null,
    fromEmail: null,
  },
  webClient: {
    url: "http://localhost:3000",
  },
};

module.exports = config;
