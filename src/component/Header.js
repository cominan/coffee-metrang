import React from 'react'
import { BsFillCaretRightFill } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { valueCoffee } from '../store/coffeeSlice'
import HeaderRp from './reponsive/HeaderRp'
import Cart from './service-header/Cart'
import Login from './service-header/login/Login'
import Search from './service-header/search/Search'




export default function Header() {
  const data = useSelector(valueCoffee)
  return (
    <div className='flex justify-between bg-primary px-8 items-center'>
      <div className='flex items-center'>
        <img src={data.logo} alt='logo' className='w-[80px]'></img>
        <ul className='tb:flex mb:hidden'>
          <NavLink to='/' className='ml-4 font-l text-w text-b'>TRANG CHỦ</NavLink>
          <div className="w3-dropdown-hover flex items-center">
            <button className="ml-4 font-l text-w text-b">SẢN PHẨM</button>
            <BsFillCaretRightFill style={{ color: '#fff' }} />
            <div
              className=
              "w3-dropdown-content w-[336px] bg-primary text-b w3-bar-block z-10 absolute left-0 top-[28px]"
            >
              <div className='bridge'></div>
              <NavLink to="/product/ground-coffee" className="w3-bar-item w3-button">Cà phê bột(Ground coffee)</NavLink>
              <NavLink to="/product/roasted-coffe-bean" className="w3-bar-item w3-button">Cà phê hạt(Roasted coffee beans)</NavLink>
              <NavLink to="/product/instant-coffee" className="w3-bar-item w3-button">Cà phê hòa tan(Instant coffee)</NavLink>
              <NavLink to="/product/vacuum-ground-coffee" className="w3-bar-item w3-button">Coffee hút chân không(Vacuum coffee)</NavLink>
              <NavLink to="/product/tea" className="w3-bar-item w3-button">Trà(tea)</NavLink>
              <NavLink to="/product/premium" className="w3-bar-item w3-button">Siêu phẩm(Premium)</NavLink>
            </div>
          </div>
          <NavLink to='/distributor' className='ml-4 font-l text-w text-b'>MẠNG LƯỚI</NavLink>
          <NavLink to='/gift' className='ml-4 font-l text-w text-b'>QUÀ TẾT 2023</NavLink>
        </ul>
      </div>
      <div className='flex text-icon items-center'>
        <Search />
        <NavLink to='cart'>
          <Cart />
        </NavLink>
        <Login />
        <HeaderRp />
      </div>
    </div >
  )
}
