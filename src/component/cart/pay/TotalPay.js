import React from 'react'
import { addCommas } from '../../../config'
import { array } from '../table/ValueTable'

export default function TotalPay({ price, total }) {
  let value = addCommas(price)
  let count
  if (array.length > 0) {
    count = array.length
  } else {
    count = total
  }
  return (
    <div className='justify-end flex items-center pt-4'>
      <h3 className='mb:block tb:hidden font-l text-w'>Tổng số tiền hàng ({count} sản phẩm) :</h3>
      <p className='mb:block tb:hidden font-l text-third text-w'>{value}</p>
      <h3 className='tb:block mb:hidden font-l text-w'>Tổng số tiền hàng ({array.length} sản phẩm) :</h3>
      <p className='tb:block mb:hidden font-l text-third text-w'>{value}</p>
      <button
        onClick={() => alert('this page is completing')}
        className='px-3 py-2 ml-2 bg-[#7c0f12] text-b rounded-md'>Tiếp tục</button>
    </div>
  )
}
