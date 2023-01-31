import React from 'react'
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import ModalPromotion from './modal-promotion/ModalPromotion';


export default function Promotion() {
    const handleBlockModal = () => {
        document.getElementById('id02').style.display = 'block'
    }
    const handleHiddenModal = () => {
        document.getElementById('id02').style.display = 'none'
    }
    return (
        <div className='tb:grid grid-cols-4 border-b-[1px] pt-3 pb-3 border-dashed'>
            <div className='col-span-2'></div>
            <div className='col-span-1 flex font-l items-center'>
                <HiOutlineReceiptPercent />
                <p className='ml-2'>Mã khuyến mãi</p>
            </div>
            <div className='col-span-1'>
                <p onClick={handleBlockModal} className='text-[#2174f9] cursor-pointer'>Chọn hoặc nhập mã</p>
                <ModalPromotion onclick={handleHiddenModal} id='id02' />
            </div>

        </div>
    )
}
