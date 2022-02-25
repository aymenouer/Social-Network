import Share from "../share/Share";
import "./feed.css"
import Post from './../post/Post';
import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios"

export default function Feed() {
  const [posts,setPosts] = useState([]);
  useEffect( ()=>{
    const fetchPosts = async() => {
      const res = await axios.get("posts/timeline/621947282bae5677a6dcdc10")
     console.log(res.data);
      setPosts(res.data);
    }
    fetchPosts();
   
  },[])
  return (
<div className="feed">
    <div className="feedWrapper">
      <Share/>
      {posts.map(p=>(

      <Post key={p._id} post={p}/>
      ))}
    </div>
</div>


  );
}
