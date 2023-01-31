import React from 'react'
import { useSelector } from 'react-redux'
import { valueCoffee } from '../../../../store/coffeeSlice'

export default function InforCompany() {
  const data = useSelector(valueCoffee)
  return (
    <div className='leading-t'>
      <img src={data.logo} alt='logo metrang' className='w-[95px]'></img>
      <p className='text-t font-l mt-8'>Công Ty Cổ Phần Cà Phê Mê Trang (Metrang Coffee JSC)</p>
      <p className='text-t font-l'>Mst: 4200421073</p>
      <p className='text-t font-m'>Đăng ký lần đầu ngày 22 tháng 05 năm 2007</p>
      <p className='text-t font-m'>Thay đổi lần thứ 22, ngày 20 tháng 12 năm 2017</p>
      <p className='text-t font-m'>Hotline: 1900 2070</p>
      <p className='text-t font-m'>Địa chỉ: 66 đường 2/4, Phường Vĩnh Hải, Thành Phố Nha Trang, Tỉnh Khánh Hòa</p>
      <div className='mt-12'>
        <img alt="Đã thông báo bộ công thương"
          title="Đã thông báo bộ công thương"
          src="https://ssr-resource-prod.gosell.vn/images/logo-sale-noti.png"
          className="w-[74px] h-[28px]" />
      </div>
    </div>
  )
}
