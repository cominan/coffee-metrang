import React from 'react'
import { useSelector } from 'react-redux'
import { valueCoffee } from '../../../../store/coffeeSlice'
import ItemProduct from './items/ItemProduct'

export default function ProductGroundCoffee() {
    const value = useSelector(valueCoffee)
    let products = value.Category
    return (
        <div className='lp:h-[724px] text-b px-12'>
            <div className='relative border-b-2 border-bo'>
                <div className='bg-primary rounded-md mb-5 px-2 lp:w-[7%] tb:w-[15%] mb:w-[30%]'>
                    <p>Cà Phê Bột</p>
                </div>
                <div className='bg-primary tb:block mb:hidden rounded-md absolute left-1/2 top-2 p-1'>
                    <p className='font-l'>GROUND COFFEE</p>
                </div>
            </div>
            <div className='mt-10 mb:block tb:grid tb:grid-cols-3 lp:grid-cols-4 text-center gap-2'>
                {products && products.GroundCofffe.slice(0,4).map(product => {
                    return (
                        <div key={product.id} className='col-span-1'>
                            <ItemProduct products={products.GroundCofffe} product={product} />
                        </div>
                    )
                })}
            </div>
            <div></div>
        </div>
    )
}
