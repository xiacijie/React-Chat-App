const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", client =>{
    console.log("connect!");
});

server.listen(3001, err =>{
    if (err){
        throw err;
    }
    console.log("Server start on port 3000");
});