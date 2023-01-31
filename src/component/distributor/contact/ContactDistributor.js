import React from 'react'

export default function ContactDistributor({ items }) {
    return (
        <div className='w-[80%] text-left m-auto mt-8'>
            <h2 className='text-w font-l'>{items.name}</h2>
            <p className='text-w'>{items.adress}</p>
            <p className='text-w'>{items.phone}</p>
            <p className='text-w'>{items.hotline}</p>
            <p className='text-w'>{items.service}</p>
            <p className='text-w'>{items.email}</p>
            {
                items.representative ?
                    <p className='text-w'>Người đại diện: <span className='font-m'>{items.representative}</span></p> :
                    ''
            }
            <p className='text-w'>{items.mobile}</p>
        </div>
    )
}
