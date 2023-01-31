import React from 'react'
import { InforCompany, InforProduct, ServiceCompany, Support } from './index'

export default function Contact() {
    return (
        <div className='grid gap-2 tb:grid-cols-4 mb:grid-cols-2'>
            <div className='col-span-1'>
                <InforCompany />
            </div>
            <div className='col-span-1 tb:block mb:hidden'>
                <InforProduct />
            </div>
            <div className='col-span-1 tb:block mb:hidden'>
                <Support />
            </div>
            <div className='col-span-1'>
                <ServiceCompany />
            </div>
        </div>
    )
}
