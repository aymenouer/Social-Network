import "./closeFreind.css"
export default function CloseFreind({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFreind">
    <img src={ user.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} alt="" className="sidebarFreindImg" />
    <span className="sidebarFreindName">{user.username}</span>
  </li>
  )
}
