import React, { useEffect, useState } from 'react'
import { addCommas } from '../../../../config'
import totalPrice from '../../../logic/total-price/Total'


export let array = []


export default function Product({ products, prices, price, length, setValues, setId, id }) {
    const [count, setCount] = useState(length)
    //Tính tổng tiền sau chi user change ô số lượng
    const [value, setValue] = useState(prices)

    const handleValue = (e) => {
        let number = e.target.value
        let index = array.findIndex(item => item === +value)
        if (number < 0) {
            setCount(1)
            setValue(1 * price)
            array.push(+1 * price)
            setValues(totalPrice(array))
        } else {
            setCount(number)
            setValue(number * price)
            array.splice(index,1)
            array.push(+number * price)
            setValues(totalPrice(array))
        }


    }

    useEffect(() => {
        if (array.includes(+value)) {

        } else {
            array.push(+value)
        }

        setValues(totalPrice(array))
    }, [])


    const handleButton = () => {
        onclick()
        setId(id)
    }



    return (
        <div>
            <div className='tb:hidden mb:grid grid-cols-3'>
                <div className='col-span-1 flex'>
                    <img className='max-w-[80%]' src={products.img} alt='product' />
                </div>
                <div className='col-span-2'>
                    <p>{products.title}</p>
                    <input
                        type='number'
                        onChange={(e) => handleValue(e)}
                        className='max-w-[10%]'
                        value={count}>
                    </input>
                    <div className='flex'>
                        <p className='text-primary mr-2 text-w font-l'>{addCommas(value)}</p>
                        <button onClick={() => handleButton()}>Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
