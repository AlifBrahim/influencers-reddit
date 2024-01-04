const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const fs = require('fs');
const https = require('https');
const http = require('http');
const app = express();
const { authSocket, socketServer } = require("./socketServer");
const posts = require("./routes/posts");
const users = require("./routes/users");
const comments = require("./routes/comments");
const messages = require("./routes/messages");
const PostLike = require("./models/PostLike");
const Post = require("./models/Post");

dotenv.config();
const PORT = process.env.NODE_ENV === 'production' ? 443 : 4000;

let server;

if (process.env.NODE_ENV === 'production') {
  const privateKey = fs.readFileSync('/app/alifibrahim_me.key', 'utf8');
  const certificate = fs.readFileSync('/app/alifibrahim_me.crt', 'utf8');
  const ca = fs.readFileSync('/app/alifibrahim_me.ca-bundle', 'utf8');

  const credentials = { key: privateKey, cert: certificate, ca: ca };
  server = https.createServer(credentials, app);
} else {
  server = http.createServer(app);
}

const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000", "https://146.190.102.198/443", "https://post-it-heroku.herokuapp.com"],
  },
});

io.use(authSocket);
io.on("connection", (socket) => socketServer(socket));

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("MongoDB connected");
    }
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "https://146.190.102.198/443", "https://post-it-heroku.herokuapp.com"],
}));
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/messages", messages);
