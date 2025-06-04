import { Server } from 'socket.io';

export const config = {
    runtime: 'edge',
    regions: ['iad1'], // specify the region you want to deploy to
};

const ioHandler = (req) => {
    if (!res.socket.server.io) {
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connection', (socket) => {
            console.log('Client connected');

            socket.on('stream', (data) => {
                socket.broadcast.emit('stream', data);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    res.end();
};

export default ioHandler;