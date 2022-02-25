import "./closeFreind.css"
export default function CloseFreind({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFreind">
    <img src={PF+user.profilePicture} alt="" className="sidebarFreindImg" />
    <span className="sidebarFreindName">{user.username}</span>
  </li>
  )
}
