import React from 'react'

export default function ModalPromotion(props) {
    const handleHiddenModal = () => {
        props.onclick()
    }

    return (
        <div id={props.id} className="w3-modal">
            <div className="tb:w-[50%] tb:h-[80%] m-auto bg-b w3-animate-top w3-card-4 relative z-10 rounded-md">
                <h3 className='font-m text-icon p-2'>Mã khuyến mãi</h3>
                <div className='bg-[#f8f8f8] p-4'>
                    <div className='flex m-auto w-[96%]'>
                        <input placeholder='input discount code' 
                        className='pl-2 w-[84%] border-[1px] border-bo focus:outline-none'>

                        </input>
                        <button className='bg-[#878281] w-[20%] p-3 text-b rounded-md ml-2'>Áp dụng</button>
                    </div>
                </div>
            </div>
            <div onClick={handleHiddenModal} className='w-[100vw] h-[100vh] top-0 absolute'></div>
        </div>
    )
}
