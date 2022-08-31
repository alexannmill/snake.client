const { time } = require("console");
const net = require("net");
const setUpInput = require("./play")

const connect = () => {
  const conn = net.createConnection({
     host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf8");
  
  conn.on("connect", (data) => {
    console.log("connection made")
    conn.write( "Name: LEX");
  });

 conn.on("data", (data) => {
   console.log( "server:", data)
  });
  
  return conn;
  
};
module.exports = { connect } ;


// Before setting up interface
// conn.on("connect", (data) => {
//   moveDown(500)
//   moveDown(700)
//   moveDown(900)
//   moveDown(1100)
//   moveLeft(1500)
//   moveLeft(1700)
//   moveLeft(1900)
//   moveUp(2100)
//   moveUp(2300)
//   moveUp(2500)
//   moveUp(2700)
//   moveLeft(2500)
//   moveLeft(3000)
// });

// const moveUp = (time) => {setTimeout((data) => {
//   conn.write("Move: up")
// },time)
// };
// const moveDown = (time) => {setTimeout((data) => {
//   conn.write("Move: down")
// },time)
// };
// const moveLeft = (time) => {setTimeout((data) => {
//   conn.write("Move: left")
// },time)
// };
// const moveRight = (time) => {setTimeout((data) => {
//   conn.write("Move: right")
// },time)
// };

