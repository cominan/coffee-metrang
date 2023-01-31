import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { valueCoffee } from '../../../../store/coffeeSlice'
import { search } from '../../../logic/search/search'
import Input from './Input'
import ProductSearch from './ProductSearch'

export default function Modal(props) {
    const [product, setProduct] = useState([])
    let data = useSelector(valueCoffee)

    const handleHiddenModal = () => {
        props.onclick()
    }
    const handleSearch = (e) => {
        setProduct(search(e, data))
    }

    return (
        <div id={props.id} className="w3-modal">
            <div className="tb:w-[40%] m-auto w3-animate-top w3-card-4 relative z-10">
                <Input onchange={handleSearch} />
                {product.length > 0 ?
                    <div className='overflow-auto h-[400px]'>
                        {product.map(item => {
                            return <ProductSearch func={props.func} product={item} array={product} />
                        })}
                    </div> :
                    ''    
            }
            </div>
            <div onClick={handleHiddenModal} className='w-[100vw] h-[100vh] top-0 absolute'></div>
        </div>
    )
}
