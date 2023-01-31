import React from 'react'

export default function Sort(props) {
    const handleSort = (e) => {
        props.onClick(e.target.value)
    }
    return (
        <ul className='w-[80%] border-[1px] bg-[#ffff] z-10 border-bl rounded-sm absolute top-[32px] right-0'>
            <li className='py-1 active:bg-[#f0f4dc] hover:bg-bo'>
                <button onClick={(e) => handleSort(e)} value='Giá tăng dần'>
                    Giá tăng dần
                </button>
            </li>
            <li className='py-1 active:bg-[#f0f4dc] hover:bg-bo'>
                <button onClick={(e) => handleSort(e)} value='Giá giảm dần'>
                    Giá giảm dần
                </button>
            </li>
            <li className='py-1 active:bg-[#f0f4dc] hover:bg-bo'>
                <button onClick={(e) => handleSort(e)} value='Cũ nhất'>
                    Cũ nhất
                </button>
            </li>
            <li className='py-1 active:bg-[#f0f4dc] hover:bg-bo'>
                <button onClick={(e) => handleSort(e)} value='Mới nhất'>
                    Mới nhất
                </button>
            </li>
            <li className='py-1 active:bg-[#f0f4dc] hover:bg-bo'>
                <button onClick={(e) => handleSort(e)} value='Từ A-Z'>
                    Từ A-Z
                </button>
            </li>
            <li className='py-1 active:bg-[#f0f4dc] hover:bg-bo'>
                <button onClick={(e) => handleSort(e)} value='Từ Z-A'>
                    Từ Z-A
                </button>
            </li>
        </ul>
    )
}
