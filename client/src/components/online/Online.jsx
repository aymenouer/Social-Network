import "./online.css";

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFreind">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
