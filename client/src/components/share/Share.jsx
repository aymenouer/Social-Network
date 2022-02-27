import { PermMedia,Label,Room,EmojiEmotions } from "@material-ui/icons";
import "./share.css";
import { useContext, useState } from 'react';
import { AuthContext } from './../../context/AuthContext';
import { useRef } from 'react';
import  axios  from 'axios';

export default function Share() {
  const {user}=useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file,setFile] = useState(null);
const submitHandler = async(e) => {
  e.preventDefault();
  const newPost = {
    userId:user._id,
    desc: desc.current.value
  }
  try {
    await axios.post('/posts',newPost);
  } catch (err) {
    
  }
}

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} alt="" />
          <input
            placeholder={"what's in your mind " + user.username +" ?"}
            type="text"
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler} >
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input style={{display:"none"}}  type="file" id="file" onChange={(e)=>setFile(e.target.files[0])} accept=".png,.jpeg,.jpg" />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button type="submit" className="shareButton">
              Share
          </button>
        </form>
      </div>
    </div>
  );
}
