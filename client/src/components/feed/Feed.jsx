import Share from "../share/Share";
import "./feed.css"
import Post from './../post/Post';
import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios"

export default function Feed() {
  const [Posts,setPosts] = useState([]);
  useEffect( ()=>{
    const fetchPosts = async() => {
      const res = await axios.get("/timeline/621947e22bae5677a6dcdc12")
     console.log(res.data);
      setPosts(res.data);
    }
    fetchPosts();
   
  },[])
  return (
<div className="feed">
    <div className="feedWrapper">
      <Share/>
      {Posts.map(p=>(

      <Post key={p.id} post={p}/>
      ))}
    </div>
</div>


  );
}
