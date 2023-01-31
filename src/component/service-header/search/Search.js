import React from 'react'
import { BsSearch } from "react-icons/bs";
import Modal from './modal-search/Modal';

export default function Search() {
  const handleBlockModal = () => {
    document.getElementById('id01').style.display = 'block'
  }
  const handleHiddenModal = () => {
    document.getElementById('id01').style.display = 'none'
  }
  return (
    <div className='mr-4'>
      <BsSearch onClick={handleBlockModal} className='tb:text-dark mb:text-bo'/>
      <div className="w3-container">
        <Modal id={'id01'} func = {handleHiddenModal} onclick = {handleHiddenModal}/>
      </div>
    </div>
  )
}
