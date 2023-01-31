import React from 'react'
import { useSelector } from 'react-redux'
import { valueCoffee } from '../../../../store/coffeeSlice'
import ItemProduct from './items/ItemProduct'

export default function ProductInstant() {
    const value = useSelector(valueCoffee)
    let products = value.Category
    return (
        <div className='tb:h-[724px] text-b px-12'>
            <div className='relative border-b-2 border-bo'>
                <div className='bg-primary rounded-md mb-5 px-2 tb:w-[17%] lp:w-[10%] mb:w-[40%]'>
                    <p>Cà Phê Hòa Tan</p>
                </div>
                <div className='bg-primary mb:hidden tb:block rounded-md absolute left-1/2 top-2 p-1'>
                    <p className='font-l'>INSTANT COFFEE</p>
                </div>
            </div>
            <div className='mt-10 tb:grid tb:grid-cols-4 mb:block text-center gap-2'>
                {products && products.InstantCoffee.slice(0, 4).map(product => {
                    return (
                        <div key={product.id} className='col-span-1'>
                            <ItemProduct products={products.InstantCoffee} product={product} />
                        </div>
                    )
                })}
            </div>
            <div></div>
        </div>
    )
}
