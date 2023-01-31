

import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

export default function BaseLayout({ children }) {

    
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
