
let connection;

const setUpInput = (conn) => {
  const stin = process.stdin;
  stin.setRawMode(true);
  stin.setEncoding("utf8");
  stin.resume();
  connection = conn
  stin.on("data", (key) => {
   handleUserInput(key, connection)
  });
  return stin
};


const handleUserInput = (data, setUpInput) => {
  switch(data) {
    case '\u0003':
      process.exit();
      break;
    case '\u0077':
      console.log("Move up")
    break;
    case '\u0073':
      console.log("Move down")
    break;
    case '\u0061':
      console.log("Move left")
    break;
    case '\u0064':
      console.log("Move right")
    break;
  }
};


module.exports = {
  setUpInput,
}