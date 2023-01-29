const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);

app.use(cors());
require("dotenv").config();
require("./config/database");
app.use(express.json());

//Routers
const userRouter = require("./routes/userRouter");
const roomRouter = require("./routes/roomRouter");
const loginRouter = require("./routes/loginRouter");
app.use("/api/user", userRouter);
app.use("/api/room", roomRouter);
app.use("/api/login", loginRouter);

// const PORT = 8800;
// app.listen(PORT,()=>{
//     console.log(`server run on 8800`);
// })

const socket = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    // credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("Wohoo.. Our Roy server is live now");
});

socket.on("connection", (io) => {
  console.log("New User Connected.  ID : " + io.id);

  /*Start Listning to the client request*/
  io.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("Server is Running");
});
