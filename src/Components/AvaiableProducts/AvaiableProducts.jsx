import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AvaiableProducts = ({cardData}) => {
    console.log(cardData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
           {
            cardData.map(card => <SingleProduct key={card.id} card={card}></SingleProduct>)
           }
        </div>
    );
};

export default AvaiableProducts;