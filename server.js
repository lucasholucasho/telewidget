var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/user', function(req, res){
  res.sendFile(__dirname + '/user.html');
});

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
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
