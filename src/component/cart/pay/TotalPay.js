import React from 'react'
import { addCommas } from '../../../config'
import { array } from '../table/ValueTable'

export default function TotalPay({price}) {
  let value = addCommas(price)
  return (
    <div className='justify-end flex items-center pt-4'>
      <h3 className='font-l text-w'>Tổng số tiền hàng ({array.length} sản phẩm) :</h3>
      <p className='font-l text-third text-w'>{value}</p>
      <button 
      onClick={() => alert('this page is completing')}
      className='px-3 py-2 ml-2 bg-[#7c0f12] text-b rounded-md'>Tiếp tục</button>
    </div>
  )
}
