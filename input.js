//const {connect} = require('./client');
let connection;

const setupInput = function (conn) {
  const connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (key) => {
    if (key === 'w') {
      console.log("Move: up")
      connection.write("Move: up");
    };

    if (key === 's') {
      console.log("Move: down")
      connection.write("Move: down")
    };

    if (key === 'a') {
      console.log("Move: left")
      connection.write("Move: left")
    };

    if (key === 'd') {
      console.log("Move: right")
      connection.write("Move: right")
    };

    if (key === 'y') {
      connection.write("Say: yeehaw!")
    }
    
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};