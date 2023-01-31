import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import CartStore from './component/cart/CartStore';
import HomePage from './component/content/home-page/HomePage';
import Distributor from './component/distributor/Distributor';
import Gift from './component/gift-Tet/Gift';
import { configAxiosReq } from './config';
import BaseLayout from './layout/BaseLayout';
import CartStoreLayout from './layout/CartStoreLayout';
import DetailProduct from './layout/DetailProduct';
import ProductLayout from './layout/ProductLayout';
import ScrollTop from './scrolltop/ScrollTop';
import { apiCoffee } from './store/coffeeSlice';

function App() {


  const dispatch = useDispatch()
  useEffect(() => {
    configAxiosReq.getApi('/Course').then(res => dispatch(apiCoffee(res.data)))
  }, [])

  let params = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },[params.pathname])

  return (
    <div className="App">
      {
        params.pathname === 'cart'

          ?
          //Layout trang sản phẩm
          < CartStoreLayout >
            <CartStore />
          </CartStoreLayout>

          :

          //Layout app
          <BaseLayout>
            <Routes>
              <Route path='/product/*' element={<ProductLayout />} />
              <Route path='/cart' element={<CartStore />} />
              <Route path='/distributor' element={<Distributor />} />
              <Route path='/gift' element={<Gift />} />
              <Route path='/detail-product' element={<DetailProduct />} />
              <Route path='/' element={<HomePage />} />
            </Routes>
          </BaseLayout>
      }
      <ScrollTop />
    </div >
  );
}

export default App;
