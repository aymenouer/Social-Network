import "./closeFreind.css"
import { Link } from 'react-router-dom';
export default function CloseFreind({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFreind">
        <Link to={`/profile/${user.username}`} style={{textDecoration: "none", display:"flex",alignItems:"center"}} >
     
    <img src={ user.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} alt="" className="sidebarFreindImg" />
    <span className="sidebarFreindName">{user.username}</span>
    </Link>
  </li>
  )
}
