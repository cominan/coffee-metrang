import React from 'react'
import ModalLogin from '../../login/ModalLogin'
import { BsPersonCircle } from "react-icons/bs";
import ModalRegistor from '../../login/ModalRegistor';

export default function Login() {
  let classLogin = 'bg-bo w-[140px] hidden h-[64px] border-[1px] drop-shadow top-[8%] right-[3%]'
  const handleDisplay = () => {
    let element = document.getElementById('login')
    if(element.classList.contains('login')) {
      element.classList.remove('login')
    } else {
      element.classList.add('login')
    }
  }
  const modalLogin = () => {
    document.getElementById('id04').style.display = 'block'
  }

  const modalRegistor = () => {
    document.getElementById('id05').style.display = 'block'
  }
  const handleHiddenModal = () => {
    document.getElementById('id04').style.display = 'none'
    document.getElementById('id05').style.display = 'none'
  }

  return (
    <div className='tb:block mb:hidden'>
      <div
        className='relative'
        onClick={handleDisplay}
      >
        <BsPersonCircle />
      </div>
      <div
        className={classLogin}
        id='login'
      >
        <button
          onClick={modalLogin}
          className='text-w row-span-1'
        >
          Đăng nhập
        </button>
        <button
          onClick={modalRegistor}
          className='border-t-[1px] text-w row-span-1'
        >
          Đăng ký
        </button>
      </div>
      <div className='w3-container'>
        <ModalLogin id='id04' onclick={handleHiddenModal} />
      </div>
      <div className='w3-container'>
        <ModalRegistor id='id05' onclick={handleHiddenModal} />
      </div>
    </div>
  )
}
