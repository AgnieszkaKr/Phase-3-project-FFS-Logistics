import Message from "./Message"



const MessageList = ({messages, handleDeleteMessage, dummy, setMessages, userLogInName}) => {

    return (
        <div className="test">
            <div>
                {messages.map((message) => {
                   return <Message 
                   key={message.id} 
                   message={message} 
                   handleDeleteMessage={handleDeleteMessage} 
                   dummy={dummy}
                   setMessages={setMessages}
                   userLogInName={userLogInName}
                   />
                })}
                
            </div>
           <div ref={dummy}></div>
        </div>
    )
}


export default MessageList