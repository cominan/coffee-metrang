import React from 'react'
import Product from './Product'


export default function CartResp({ productList, onclick, arr, setId, setValue }) {
    return (
        <div>
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
                            />
                        )
                    })
            }


        </div>
    )
}
