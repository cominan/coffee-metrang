import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addCommas } from '../../../config'

export default function ItemProducts(props) {
    const price = addCommas(props.product.price)
    const navigate = useNavigate()
    const handleDetail = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        return navigate('/detail-product', {
            state: {
                product: props.values, //Mảng
                data: props.product //product
            }
        })
    }

    return (
        <div className='border-2 rounded-md mb:mb-2 tb:mb-0 text-center border-bo w-full h-[530px] hover:bg-[#f2e7e7] text-bl'>
            <img
                className='w-full h-[400px] object-contain'
                src={props.product.url}
                alt='item product'
            />
            <div className='text-left px-2'>
                <p className='text-t font-l truncate'>{props.product.title}</p>
                <p className='text-w font-l'>{price}</p>
            </div>
            <button
                onClick={handleDetail}
                className='text-w mt-2 hover:bg-third hover:text-b bg-[#eeeeee] py-1 px-6 rounded-3xl font-m'>
                Xem chi tiết
            </button>
        </div>
    )
}
