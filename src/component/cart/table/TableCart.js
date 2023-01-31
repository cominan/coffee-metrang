/* eslint-disable no-self-compare */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import totalPrice from '../../logic/total-price/Total'
import pushPrice from './pushPrice'
import ValueTable from './ValueTable'

export default function TableCart({ productList, onclick, arr, setId, value, check, setCheck }) {
    const [choice, setChoice] = useState(true)

    const handleChangeAll = () => {
        setChoice(!choice)
        setCheck(!check)
        if (!check) {
            let price = pushPrice(arr, productList)
            value(totalPrice(price))
        } else {
            pushPrice([], [])
            value(0)
        }
    }
    return (
        <div className='max-w-[80%] m-auto bg-b rounded-sm tb:block mb:hidden'>
            <table className='table-fixed text-center'>
                <thead>
                    <tr className='text-[#898888]'>
                        <th className='py-2 w-[5%]'>
                            <input
                                type='checkbox'
                                checked={check}
                                onChange={handleChangeAll}
                            ></input>
                        </th>
                        <th className='py-2 w-[50%] '>SẢN PHẨM</th>
                        <th className='py-2 w-[8%]'>ĐƠN GIÁ</th>
                        <th className='py-2 w-[12%]'>SỐ LƯỢNG</th>
                        <th className='py-2 w-[15%]'>THÀNH TIỀN</th>
                        <th className='py-2 w-[10%]'>THAO TÁC</th>
                    </tr>
                </thead>

                {
                    arr.length !== productList.length ?
                        arr.map(item => {
                            let product = item.props
                            let price = product.price
                            let length = arr.length
                            return (
                                <ValueTable
                                    key={product.id}
                                    price={price}
                                    id={product.id}
                                    item={item}
                                    product={product}
                                    func={onclick}
                                    setId={setId}
                                    value={value}
                                    length={length}
                                    check={check}
                                    setCheck={setCheck}
                                    choice={choice}
                                />
                            )
                        }) :
                        productList.map(item => {
                            let products = item.props
                            let price = products.price
                            let length = productList.length

                            return (
                                <ValueTable
                                    key={products.id}
                                    price={price}
                                    id={products.id}
                                    item={item}
                                    product={products}
                                    func={onclick}
                                    setId={setId}
                                    value={value}
                                    length={length}
                                    check={check}
                                    setCheck={setCheck}
                                    choice={choice}
                                />
                            )
                        })
                }
            </table>
        </div>
    )
}
