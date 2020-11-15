import React, { useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firebase, firestore, auth } from './firebase';
import ChatMessage from './ChatMessage'
// import * as admin from "firebase-admin";
import './ChatRoom.css'
import * as listUsers from './index'

function ChatRoom() {
    const [user] = useAuthState(auth);
    const messageRef = firestore.collection('message');
    const query = messageRef.orderBy('createdAt');
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
    const dummy = useRef();

    // const qw = listUsers(auth);

    const sendMessage = async(e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <div>
                <main>
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={ msg } />)}
                    <div ref={dummy}></div>
                </main>
            </div>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type here..." />

                <button className='btn btn-primary inside' type="submit">✉</button>

            </form>

        </>
    )
}

export default ChatRoom
