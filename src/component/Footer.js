import React from 'react'
import Adress from './footer-component/adress/Adress'
import Contact from './footer-component/contact/Contact'
import CoppyRight from './footer-component/copyright/CoppyRight'

export default function Footer() {
  return (
    <div className='bg-secondary text-left pt-4'>
      <div className='px-16 pb-3'>
        <Contact />
        <Adress />
      </div>
      <CoppyRight />
    </div>
  )
}

