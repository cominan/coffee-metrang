import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { valueCoffee } from '../../../store/coffeeSlice'
import gateSort from '../../logic/sort/gateSort'
import ItemProducts from './ItemProducts'
import Sort from './sort/Sort'

export default function ListProduct(props) {
    const value = useSelector(valueCoffee)

    let products = value.Category
    // eslint-disable-next-line no-undef
    let name = props.children
    let productName
    const [block, setBlock] = useState(false)
    const [values, setValue] = useState('Mới nhất')
    const [productSort, setProductSort] = useState()

    const handleModal = () => {
        setBlock(!block)
    }
    const handleValue = (value) => {
        setValue(value)
        setProductSort(gateSort(value, products[name]))
    }
    if (productSort !== undefined) {
        productName = productSort
    } else if (products) {
        productName = products[name]
    } 



    return (
        <div className='text-b px-12'>
            <div className='flex mt-4 justify-between h-[30px]'>
                <div className='flex'>
                    <NavLink to='/' className='font-l text-bl tb:text-x mb:text-t mr-2'>Home / </NavLink>
                    <NavLink to='/product' className='font-l text-bl tb:text-x mb:text-t'> {props.name}</NavLink>
                </div>
                <div className='flex text-bl items-center'>
                    <p className='mr-2 tb:block mb:hidden'>Sắp xếp theo:</p>
                    <div
                        onClick={handleModal}
                        className='text-center border-[1px] border-bl w-[154px] rounded-md relative'
                    >

                        <p className='font-m p-1'>{values}</p>

                        {
                            block ?
                                <Sort onClick={handleValue} />
                                :
                                ''
                        }

                    </div>
                </div>
            </div>
            <div className='mt-10 tb:grid grid-cols-4 text-center gap-2'>
                {products && productName.map(product => {
                    return (
                        <div key={product.id} className='col-span-1'>
                            <ItemProducts values={productName} product={product} path={props.path} name={name} />
                        </div>
                    )
                })}
            </div>
            <div></div>
        </div>
    )
}
