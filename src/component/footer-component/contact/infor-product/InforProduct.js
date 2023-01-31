import React from 'react'
import { NavLink } from 'react-router-dom'

export default function InforProduct() {
  return (
    <div>
      <h2 className='text-w font-l text-primary'>METRANG COFFEE</h2>
      <NavLink to='/' className='block text-t font-l mt-4'>Trang Chủ</NavLink>
      <NavLink to='/product/ground-coffee' className='block text-t font-l mt-2'>Sản Phẩm</NavLink>
      <NavLink to='/gift' className='block text-t font-l mt-2'>Bản Tin</NavLink>
      <NavLink to='/distributor' className='block text-t font-l mt-2'>Mạng Lưới</NavLink>
    </div>
  )
}
