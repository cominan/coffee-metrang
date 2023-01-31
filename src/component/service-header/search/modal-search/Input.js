import React from 'react'

export default function Input(props) {
    const handleSearch = (e) => {
        props.onchange(e.target.value)
    }
    return (
        <div>
            <div className='bg-bo text-w m-auto rounded-md justify-center items-center flex h-[70px]'>
                <input
                    autoFocus
                    onChange={(e) => handleSearch(e)}
                    className='w-[70%] py-1 pl-2 rounded-md focus:outline-none mr-2'
                    placeholder='Nhập giá trị tìm kiếm'
                />
                <button className='w-[20%] py-1 text-bo rounded-md bg-[#28a745]'>Tìm kiếm</button>
            </div>
            <div>

            </div>
        </div>
    )
}
