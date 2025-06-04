# Webcam Share

A simple web application that allows users to share their webcam stream with others in real-time.

## Features

- Broadcaster page to share webcam
- Viewer page to watch the stream
- Real-time video streaming using Socket.IO
- Simple and intuitive interface

## Setup

1. Install Node.js if you haven't already
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and visit:
   - Broadcaster page: `http://localhost:3000`
   - Viewer page: `http://localhost:3000/viewer`

## Usage

1. On the broadcaster page, allow webcam access when prompted
2. The stream will start automatically
3. Share the viewer page URL with others
4. Viewers can watch the stream in real-time

## Technical Details

- Built with Node.js and Express
- Uses Socket.IO for real-time communication
- Frontend uses vanilla JavaScript
- Video stream is compressed and sent as WebP images 