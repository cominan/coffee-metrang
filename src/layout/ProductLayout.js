import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListProduct from '../component/product/content/ListProduct'
import SideBar from '../component/product/sidebar/SideBar'
import { pathRoute } from '../config/route/pathRoute'

export default function ProductLayout() {
    return (
        <div className='lp:grid grid-cols-3 mb-8'>
            <div className='col-span-1'>
                <SideBar />
            </div>
            <div className='col-span-2'>
                <Routes>
                    {
                        pathRoute.map(item => {
                            return (
                                <Route
                                    key={item.path}
                                    path={item.path}
                                    element={<ListProduct children={item.key} name={item.name} path={item.path} />} />
                            )
                        })
                    }
                </Routes>
            </div>
        </div>
    )
}
