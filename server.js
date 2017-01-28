var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/user', function(req, res){
  res.sendFile(__dirname + '/user.html');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/employee', function(req, res){
  res.sendFile(__dirname + '/employee.html');
});

io.on('connection', function(socket){
  socket.on('meeting id', function(msg){
    io.emit('meeting id', msg);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
