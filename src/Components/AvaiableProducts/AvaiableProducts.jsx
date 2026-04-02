import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AvaiableProducts = ({cardData, selectedProducts, setSelectedProducts,setTotal,total}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
           {
            cardData.map(card => <SingleProduct key={card.id} total={total} setTotal={setTotal} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} card={card}></SingleProduct>)
           }
        </div>
    );
};

export default AvaiableProducts;