const server = require("http").createServer();
const io = require("socket.io")(server);

const roomNum = {};
io.on("connection", socket =>{
    console.log("connect!");

    socket.on("join", r =>{
        socket.join(r);
        roomNum[socket.id] = r;
        console.log("server",r);
    });
    socket.on("message", data =>{
        console.log(data);
        io.to(roomNum[socket.id]).emit("message",data);
    });

});

server.listen(3001, err =>{
    if (err){
        throw err;
    }
    console.log("Server start on port 3000");
});