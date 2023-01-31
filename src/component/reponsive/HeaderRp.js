import React from 'react'
import { BsList, BsChevronLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import ListTypeProduct from './ListTypeProduct';
export default function HeaderRp() {
    const handleMenu = () => {
        let element = document.getElementById('id07')
        element.classList.toggle('res')
    }
    const handleProductList = () => {
        let element = document.getElementById('id08')
        element.classList.toggle('product')
    }


    return (
        <div className='tb:hidden text-bo text-xl'>
            <BsList onClick={handleMenu} />
            <div id='id07' className='hidden'>
                <ul className='text-w pb-2 bg-primary'>
                    <li className='pl-1 border-t-[1px] py-1'>
                        <NavLink to='/'>Trang chủ</NavLink>
                    </li>
                    <li
                        onClick={handleProductList}
                        className='pl-1 border-t-[1px] py-1 flex items-center relative'>
                        <BsChevronLeft className='text-sm' />
                        <p className='ml-1'>
                            Sản phầm
                        </p>
                    </li>
                    <li className='pl-1 border-t-[1px] py-1'>
                        <NavLink to='/distributor'>Mạng lưới</NavLink>
                    </li>
                    <li className='pl-1 border-t-[1px] py-1'>
                        <NavLink to='/gift'>Quà tết 2023</NavLink>
                    </li>
                    <li className='pl-1 border-t-[1px] py-1'>
                        Đăng nhập
                    </li>
                </ul>
                <ListTypeProduct id='id08' />
            </div>
        </div>
    )
}
