var http = require('http');
var express = require('express');
var cors = require('cors');
var app = express();
var jwt = require('express-jwt');
var dotenv = require('dotenv');

// app.use(express.static('public'))

dotenv.load();

var authenticate = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID
});

app.configure(function () {
  app.use(cors());

 // Request body parsing middleware should be above methodOverride
  app.use(express.bodyParser());
  app.use(express.urlencoded());
  app.use(express.json());

  app.use('/secured', authenticate);


  app.use(app.router);
});


app.get('/ping', function(req, res) {
  res.send(200, {text: "All good. You don't need to be authenticated to call this"});
});

app.get('/secured/ping', function(req, res) {
  res.send(200, {text: "All good. You only get this message if you're authenticated"});
})

var port = process.env.PORT || 3000;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

const io = require('socket.io')(http)
const mongoose = require('mongoose')

// database connection
const db_user = process.env.CHAT_DB_USER || 'user'
const db_pwd = process.env.CHAT_DB_PWD || 'password'
const db_url =  'mongodb://' + db_user + ':' + db_pwd + '@ds027835.mongolab.com:27835/webchat'
mongoose.connect(db_url)
const db = mongoose.connection

const Message = mongoose.model('Message', {
  "username": String,
  "message": String,
  "timestamp": Object
})


io.on('connection', (socket) => {
  console.log('A user connected.')
  // send chat log on new user connection
  Message.model('Message').find((err, messages) => {
    if (err) return console.error(err)
    // io.emit('chat log', messages)
    socket.emit('chat log', messages)
  })

  socket.on('chat message', msg => {
    // save message to database
    const message = new Message(msg)
    message.save(err => {
      if (err) return console.error(err)
    })
    console.log(`Message: ${msg.message}`)
    // send message to all clients
    io.emit('chat message', msg)
  })
  socket.on('typing', input => {
    io.emit('typing', input)
    console.log(input)
  })
  // socket.on('isTyping', input {})
  socket.on('disconnect', () => {
    console.log('User disconnected.')
  })
})
