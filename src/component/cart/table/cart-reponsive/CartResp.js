import React, { useState } from 'react'
import Product from './Product'


export default function CartResp({ productList, onclick, arr, setId, setValue, choice }) {
    const [del, setDel] = useState()
    return (
        <div className='mb:block tb:hidden'>
            {
                arr.length !== productList.length ?
                    arr.map(item => {
                        let products = item.props
                        let price = products.price
                        let length = item.value
                        let prices = price * length

                        return (
                            <Product
                                key={products.id}
                                id={products.id}
                                prices={prices}
                                products={products}
                                price={price}
                                length={length}
                                setValues={setValue}
                                setId={setId}
                                onclick={onclick}
                                choice={choice}
                                del={del}
                                setDel={setDel}
                            />
                        )
                    }) :
                    productList.map(item => {
                        let products = item.props
                        let price = products.price
                        let length = item.value
                        let prices = price * length


                        return (
                            <Product
                                key={products.id}
                                id={products.id}
                                prices={prices}
                                products={products}
                                price={price}
                                length={length}
                                setValues={setValue}
                                setId={setId}
                                onclick={onclick}
                                choice={choice}
                                del={del}
                                setDel={setDel}
                            />
                        )
                    })
            }


        </div>
    )
}
