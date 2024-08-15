import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchProductData } from '../../features/productDataSlice'
import Cards from '../product_card/Cards'

import Productbar from './Productbar'
import NavBar from '../NavBar'

export default function Products() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.productDataReducer);
    const productData = data.filterData.length ? data.filterData : data.products;

    useEffect(() => {
        dispatch(fetchProductData());
    }, [])


    return (
        <>
            <NavBar />
            <Productbar />
            <Routes>
                <Route path='/' element={<Cards products={productData} />} />

            </Routes>
        </>
    )
}
