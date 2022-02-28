import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import "./messenger.css";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const { user: currentuser } = useContext(AuthContext);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + currentuser._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [currentuser._id]);
useEffect(()=>{
const getMessages = async () => {
  try {
    const res = await axios.get("/messages/"+currentChat?._id);
    setMessages(res.data)
  } catch (err) {
    console.log(err);
  }

}
getMessages();
},[currentChat])
   
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends ?"
              className="chatMenuInput"
            />

            {conversations.map((c) => (
              <div onClick={()=> setCurrentChat(c)} > 
                <Conversation conversation={c} currentuser={currentuser} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map(m =>(


                  <Message own={m.sender === currentuser._id}  message={m} />
                  ))}
                  
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Write something..."
                  ></textarea>
                  <button className="chatSubmitButton">Send</button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
