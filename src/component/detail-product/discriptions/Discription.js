/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Discription(props) {
    return (
        <div className='mt-10'>
            <h2 className='font-m text-x'>{props.title}</h2>
            <h2 className='font-m text-x mt-3'>HƯỚNG DẪN PHA CHẾ</h2>
            <p>1. Cho vào phin 03 muỗng cà phê bột khoảng 25g</p>
            <p>2. Lắc đều và ép nhẹ bên trong</p>
            <p>3. Dùng nước đang sôi châm vào phin 20ml cho cà phê thấm đều,
                sau đó châm nước sôi lại lần 2 khoảng 45ml là đủ</p>
            <p>4. Thêm đường, sữa, đá...tùy ý thích của bạn</p>
            <h2 className='font-m text-x mt-3'>CHỨNG NHẬN</h2>
            <div className='grid grid-cols-3 items-center'>
                <img
                    src="https://d3bpb7mvrje809.cloudfront.net/1626939195434.jpg"
                    className='col-span-1 m-auto w-[80%]'
                />
                <img
                    src="https://d3bpb7mvrje809.cloudfront.net/1626939008022.jpg"
                    className='col-span-1 m-auto w-[70%]'
                />
                <img
                    src="https://d3bpb7mvrje809.cloudfront.net/1626939049750.jpg"
                    className='col-span-1 m-auto w-full'
                />
            </div>
        </div>
    )
}
