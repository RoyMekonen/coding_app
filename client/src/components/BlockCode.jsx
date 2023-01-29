import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Highlight from 'react-highlight'
import io from "socket.io-client";
import { AiOutlineSmile } from "react-icons/ai";
const socket = io.connect("http://localhost:3001");


export default function BlockCode() {
  const [room, setRoom] = useState({
    title: "",
    code: "",
    contact: { mentor: false, student: false },
  });
  const [user, setUser] = useState({ userName: "", role: "" });
  const [msgReceived, setMsgReceived] = useState("");
  const { id, userId } = useParams();

  const sendMsg = (msg) => {
    socket.emit("send_message", { msg });
  };
  //get the data for the specific user that login to the application
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/user/${userId}`);
      console.log(res.data);
      setUser(res.data);
    };
    getUser();
  }, [userId]);
  // get the specific data about the room that he inside
  useEffect(() => {
    const getRoom = async () => {
      const res = await axios.get(`http://localhost:8800/api/room/${id}`);
      setRoom(res.data);
    };
    getRoom();
  }, [id]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMsgReceived(data.msg);
    });
  }, [socket]);

  // that function update the data in database from thw the client write
  const saveDataToDB = async (msg) => {
    const res = await axios.put(`http://localhost:8800/api/room/${id}`, {
      code: msg,
    });
  };

  return (
    <div>
      <div>
        <h1>{room.title}</h1>
        {user.role === "mentor" ? (
          <textarea readOnly={room?.code}></textarea>
        ) : (
          <textarea
            defaultValue={room?.code}
            onChange={(event) => {
              saveDataToDB(event.target.value);
              sendMsg(event.target.value);
            }}
          ></textarea>
        )}
      </div>
      {/* Show the clock in JS syntax */}
      <Highlight className="javascript">{msgReceived}</Highlight> 
      <p>Hint,the solution :{room.solution}</p>
      {room.solution === msgReceived ? (
       <AiOutlineSmile style={{width:"500px", height:"500px"}} />
      ) : <></>} 
    </div>
  );
}
