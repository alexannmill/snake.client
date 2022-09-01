const { time } = require("console");
const net = require("net");
const setUpInput = require("./play");
const {host, port} = require("./constants")

const connect = () => {
  const conn = net.createConnection({
    host,
    port
  });
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log("connection made");
    conn.write("Name: LEX");
  });

  conn.on("data", (data) => {
    console.log("server:", data);
  });

  return conn;
};
module.exports = { connect };
