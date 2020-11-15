import React from 'react'
import { auth } from './firebase';
import './ChatMessage.css'

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    var messageClass1;
    if (uid === "MODUNioHZoXC02Z5zSQPJLOuHIv1") {
        messageClass1 = 'sent';
    }
    return (
        <div className={`message ${messageClass}`}>
            <img  src={photoURL} />
            <p className='pop'>{ text }</p>
            {/* <p> {messageClass1} </p> */}
        </div>
    )
}

export default ChatMessage