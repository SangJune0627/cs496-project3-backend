var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);

// localhost:3000으로 서버에 접속하면 클라이언트로 index.html을 전송한다
app.get('/', function (req, res) {
    // res.sendFile('/home/ubuntu/cs496-project3-backend/nodejs/index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hello World!");
});

// connection event handler
// connection이 수립되면 event handler function의 인자로 socket이 들어온다
io.on('connection', function (socket) {
    socket.on('event_name', function (data) {
        console.log('Message from Client: ' + data);
    });
});

server.listen(3000, function () {
    console.log('Socket IO server listening on port 3000');
});