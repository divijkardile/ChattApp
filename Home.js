import React from 'react'
import './Home.css';
import { auth } from './firebase'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ChatRoom from './ChatRoom'
import SignIn from './SignIn'
import { useAuthState } from 'react-firebase-hooks/auth'

function Home() {
    const [user] = useAuthState(auth);
    return (
        <div className='bode'>
        <div className='home'>
            <header>
                <h1>💬</h1>
                <p className='h3'>Group Chatting</p>
                <SignIn />
            </header>
            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>    
        </div>
        </div>
    )
}

export default Home
