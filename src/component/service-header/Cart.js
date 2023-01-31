import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { totalItem } from '../../store/coffeeSlice';

export default function Cart() {
  const init = useSelector(totalItem)
  let current = []

  for (let i = 0; i < init.length; i++) {
    if(!current.includes(init[i])) {
      current.push(init[i])
    }
  }
  
  return (
    <div className='mr-4 flex items-center'>
      ({current.length})
      <BsFillCartFill className='tb:text-dark mb:text-bo' />
    </div>
  )
}
