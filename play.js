const { connect } = require("./client");
const { setUpInput } = require("./input");

console.log("connecting...");
let connection = connect();
setUpInput(connection);
