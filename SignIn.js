import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { auth } from './firebase'
import firebase from 'firebase/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useHistory } from 'react-router-dom';

function SignIn() {

    const [user] = useAuthState(auth);
    const history = useHistory();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }else{
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider);
            history.replace("/")
        }
    }

    return (
        <Link to={!user}>
            <div onClick={handleAuthentication} className="btn btn-dark">
                <span className="header__optionLineOne">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
        </Link>
    )
}

export default SignIn