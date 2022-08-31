const net = require("net");
// const conn = require("./client")

const connect = () => {
  const conn = net.createConnection({
     host: "localhost",
    port: 50541,
  });
  
  
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("connection made")
  });
  
  conn.on("data", (data) => {
    console.log( "server:", data)
  })
  
};


// return conn;

console.log("connecting...");
connect();
