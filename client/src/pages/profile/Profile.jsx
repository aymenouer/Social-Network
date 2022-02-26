import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "./../../components/topbar/Topbar";
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
                src={`${PF}person/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Aymen</h4>
                <span className="profileInfoDesc">Hello my freinds</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="Aymen" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
