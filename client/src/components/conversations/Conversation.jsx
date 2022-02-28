import "./conversation.css"
import { useState, useEffect } from 'react';
import  axios from 'axios';

export default function Conversation({conversation,currentuser}) {

  const [user,setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(()=>{
const friendId = conversation.members.find(m=> m !== currentuser._id);
const getUser = async () => {
  try {
    const res = await axios.get("/users?userId="+friendId);
    console.log(res.data);
    setUser(res.data);
  } catch (err) {
    console.log(err);
  }
}
getUser();
  },[ currentuser,conversation])
  return (
    <div className="conversation">
        <img src={user?.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} alt="" className="conversationImg" />
        <span className="conversationName">{user?.username}</span>
    </div>
  )
}
