import "./rightbar.css";
import Online from "./../online/Online";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../context/AuthContext';
import {Add, Remove} from "@material-ui/icons"
export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user : currentuser,dispatch} = useContext(AuthContext);
  const [followed,setFollowed]=useState(currentuser.followings.includes(user?._id));
  const [Users,setUsers] = useState([]);
  useEffect( ()=>{
    const fetchUsers = async() => {
      const res = await axios.get("/users/friends/"+currentuser._id) 
  
      setUsers(res.data);
    }
    fetchUsers();
   
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
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
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
             followed ? "Unfollow" :  "Follow"
           }
           {
             followed ? <Remove/> :  <Add/>
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
