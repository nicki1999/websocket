//listen to port 3000
var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log('running the server');

var socket = require('socket.io');

var io = socket(server);

//what to do when server is connected to socket
io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('new connection: ' + socket.id);
    socket.on('mouse',mouseMsg);
    function mouseMsg(data){
        //send message to all the clients except the one emitting it
        socket.broadcast.emit('mouse',data)
        console.log(data);
    }
}

