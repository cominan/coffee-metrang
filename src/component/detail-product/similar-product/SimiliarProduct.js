import React from 'react'
import ItemProducts from '../../product/content/ItemProducts'

export default function SimiliarProduct( props ) {
  if (props.search) {

    //Data chuyển từ search
    return (
      <div className='my-10'>
        <h2 className='font-l text-xl text-primary mb-4'>SẢN PHẨM TƯƠNG TỰ</h2>
        <div className='tb:grid mb:block tb:grid-cols-4'>
          {props.props.slice(0, 4).map(product => {
            return (
              <div key={product.id} className='tb:col-span-1 w-[90%] m-auto'>
                <ItemProducts product={product} values={props.props} />
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
      let products = props.props
    return (
      <div className='my-10'>
        <h2 className='font-l text-xl text-primary mb-4'>SẢN PHẨM TƯƠNG TỰ</h2>
        <div className='grid grid-cols-4'>
          {products.slice(0, 4).map(product => {
            return (
              <div key={product.id} className='col-span-1 w-[90%] m-auto'>
                <ItemProducts product={product} values={products} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
