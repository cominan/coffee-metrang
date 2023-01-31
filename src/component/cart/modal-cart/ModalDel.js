import React from 'react'

export default function ModalDel(props) {
    const handleHiddenModal = () => {
        props.onclick()
    }
    const handleDel = () => {
        props.funcdel(props.idel)
        props.onclick()
    }
    return (
        <div id={props.id} className="w3-modal">
            <div className="tb:w-[50%] m-auto bg-b w3-animate-top w3-card-4 relative z-10 rounded-md">
                <div className='bg-[#f2f2f3]'>
                    <h2 className='font-l text-xl pl-2'>Xác nhận</h2>
                </div>
                <div className='text-center m-auto py-2'>
                    <p>Bạn có muốn xóa sản phẩm nay khỏi Giỏ hàng ?</p>
                    <div className='flex justify-center my-2'>
                        <button
                            onClick={handleHiddenModal}
                            className='bg-third text-w p-1 mr-2 rounded-md'>Không</button>
                        <button
                            onClick={handleDel}
                            className='bg-yellow text-w p-1 rounded-md'>Đồng ý</button>
                    </div>
                </div>
            </div>
            <div onClick={handleHiddenModal} className='w-[100vw] h-[100vh] top-0 absolute'></div>
        </div>
    )
}
