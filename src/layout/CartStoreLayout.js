import React from 'react'
import Header from '../component/Header'

export default function CartStoreLayout({ children }) {
    return (
        <div className='bg-bo '>
            <Header />
            <div className='mt-16'>
                {children}
            </div>
        </div>
    )
}
