import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import Login from '../login/Login';
import Logout from '../logout/Logout';

export default function CheckUser() {
    let element = document.getElementById('login')
    const handleDisplay = () => {
        element.classList.toggle('login')
    }
    const auth = getAuth()
    return (
        <div>
            <div
                className='relative'
                onClick={handleDisplay}
            >
                <BsPersonCircle />
            </div>
            <div id='login'>
                {
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            // const name = user.email
                          return  <Logout />
                        } else {
                          return  <Login />
                        }
                    })
                }
            </div>
        </div>
    )
}
