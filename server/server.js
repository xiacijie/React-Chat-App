const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", socket =>{
    console.log("connect!");

    socket.emit("message","fuucl");
    socket.on("message", data =>{
        socket.emit("message",data);
    })

});

server.listen(3001, err =>{
    if (err){
        throw err;
    }
    console.log("Server start on port 3000");
});