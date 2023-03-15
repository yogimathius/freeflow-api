const PORT = process.env.PORT || 8080;
const ENV = require("./environment");
const app = require("./application")(ENV, { updateComments, deleteComments });
const server = require("http").Server(app);

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
  socket.onmessage = (event) => {
    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});

function updateComments(post_id, commenter_id, text_body) {
  wss.clients.forEach(function eachClient(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "ADD_COMMENT",
          post_id,
          commenter_id,
          text_body,
        })
      );
    }
  });
}

function deleteComments(post_id, commenter_id) {
  wss.clients.forEach(function eachClient(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "REMOVE_COMMENT",
          post_id,
          commenter_id,
        })
      );
    }
  });
}
if (process.env.NODE_ENV === 'production') {
  server.listen(PORT, 'freeflow-network.com', () => {
    console.info(`Listening on port ${PORT} in ${ENV} mode.`);
  });
} else {
  server.listen(PORT, () => {
    console.info(`Listening on port ${PORT} in ${ENV} mode.`);
  });
}
