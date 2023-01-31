import React from 'react'
import logoutCoffee from './logOutCf'

export default function Logout() {
    return (
        <div>
            <button onClick={() => logoutCoffee()}>Đăng xuất</button>
        </div>
    )
}
