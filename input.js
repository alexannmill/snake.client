const { createConnection } = require("net");

const setUpInput = (conn) => {
  const stin = process.stdin;
  stin.setRawMode(true);
  stin.setEncoding("utf8");
  stin.resume();
  stin.on("data", (key) => {
    handleUserInput(key, conn);
  });
  return stin;
};

const handleUserInput = (data, connection) => {
  switch (data) {
    case "\u0003":
      process.exit();
      break;
    case "\u0077":
      connection.write("Move: up");
      break;
    case "\u0073":
      connection.write("Move: down");
      break;
    case "\u0061":
      connection.write("Move: left");
      break;
    case "\u0064":
      connection.write("Move: right");
      break;
    case "\u0074":
      connection.write("Say: touchdown");
      break;
  }
};

module.exports = {
  setUpInput,
};
