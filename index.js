var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/stream-admin', function(req, res){
    res.sendFile(__dirname + '/admin.html');
});

var PORT = process.env.PORT || 3000;
 
http.listen(PORT, function(){
    console.log('HTTP server started on port ' + PORT);
});
 
io.on('connection', function(socket) {
	console.log('Client Connected');
    
    socket.on('updateMatchDetails', function (data) {
        io.emit('clientUpdateMatchDetails', data);
    });
});

io