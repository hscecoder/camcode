const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
<<<<<<< HEAD
        methods: ["GET", "POST"]
    }
=======
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling']
    },
    allowEIO3: true,
    path: '/socket.io'
>>>>>>> 120fa45 (Hi12)
});
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
=======

// Add CORS headers for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
>>>>>>> 120fa45 (Hi12)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'broadcaster.html'));
});

app.get('/viewer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'viewer.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('stream', (data) => {
        socket.broadcast.emit('stream', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// Export the Express API for Vercel
<<<<<<< HEAD
module.exports = server; 
=======
module.exports = server;
>>>>>>> 120fa45 (Hi12)
