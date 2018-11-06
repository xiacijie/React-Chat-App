const io = require("socket.io-client");

export default function(){
    const socket = io.connect("http://localhost:3001");

    function receiveMessage(onReceive) {
        socket.on("message",onReceive);
    }

    function sendMessage(message){
        socket.emit("message",message);
    }

    function joinRoom(room) {
        socket.emit("join",room);
    }

    return {
        receiveMessage: receiveMessage,
        sendMessage:sendMessage,
        joinRoom: joinRoom
    }
}