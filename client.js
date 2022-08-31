const net = require("net");
const connect = () => {
  const conn = net.createConnection({
     host: "localhost",
    port: 50541,
  });
};

module.exports = { connect };