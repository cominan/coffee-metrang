import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ListTypeProduct({id}) {
  return (
    <div id={id} className='hidden rounded-sm overflow-hidden'>
        <ul className='text-w w-[50vw] bg-primary'>
            <li className='border-t-[1px] ml-1 py-2'>
                <NavLink to='/product/ground-coffee' className='!text-bo'>Cà phê bột</NavLink>
            </li>
            <li className='border-t-[1px] ml-1 py-2'>
                <NavLink to='/product/roasted-coffe-bean' className='!text-bo'>Cà phê hạt</NavLink>
            </li>
            <li className='border-t-[1px] ml-1 py-2'>
                <NavLink to='/product/instant-coffee' className='!text-bo'>Cà phê hòa tan</NavLink>
            </li>
            <li className='border-t-[1px] ml-1 py-2'>
                <NavLink to='/product/vacuum-ground-coffee' className='!text-bo'>Cà phê hút chân không</NavLink>
            </li>
            <li className='border-t-[1px] ml-1 py-2'>
                <NavLink to='/product/tea' className='!text-bo'>Trà</NavLink>
            </li>
            <li className='border-t-[1px] ml-1 py-2'>
                <NavLink to='/product/premium' className='!text-bo'>Siêu phẩm</NavLink>
            </li>

        </ul>
    </div>
  )
}
