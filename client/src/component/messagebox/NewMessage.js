import { useState } from "react"
import { BiSend } from 'react-icons/bi';

/* <div className="new-message">
        <form action="" onSubmit={postUrl}>
            <input type="text" placeholder="message"  onChange={(e) => setMessageData(e.target.value)}/>
            <button>Send</button>
        </form>
        </div>*/

const NewMessage = ({ handleNewMessages, userLogInName, dummy }) => {

    const[messageData, setMessageData] = useState("")

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const postUrl = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/messages',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: messageData,
                owner: userLogInName,
                sent_at: time
            })
        })
        .then(req =>req.json())
        .then(data => 
            handleNewMessages(data),
            setMessageData(""),
            dummy.current.scrollIntoView({ behavior: 'smooth' })
        )
    }

    console.log(userLogInName)
    return (

        <div class="box-footer">
            <form action="" onSubmit={postUrl} >
                <div class="input-group">
            <input type="text" placeholder="message"  value={messageData} onChange={(e) => setMessageData(e.target.value)}/>
            <button className="send-btn">
                <BiSend/> Send
            </button>
            </div>
            </form>
        </div>
    )
}

export default NewMessage