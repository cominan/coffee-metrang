import React from 'react'
import { useForm } from 'react-hook-form'
import sendLinkToEmail from '../logic/login/siginWithEmail';

export default function ModalRegistor({ id, onclick }) {

    const actionCodeSettings = {
        url: 'http://localhost:3000/',
        handleCodeInApp: true,
        iOS: {
            bundleId: 'com.example.ios'
        },
        android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
        },
        // dynamicLinkDomain: 'https://cbdcoffee.page.link',
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()


    return (
        <form id={id} className="w3-modal"
            onSubmit={handleSubmit(data => sendLinkToEmail(data.email, actionCodeSettings))}
        >
            <div className="w-[40%] px-2 m-auto w3-animate-top bg-bo w3-card-4 relative z-10">
                <div className=''>
                    <p className='text-w'>Email:</p>
                    <input
                        {...register('email', {
                            required: true,
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                        })}
                        type='email'
                        className='w-full pl-1 text-w rounded-sm focus:outline-none focus:border-b-[1px] border-blue'
                    >
                    </input>
                    {errors?.email?.type === 'required' && <p className='text-t text-[#db1010]'>This field is required</p>}
                    {errors?.email?.type === 'pattern' && <p className='text-t text-[#db1010]'>Email invalid</p>}
                </div>
                {/* <div className=''>
                    <p className='text-w'>Password:</p>
                    <input
                        type='password'
                        className='w-full pl-1 rounded-sm focus:outline-none focus:border-b-[1px] border-blue'
                    >
                    </input>
                </div> */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <input type='checkbox'></input>
                        <p className='text-w ml-2'>Tôi đồng ý với các điều khoản đã đọc</p>
                    </div>
                    <button
                        type='submit'
                        className='border-[1px] rounded-md hover:bg-primary hover:text-bo p-1 text-w my-2'
                    >
                        Đăng ký
                    </button>
                </div>
            </div>
            <div onClick={onclick} className='w-[100vw] h-[100vh] top-0 absolute'></div>
        </form>
    )
}
