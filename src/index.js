const PORT = process.env.PORT || 8001;
const ENV = require("./environment");
const app = require("./application")(ENV, { updateComments });
const server = require("http").Server(app);

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
  socket.onmessage = (event) => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});

function updateComments(id, interview) {
  wss.clients.forEach(function eachClient(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "ADD_COMMENT",
          post_id,
          commenter_id,
          text_body,
          avatar,
          username,
        })
      );
    }
  });
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
