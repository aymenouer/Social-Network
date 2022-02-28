import "./chatOnline.css"
import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';

export default function ChatOnline({onlineUsers,currentId,setCurrentChat}) {
 
  const [freinds,setFreinds] = useState([]);
  const [onlineFreinds,setOnlineFreinds] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(()=>{
    const getFreinds= async () => {
      const res = await axios.get("/users/friends/"+currentId);
      setFreinds(res.data);
    }
    getFreinds();
  },[currentId])
  useEffect(()=>{
    setOnlineFreinds(freinds.filter(f=>onlineUsers.includes(f._id)));
  },[freinds,onlineUsers])
  const handleClick = async (user) =>{
try {
  const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);
  setCurrentChat(res.data);
  
} catch (err) {
  console.log(err);
}
  }
 
  return (
    <div className="chatOnline">
      {
        onlineFreinds.map(o=>(



        <div className="chatOnlineFriend" onClick={()=>{handleClick(o)}} >
            <div className="chatOnlineImgContainer">

            <img     src={o?.profilePicture ? PF+o.profilePicture : PF+"person/avatar.png"} className="chatOnlineImg"  alt="" />
            <div className="chatOnlineBadge"></div>
            </div>
        <span className="chatOnlineName">{o?.username} </span>
        </div>
        ))
      }
    </div>
  )
}
