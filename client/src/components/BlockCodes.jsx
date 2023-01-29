import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
export default function BlockCodes() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [blockCodes, setBlockCoeds] = useState([]);

  // get the all clocks code from the database
  useEffect(() => {
    const getBlockCodes = async () => {
      const res = await axios.get("http://localhost:8800/api/room");
      setBlockCoeds(res.data);
    };
    getBlockCodes();
  }, [blockCodes]);

  return (
    <div>
      <h1 style={{color:'blue'}}>Choose code block</h1>
      {blockCodes.map((blockCode, index) => {
        return (
          <div key={index}>
            <h1 onClick={() => navigate(`/${userId}/room/${blockCode._id}`)}>
              {blockCode.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

