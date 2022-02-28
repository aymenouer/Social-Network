import "./message.css"
import TimeAgo from 'react-timeago'
import  axios  from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Message({message,own}) {
  const [user,setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect( ()=>{
    const fetchUser = async() => {
      const res = await axios.get(`/users?userId=${message.sender}`)

     setUser(res.data);
    }
    fetchUser();
   
  },[message])
  return (
    <div className={own ? "message own" :  "message"}>
        <div className="messageTop">
            <img src={ user?.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} className="messageImg"  alt="" />
            <p className="messageText" >{message.text}</p>
        </div>
        <div className="messageBottom"><TimeAgo date={message.createdAt}/></div>

    </div>
  )
}
