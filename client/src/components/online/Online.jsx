import "./online.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import  axios from 'axios';

export default function Online({currentId,onlineUsers}) {

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

  return (
    onlineFreinds.map(o=>(

    <li className="rightbarFreind">
      <Link to={`/messenger`} style={{textDecoration: "none", display:"flex",alignItems:"center"}} >
      <div className="rightbarProfileImgContainer">
        <img src={o.profilePicture ? PF+o.profilePicture : PF+"person/avatar.png"} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{o?.username}</span>
      </Link>
    </li>
    ))

  );
}
