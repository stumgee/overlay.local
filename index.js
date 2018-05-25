var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/stream-admin', function(req, res){
    res.sendFile(__dirname + '/admin.html');
});
 
http.listen(3000, function(){
    console.log('HTTP server started on port 3000');
});
 
io.on('connection', function(socket) {
	console.log('Client Connected');
    
    socket.on('updateMatchDetails', function (data) {
        io.emit('clientUpdateMatchDetails', data);
    });
});

io