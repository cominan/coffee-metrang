import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AddCart, Discription, ImageProduct, SimiliarProduct } from '../component/detail-product'

export default function DetailProduct() {
    const location = useLocation()
    let props = location.state

    //Data được chuyển từ thanh search
    if (props.array) {
        return (
            <div>
                <div className='w-[80%] m-auto my-4 border-bo border-b-[2px]'>
                    <NavLink to='/' className='mr-2 font-m text-w text-bl'>Trang chủ - </NavLink>
                    <NavLink to={props.product.path} className='mr-2 font-m text-w text-bl'>{props.product.title} -</NavLink>
                </div>
                <div className='grid grid-cols-2 mt-6'>
                    <ImageProduct value={props.product.url} />
                    <div className='col-span-1'>
                        <AddCart
                            
                            id={props.product.id}
                            price={props.product.price}
                            title={props.product.title}
                        />
                        <Discription title={props.product.title} />
                    </div>
                </div>
                <SimiliarProduct props={props.array} search={true} />
            </div>
        )

    } else {

        //Data chuyển từ layout và data chuyển từ Similiar của search
        let props = location.state
        return (
            <div>
                <div className='w-[80%] m-auto my-4 border-bo border-b-[2px]'>
                    <NavLink to='/' className='mr-2 font-m text-w text-bl'>Trang chủ - </NavLink>
                    <NavLink to={props.data.path} className='mr-2 font-m text-w text-bl'>{props.data.name} -</NavLink>
                    <NavLink className='mr-2 font-m text-w text-bl'>{props.data.title}</NavLink>
                </div>
                <div className='grid grid-cols-2 mt-6'>
                    <ImageProduct value={props.data.url} />
                    <div className='col-span-1'>
                        <AddCart
                            id={props.data.id}
                            img={props.data.url}
                            price={props.data.price}
                            title={props.data.title} />
                        <Discription title={props.data.title} />
                    </div>
                </div>
                <SimiliarProduct props={props.product} key={true} />
            </div>
        )
    }
}
