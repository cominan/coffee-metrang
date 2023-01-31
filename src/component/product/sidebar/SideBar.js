import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
  let classBase = 'p-2 hover:text-primary text-w font-m border-t-[1px] border-bl'
  
  return (
    <div className='text-center mt-8 w-[70%] m-auto lp:block mb:hidden'>
      <h1 className='bg-primary font-m text-[#ffff] text-xl'>DANH MỤC</h1>
      <ul className='border-[1px] border-bl'>
        <li
          className={classBase}
        >
          <NavLink to='/product/ground-coffee'>
            Cà phê bột (Ground coffee)
          </NavLink>
        </li>
        <li
          className={classBase}
        >
          <NavLink to='/product/roasted-coffe-bean'>
            Cà phê hạt rang (Roasted coffee beans)
          </NavLink>
        </li>
        <li
          className={classBase}
        >
          <NavLink to='/product/instant-coffee'>
            Cà phê hòa tan (Instant coffee)
          </NavLink>
        </li>
        <li
          className={classBase}
        >
          <NavLink to='/product/vacuum-ground-coffee'>
            Cà phê bột hút chân không (Vacuum ground coffee)
          </NavLink>
        </li>
        <li
          className={classBase}
        >
          <NavLink to='/product/tea'>
            Trà (tea)
          </NavLink>
        </li>
        <li
          className={classBase}
        >
          <NavLink to='/product/premium'>
            Siêu phẩm (Premium)
          </NavLink>
        </li>

      </ul>
    </div>
  )
}
