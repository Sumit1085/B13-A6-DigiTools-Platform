import React, { use, useState } from 'react';
import AvaiableProducts from '../AvaiableProducts/AvaiableProducts';
import SelectedProducts from '../SelectedProducts/SelectedProducts';

const Products = ({ dataPromise }) => {
    const [selectedButton, setSelectedButton] = useState('products')
    // const [selectedProducts, setSelectedProducts] = useState([])
    const cardData = use(dataPromise)
    // console.log(card)
    return (
        <div className='text-center'>
            <button onClick={()=>setSelectedButton('products')} className={`btn ${selectedButton === 'products' ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "text-[#9514fa] border-[#9514fa]  "} text-base rounded-4xl border`}>Products</button>
            <button onClick={()=>setSelectedButton('cart')} className={`btn ${selectedButton === 'cart' ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "  border-[#9514fa] text-[#9514fa]"} border text-base ml-4 rounded-4xl `}> Cart ({cardData.length})</button>

        {
            selectedButton === "products" ? <AvaiableProducts cardData={cardData} ></AvaiableProducts> : <SelectedProducts></SelectedProducts>
        }
        </div>
        
    );
};

export default Products;