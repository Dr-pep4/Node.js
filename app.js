const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server running');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
    console.log('WebSocket client connected');
    
    // 클라이언트로부터 메시지 수신 시
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        
        // 클라이언트에 메시지 전송
        socket.send(`Server received: ${message}`);
    });
    
    // 클라이언트 연결 종료 시
    socket.on('close', () => {
        console.log('WebSocket client disconnected');
    });
});

const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`WebSocket server listening on port ${PORT}`);
});
