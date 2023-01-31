/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { addCommas } from '../../../config'
import total from '../../../config/number/total'
import totalPrice from '../../logic/total-price/Total'


export let array = []

export default function ValueTable(props) {
    let valuePrice = addCommas(props.price)

    let initPrice = props.price
    let amount = props.item.value
    let initSumPrice = total(initPrice, amount)

    const [value, setValue] = useState(amount)
    const [price, setPrice] = useState(initSumPrice)
    //biểu diễn trạng thái checked
    const [check, setCheck] = useState(false)

    const handleDel = () => {
        props.func()
        props.setId(props.id)
        let prices = parseInt(price)
        let index = array.findIndex(item => item === prices)
        setCheck(!check)
        if (index !== -1) {
            array.splice(index, 1)
            props.value(totalPrice(array))
        }
    }

    //Hàm chỉ chạy khi checkAll 
    useEffect(() => {
        setCheck(props.check)
    }, [props.choice])

    //hàm check chọn sản phẩm render ra giá tổng
    const handlePrice = () => {

        if (props.check) {
            props.setCheck(!props.check)
            setCheck(!props.check)
        } else {
            setCheck(!check)
        }


        // //kiểm tra mảng đã chứa sản phầm hay chưa
        if (array.includes(price)) {
            let index = array.findIndex(item => item === price)
            array.splice(index, 1)
            props.value(totalPrice(array))
        } else {
            array.push(price)
            props.value(totalPrice(array))
        }


        if (props.length === array.length) {
            props.setCheck(true)
        }

    }




    //hàm tính giá trị tiền ô thành tiền khi thay đổi số lượng
    const handleValue = (e) => {
        setCheck(true)
        if (e.target.value < 0) {
            setValue(1)
            setPrice(total(initPrice, 1))
            array.push(total(initPrice, 1))
        } else {
            setValue(e.target.value)
            setPrice(total(initPrice, e.target.value))
            array.push(total(initPrice, e.target.value))
        }


        //xử lý khi người dùng đang check và sửa sản phầm
        if (check) {
            let index = array.findIndex(item => item === price)
            array.splice(index, 1)
            props.value(totalPrice(array))
        }
        props.value(totalPrice(array))

    }

    return (
        <tbody>
            <tr id={props.id}>
                <td className='border-t-[1px] border-bo '>
                    <input
                        value={price}
                        onChange={handlePrice}
                        checked={check || props.check}
                        type='checkbox'>
                    </input>
                </td>
                <td className='border-t-[1px] border-bo flex items-center font-m'>
                    <img className='max-w-[70px] object-contain' src={props.product.img} alt='image' />
                    <p>{props.product.title}</p>
                </td>
                <td className='border-t-[1px] border-bo font-m'>{valuePrice}</td>
                <td className='border-t-[1px] border-bo font-m'>
                    <input
                        type='number'
                        className='focus:outline-none text-center'
                        onChange={(e) => handleValue(e)}
                        value={value}>
                    </input>
                </td>
                <td className='border-t-[1px] border-bo font-m'>{addCommas(price)}</td>
                <td className='border-t-[1px] border-bo font-m'>
                    <button onClick={handleDel}>
                        xóa
                    </button>
                </td>
            </tr>
        </tbody>
    )
}
