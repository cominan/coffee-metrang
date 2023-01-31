/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { ImReply } from "react-icons/im";


export default function Adress() {
  return (
    <div className='mt-4 tb:block mb:hidden'>
      <div className='h-[1px] bg-[#d3e5fd]'></div>
      <div className='grid grid-cols-3 gap-4'>

        <div className='col-span-1'>
          <h2 className='text-w font-l text-primary'>CÁC CHI NHÁNH</h2>
          <div className=''>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1dVSytev-acvkO4kqdeeMESmal_2hqXRg&ll=15.942811570208821%2C109.55029945906048&z=5?enablejsapi=1"
              className='w-full mt-4'
              aria-hidden="true" />
          </div>
        </div>

        <div className='col-span-1 relative'>
          <h2 className='text-w font-l text-primary mb-4'>LIKE & SHARE</h2>
          <div className=''>
            <div className='overlay'></div>
            <img
              className='h-[148px] w-[334px]'
              alt='metrang'
              src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/289453249_5092192000830757_8322408580530216554_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=dd9801&_nc_ohc=u3odRP__UX0AX_CY_cA&_nc_ht=scontent.fsgn2-5.fna&edm=ADwHzz8EAAAA&oh=00_AfC8SLEoPxTg1S3eP3Iq7_B3FPyc64VHARksfVWC7oZ-cA&oe=63DDAFD4'
            />
          </div>
          <div className=''>
            <div className='w-[54px] top-[3.3rem] left-2 absolute border-2 border-b'>
              <img
                className='w-[54px]'
                alt='metrang'
                src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/278065247_4884905721559387_5401728093926738888_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=111&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=V2sw3uiufqcAX_d3vGk&_nc_ht=scontent.fsgn2-7.fna&edm=ADwHzz8EAAAA&oh=00_AfBzZoWmF0ydra3jwD6XwdFDiMaSSHGBsCvfvbfOXS0c9w&oe=63DE5A18'
              />
            </div>
            <div className='absolute top-[3.3rem] left-20 text-b z-[3]'>
              <p className='font-m'>Mê Trang coffee</p>
              <p>105.439 lượt thích</p>
            </div>
            <div className='h-[148px] w-[334px] absolute top-[162px] px-2 flex justify-between'>
              <a href='https://www.facebook.com/MeTrangJSC/' className='flex bg-b p-2 items-center w-[104px] h-[24px] rounded-sm'>
                <AiFillFacebook className='text-[#385898] mt-[2px]' />
                <p className='font-m text-t ml-[2px]'>Thích Trang</p>
              </a>
              <div className='flex bg-b p-2 items-center w-[72px] cursor-pointer h-[24px] rounded-sm'>
                <ImReply className='text-[#385898] mt-[2px] rotate-180' />
                <p className='font-m text-sm ml-[2px]'>Chia sẻ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
