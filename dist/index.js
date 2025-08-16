import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function (socket) {
    console.log("Hiiiiii");
    setInterval(() => socket.send("Hiiiiiiiiiiiii"), 500);
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map