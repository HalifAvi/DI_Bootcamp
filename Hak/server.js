
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {

  res.render('pages/index');

});

const users = {}

const server = app.listen(2020,()=>{

    console.log('Listening on port 2020');
})

const io = require('socket.io')(server);

io.on('connection', socket => {

  // 1.1 'new-user' EVENT - When getting an event that new user signed up
  socket.on('new-user', name => {

    users[socket.id] = name
    // 2. 'user-connected' EVENT - Sending a message to all conected users about who connected
    socket.broadcast.emit('user-connected', name)
  })


  // 4.1 'send-chat-message' EVENT - When one user want to send message to others
  socket.on('send-chat-message', message => {

    // 5. 'chat-message' EVENT - Sending the message from one user to every connected user to server
    // Except to the user who sends the message
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
  })


  // 6.1 'user-disconnected' Event 
  socket.on('disconnect', () => {

    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]; 
  })
})



















// const users = {}

// // Each time a user loads up the website we call this function
// // Each one gets his own socket
// io.on('connection', socket => {

//   // 1.1 'new-user' EVENT - When getting an event that new user signed up
//   socket.on('new-user', name => {
//     users[socket.id] = name
//     // 2. 'user-connected' EVENT - Sending a message to all conected users about who connected
//     socket.broadcast.emit('user-connected', name)
//   })

//   // 4.1 'send-chat-message' EVENT - When one user want to send message to others
//   socket.on('send-chat-message', message => {
//     // 5. 'chat-message' EVENT - Sending the message from one user to every connected user to server
//     // Except to the user who sends the message
//     socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
//   })

//   // 6.1 'user-disconnected' Event 
//   socket.on('disconnect', () => {
//     socket.broadcast.emit('user-disconnected', users[socket.id])
//     delete users[socket.id]
//   })
// })


// Each time a user loads up the website we call this function
// Each one gets his own socket
// io.on('connection', socket => {


// app.post('/sendMessage', (req, res) => {

//   let message = req.body.message;

//   // 'chat-message' EVENT - Sending the message from one user to every connected user to server
//   // Except to the user who sends the message
//   socket.broadcast.emit('chat-message', { message: "av!!!!" })
  

//   res.render('pages/index',

//   // An Obj to send in the response to client ( PAGE + DATA) :
//       {
//         message : message
//       }
//   )
// })
  

// })








// const messageElement = document.createElement('div')
// messageElement.innerText = message
// messageContainer.append(messageElement)


