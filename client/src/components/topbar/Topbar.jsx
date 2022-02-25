import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import {Link} from "react-router-dom"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}} >
        <span className="topbarLogo">Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <Search  className="searchIcon"/>
        <input
          placeholder="Search for freind, post or video ?"
          className="searchInput"
        />

        </div>
        
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />

      </div>
    </div>
  );
}
