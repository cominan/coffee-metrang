import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCommas } from '../../../config/index'
import { total, totalItem } from '../../../store/coffeeSlice'
import filterDuplicateElements from '../../logic/sort/filterDuplicateElement'

export default function AddCart(props) {
    let price = addCommas(+props.price)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)
    //Thay đổi sản phầm set amount thành 1
    useEffect(() => {
        setValue(1)
    }, [props])

    const handleValue = (e) => {
        let amount = e.target.value
        //Check số âm
        if (amount < 0) {
            amount = 0
            setValue(amount)
        } else {
            setValue(amount)
        }
    }

    const handldeMinus = () => {
        //Check số ám
        if (value <= 0) {
            setValue(0)
        } else {
            setValue(+value - 1)
        }
    }

    const handlePlus = () => {
        setValue(+value + 1)
    }

    const handleBuyProduct = () => {
        let values = { props, value }
        filterDuplicateElements(values)
        dispatch(total(props.id))
    }
    return (
        <div>
            <h2 className='font-m text-xl'>{props.title}</h2>
            <p className='text-third text-x py-8 font-l'>{price}</p>
            <p className='font-l text-w mb-4'>Số lượng</p>
            <div
                className='grid grid-cols-3 justify-around text-center font-l mb-6 w-[30%] border-[1px] border-bo'>
                <button
                    onClick={handldeMinus}
                    className='col-span-1 border-r-[1px] border-bo'>
                    -
                </button>
                <input
                    type='number'
                    onChange={e => handleValue(e)}
                    value={value}
                    className='col-span-1 ml-3 text-center border-r-[1px] border-bo'>
                </input>
                <button
                    onClick={handlePlus}
                    className='col-span-1'>
                    +
                </button>
            </div>
            <button
                onClick={handleBuyProduct}
                className='w-[80%] bg-[#2d3436] text-b p-2'
            >
                THÊM VÀO GIỎ HÀNG</button>
        </div>
    )
}
