const net = require('net');
const {IP, PORT} = require('./constants');

//establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log("Connection Successfull...");   
    conn.write("Name: SSM");
    
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 300);

  });

  //read and log what the server is sending back after 
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = {
  connect
};