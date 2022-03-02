import "./rightbar.css";
import Online from "./../online/Online";
import { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../context/Auth/AuthContext';
import {Add, Remove} from "@material-ui/icons"
import { io } from "socket.io-client";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user : currentuser,dispatch} = useContext(AuthContext);
  const socket = useRef();

  const [followed,setFollowed]=useState(currentuser.followings.includes(user?._id));
  
  const [onlineUsers, setOnlineUsers] = useState([]);
  useEffect(() => {
    socket.current = io("ws://localhost:8900");

  }, []);
  useEffect( ()=>{
    socket.current.emit("addUser", currentuser._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(currentuser.followings.filter(f=>users.some((u)=>u.userId === f)));
     
    });
  },[currentuser])
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);





  const handleClick = async () =>{
    try {
      if (followed)
      {
        await axios.put("/users/"+user._id+"/unfollow",{
          userId:currentuser._id
        });
        dispatch({type:"UNFOLLOW",payload:user._id})
       
      }
      else
      {
        await axios.put("/users/"+user._id+"/follow",{
          userId:currentuser._id
        });
        dispatch({type:"FOLLOW",payload:user._id})
      }
      
    } catch (err) {
      console.log(err);
      
    }
    setFollowed(!followed)
  }

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
          <span className="birthdayText">
            <b>Rayen Ouerghui</b> and <b>3 other freinds</b> have a birthday
            today.
          </span>
        </div>
        <img src={`${PF}ad.jpg`} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Freinds</h4>
        <ul className="rightbarFreindList">
       
            <Online currentId={currentuser._id}  onlineUsers={onlineUsers} />
        
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
      {
        user.username !== currentuser.username && (
          <button onClick={handleClick} className="rightbarFollowButton">
           
           {
             currentuser.followings.includes(user?._id) ? "Unfollow" :  "Follow"
           }
           {
             currentuser.followings.includes(user?._id) ? <Remove/> :  <Add/>
           }
            

          </button>
        )
      }
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Maried"
                : ""}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={`/profile/${friend.username}`}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/avatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
