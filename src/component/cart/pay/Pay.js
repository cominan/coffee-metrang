import React from 'react'
import Promotion from './Promotion'
import TotalPay from './TotalPay'

export default function Pay(props) {
  return (
    <div className='bg-b px-8'>
      <Promotion />
      <TotalPay price={props.sumPrice} total={props.total}/>
    </div>
  )
}
