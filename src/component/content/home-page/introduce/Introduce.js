import React from 'react'

export default function Introduce() {
    return (
        <div className='text-center'>
            <h2 className='text-primary font-l mb-12 text-xl'>Mê Trang - Người bạn tinh thần vô giá</h2>
            <iframe className='h-[624px] w-[90%] m-auto'
                src="https://www.youtube.com/embed/36WQSgc-LQA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <h3 className='font-m w-[80%] text-2xl m-auto my-12'>
                Công ty cổ phần cà phê Mê Trang tự hào là doanh nghiệp sản xuất và cung ứng cà phê hàng đầu Việt Nam.
                Cung cấp các giải pháp xuất khẩu cà phê trên toàn thế giới.
            </h3>
            <iframe className='h-[624px] w-[90%] m-auto mb-4'
                src="https://www.youtube.com/embed/cAEYs-BGCKs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />


        </div>
    )
}
