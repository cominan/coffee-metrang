import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addCommas } from '../../../../../config'

export default function ItemProduct(props) {
    const navigate = useNavigate()
    const price = addCommas(props.product.price)
    const handleBuyProduct = () => {
        navigate('/detail-product', {
            state: {
                data: props.product,
                product: props.products
            }
        })
    }
    return (
        <div className='border-2 mb:mb-2 tb:mb-0 rounded-md text-center border-bo w-full h-[530px] hover:bg-[#f2e7e7] text-bl'>
            <img
                className='w-full h-[400px] object-contain'
                src={props.product.url}
                alt='item product'
            />
            <div className='text-left px-2'>
                <p className='text-t font-l'>{props.product.title}</p>
                <p className='text-w font-l'>{price}</p>
            </div>
            <button onClick={handleBuyProduct}
                className='text-w mt-2 hover:bg-primary hover:text-b bg-[#eeeeee] py-1 px-16 rounded-md font-m'>
                Mua ngay
            </button>
        </div>
    )
}
