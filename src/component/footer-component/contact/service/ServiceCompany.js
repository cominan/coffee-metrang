import React from 'react'



export default function ServiceCompany() {
  return (
    <div>
      <div>
        <h2 className='text-w font-l text-primary'>THEO DÕI</h2>
        <div className='flex items-center my-2'>
          <a href='https://www.facebook.com/MeTrangJSC/'>
            <img className="w-[36px] mr-8"
              src="https://ssr-resource-prod.gosell.vn/images/icon/fb-icon.png"
              alt='facebook'
            />
          </a>
          <div>
            <img className="w-[36px] mr-8"
              src="https://ssr-resource-prod.gosell.vn/images/icon/instagram-icon.png"
              alt='instagram'
            />
          </div>
          <a href='https://www.youtube.com/c/metrangcoffee'>
            <img className="w-[36px] mr-8"
              src="https://ssr-resource-prod.gosell.vn/images/icon/youtube-icon.png"
              alt='youtube'
            />
          </a>
        </div>
      </div>
      <div>
        <h2 className='text-w font-l text-primary'>THANH TOÁN</h2>
        <div className='flex my-2'>
          <img
            src="https://ssr-resource-prod.gosell.vn/images/payment-method/icon_cod.png"
            className='mr-4' alt='cod' />
          <img
            src="https://ssr-resource-prod.gosell.vn/images/payment-method/icon_visa.png"
            className='mr-4' alt='visa' />
          <img
            src="https://ssr-resource-prod.gosell.vn/images/payment-method/icon_ATMonline.png"
            className='mr-4' alt='atm' />
        </div>
      </div>
      <div>
        <h2 className='text-w font-l text-primary'>VẬN CHUYỂN</h2>
        <div className='flex my-2'>
          <img
            className='mr-4 h-[30px] w-[70px]'
            src="https://ssr-resource-prod.gosell.vn/images/giaohangnhanh.png" alt='ghn'
          />
          <img
            className='h-[30px] w-[70px]'
            src="https://ssr-resource-prod.gosell.vn/images/giaohangtietkiem.png" alt='ghtk'
          />
        </div>
        <div className='flex mt-4'>
          <img
            className='w-[70px] h-[30px] -ml-3'
            src="https://ssr-resource-prod.gosell.vn/images/icon-self-delivery.svg" alt='car'
          />
          <p className='text-w font-m'>Shop tự giao</p>
        </div>
      </div>
    </div>
  )
}
