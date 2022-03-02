import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "./../../components/topbar/Topbar";
import "./home.css"
import { AuthContext } from './../../context/Auth/AuthContext';
import { useContext, useEffect } from "react";
import { PostsContext } from './../../context/Posts/PostsContext';
import { postsCall } from "../../apiCalls";
export default function Home() {

  const {user} = useContext(AuthContext);
  const {dispatch} = useContext(PostsContext);
  useEffect(()=>{
    postsCall("all",null,user,dispatch);
  },[user,dispatch])

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
