import React from 'react'
import { BsFillCartFill } from "react-icons/bs";



export default function TotalProduct({ total }) {
    let a =[1,2,3,4]
    a[10]=5
    a.filter(item => {
        console.log('hello');
    })
    return (
        <div
            className=
            'bg-primary flex tb:w-[25%] justify-around text-b rounded-t-md py-2 tb:ml-[10%] lp:ml-36'
        >
            <BsFillCartFill />
            <p>Giỏ sản phẩm</p>
            <div>
                ({total})
            </div>
        </div>
    )
}
