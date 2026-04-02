import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import {  toast } from 'react-toastify';


const SingleProduct = ({ card, selectedProducts, setSelectedProducts ,total, setTotal }) => {
    const [isSelected, SetIsSelected] = useState(false)
    const handlePlayer = () =>{
        SetIsSelected(true)
        setSelectedProducts([...selectedProducts, card])
        setTotal(card.price + total)
        toast(`${card.name} has been added in cart` )
    }
    return (
        <div>
            <div>
                <div className="card  bg-base-100 shadow-lg rounded-2xl">
                    <div className="card-body text-left">
                        <div className="">
                            <div className='flex justify-between'>
                                <img className='mb-8 text-[#F2F2F2]' src={card.image} alt="" />
                                <span className="text-base p-3 badge badge-xs badge-warning">{card.tag}</span>

                            </div>
                            <h2 className="text-3xl  font-bold">{card.name}</h2>
                            <p className='my-4 text-[#627382]'>{card.description}</p>
                            <span className="text-left text-xl"><span className='font-bold'>${card.price}</span>/mo</span>
                        </div>
                        <ul className="mt-6">
                            {card.features.map((feature,index) => <li key={index} className='flex gap-2 items-center'><TiTick className='text-2xl text-[#30B868]'/>{feature}</li>)}
                        </ul>
                        <div className="mt-6">
                            <button onClick={()=>handlePlayer()} disabled={isSelected} className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] btn text-white rounded-full btn-block">{isSelected ? "Already Bought" : "Buy Now"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;