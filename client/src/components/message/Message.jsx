import "./message.css"

export default function Message({own}) {
  return (
    <div className={own ? "message own" :  "message"}>
        <div className="messageTop">
            <img className="messageImg" src="" alt="" />
            <p className="messageText" >this is message</p>
        </div>
        <div className="messageBottom">1 hour ago</div>

    </div>
  )
}
