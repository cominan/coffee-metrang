import React from 'react'
import { useSelector } from 'react-redux'
import { valueCoffee } from '../../../../store/coffeeSlice'
import ItemProduct from './items/ItemProduct'

export default function ProductVacuumCoffee() {
    const value = useSelector(valueCoffee)
    let products = value.Category
    return (
        <div className='lp:h-[724px] text-b px-12 mt-2'>
            <div className='relative border-b-2 border-bo'>
                <div className='bg-primary rounded-md mb-5 px-2 tb:w-[25%] lp:w-[15%] mb:w-[60%]'>
                    <p>Cà Phê Hút Chân Không</p>
                </div>
                <div className='bg-primary mb:hidden tb:block rounded-md absolute left-1/2 top-2 p-1'>
                    <p className='font-l'>VACUUM GROUND COFFEE</p>
                </div>
            </div>
            <div className='mt-10 tb:grid tb:grid-cols-3 lp:grid-cols-4 mb:block text-center gap-2'>
                {products && products.VacuumGroundCoffee.slice(0,4).map(product => {
                    return (
                        <div key={product.title} className='col-span-1'>
                            <ItemProduct products={products.VacuumGroundCoffee} product={product} />
                        </div>
                    )
                })}
            </div>
            <div></div>
        </div>
    )
}
