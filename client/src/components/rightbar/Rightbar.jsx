import "./rightbar.css";
import { Users } from "../../Data";
import Online from "./../online/Online";
export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg"  src={`${PF}gift.png`}  alt="" />
          <span className="birthdayText">
            <b>Rayen Ouerghui</b> and <b>3 other freinds</b> have a birthday
            today.
          </span>
        </div>
        <img src={`${PF}ad.jpg`}  alt="" className="rightbarAd" />
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
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Maried" : ""}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {user ? <ProfileRightbar /> : <HomeRightbar/>} 
      </div>
    </div>
  );
}
