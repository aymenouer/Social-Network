import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "./../../components/topbar/Topbar";
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router";
import  axios  from 'axios';
import { postsCall } from "../../apiCalls";
import { PostsContext } from './../../context/Posts/PostsContext';
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({});
  const username = useParams().username;
  const {dispatch} = useContext(PostsContext);
  useEffect(()=>{
    postsCall("all",username,null,dispatch);
  },[username,dispatch])

  useEffect( ()=>{
    const fetchUser = async() => {
      const res = await axios.get(`/users?username=${username}`)
    
     setUser(res.data);
    }
    fetchUser();
   
  },[username])
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${user.coverPicture ? PF+user.coverPicture:  PF+"person/cover.jpg" }`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${user.profilePicture ? PF+user.profilePicture: PF+"person/avatar.png" }`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
