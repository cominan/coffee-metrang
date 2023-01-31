import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addCommas } from '../../../../config';

export default function ProductSearch(props) {
  const navigate = useNavigate()
  let price = addCommas(props.product.price)
  const handleDetail = () => {
    navigate('/detail-product', { state:{
      product: props.product,
      array: props.array
    } })
    props.func()
  }

  return (
    <div
      onClick={handleDetail}
      className='grid grid-cols-6 p-1 items-center h-[94px] bg-[#ffff] border-t-[1px]'
    >
      <div className='col-span-1 overflow-hidden'>
        <img
          src={props.product.url}
          alt='product'
          className='w-full rounded-md object-contain'
        />
      </div>
      <div className='col-span-5 ml-2'>
        <p className='truncate text-w'>{props.product.title}</p>
        <p className='font-m text-icon'>{price}</p>
      </div>
    </div>
  )
}
