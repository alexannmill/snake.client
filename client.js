const net = require("net");


const connect = () => {
  console.log("connecting...");
  const conn = net.createConnection({
     host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("connection made")
    
    conn.write( "Name: LEX")
  });


  conn.on("data", (data) => {
    console.log( "server:", data)
  });


  return conn;

};



module.exports = { connect } ;