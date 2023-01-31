/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getDataInLocal } from '../../config';
import ModalDel from './modal-cart/ModalDel';
import Pay from './pay/Pay';
import CartResp from './table/cart-reponsive/CartResp';
import TableCart from './table/TableCart';
import TotalProduct from './TotalProduct';

function CartStore() {
  let product = getDataInLocal('product')
  const [id, setId] = useState()
  const [newArray, setNewArray] = useState(product)
  const [check, setCheck] = useState(false)

  //Tổng số đơn hàng có trong giỏ
  let total = product ? newArray.length : ''

  //Khỏi tạo giá trị của tổng đơn hàng ứng với số đơn hàng
  const [value, setValue] = useState(0)

  //Hàm xóa sản phẩm
  const handleDel = (id) => {
    setNewArray((newArray.filter(item => item.props.id !== id)))
  }

  //Hàm hiển thị modal
  const handleBlockModal = () => {
    document.getElementById('id03').style.display = 'block'
  }

  const handleHiddenModal = () => {
    document.getElementById('id03').style.display = 'none'
  }


  return (
    <div className='mt-4'>
      {
        product !== null ?
          <div>
            <TotalProduct total={total} />
            <TableCart
              productList={product}
              onclick={handleBlockModal}
              arr={newArray}
              setId={setId}
              value={setValue}
              check={check}
              setCheck={setCheck}
            />
            <CartResp
              productList={product}
              onclick={handleBlockModal}
              arr={newArray}
              setId={setId}
              check={check}
              setCheck={setCheck}
              setValue={setValue}
            />
            <Pay sumPrice={value} />
            <ModalDel
              id='id03'
              idel={id}
              funcdel={handleDel}
              onclick={handleHiddenModal}
            />
          </div>
          :
          <div className='grid grid-rows-2 items-center justify-center'>
            <p className='row-span-1'>Chưa có sản phầm trong giỏ hàng.</p>
            <NavLink className='m-auto text-blue' to='/' >Quay lại trang chủ</NavLink>
            <img
              className='row-span-1 h-[100px] m-auto'
              src='https://salanest.com/img/empty-cart.webp'
              alt='Giỏ hàng trống' />
          </div>
      }
    </div>
  )
}
export default memo(CartStore)