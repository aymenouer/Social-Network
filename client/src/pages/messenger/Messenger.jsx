import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import "./messenger.css";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
                <input type="text" placeholder="Search for friends ?" className="chatMenuInput" />
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>

          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                  <Message/>
                  <Message own/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message own/>
                  <Message/>
                  <Message/>
                  <Message/>
                  <Message own/>
                  <Message/>
                  <Message/>
              </div>
              <div className="chatBoxBottom">
                  <textarea className="chatMessageInput" placeholder="Write something..."></textarea>
                    <button className="chatSubmitButton">Send</button>
              </div>

          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
<ChatOnline/>
          </div>
        </div>
      </div>
    </>
  );
}
