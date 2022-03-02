import Share from "../share/Share";
import "./feed.css"
import Post from './../post/Post';
import {  useContext } from 'react';

import { AuthContext } from './../../context/Auth/AuthContext';
import { PostsContext } from './../../context/Posts/PostsContext';


export default function Feed({username}) {

  const {user} = useContext(AuthContext);
  const {posts} = useContext(PostsContext);
  console.log(posts);

  return (
<div className="feed">
    <div className="feedWrapper">
    {(!username || username === user.username) && <Share />}
      
      {posts?.map(p=>(

      <Post key={p._id} post={p}/>
      ))}
    </div>
</div>


  );
}
