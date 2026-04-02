import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import {  toast } from 'react-toastify';



const HandleProduct = ({ selectedProducts, setSelectedProducts, total,setTotal }) => {
    console.log(selectedProducts.price)
    const handleProduct = (product) => {
        const filter = selectedProducts.filter(filter => filter.name !== product.name)
        setSelectedProducts(filter)
        setTotal(total-product.price)
        toast.success(`${product.name} has successfully removed from cart`)
        
        
    }
   
    const handleProductarray = () =>{
        setSelectedProducts([])
        setTotal(0)
        toast.success(`All Items has successfully added to cart`)
        
    }    
    return (
        <div>
            {
                selectedProducts.length === 0 ? <div className='text-center my-12.5 flex flex-col items-center space-y-4'>
                    <IoIosDocument className='text-5xl' />
                    <h2 className='text-2xl'>No Player Selected Yet</h2>
                    <p>Go To Products Tab to Select Product</p>
                </div>
                :selectedProducts.map((product, index) => {
                    return <div>
                        <div key={index} className='flex items-center gap-6 justify-between rounded-2xl border border-[#7f8c8d] mt-5 p-4'>
                            <div className='flex gap-6 items-center'>
                                <img className='h-10 rounded-md' src={product.image} alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>{product.name}</h2>
                                    <p className='text-left'> $ {product.price}</p>
                                </div>
                            </div>
                            <button onClick={() => handleProduct(product)} className='btn'><FaDeleteLeft /></button>
                        </div>

                    </div>
                })

            }
            <h2 className={`mt-5 ${selectedProducts.length === 0 ? "hidden" : "block"} text-xl font-bold`}>Total: <span>$ {total.toFixed(2)}</span></h2>
            <button onClick={()=> handleProductarray()}
                className={`mt-5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] ${selectedProducts.length === 0 ? 'hidden' : 'block'
                    } btn text-white rounded-full btn-block`}
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default HandleProduct;