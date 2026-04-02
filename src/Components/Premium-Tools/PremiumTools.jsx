import React, { Suspense } from 'react';
import Products from '../Products/Products';

const fetchData = async() =>{
    const res = await fetch("/data.json")
    return res.json()
}

const PremiumTools = () => {
    const dataPromise = fetchData()
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-5xl font-extrabold text-center mt-30'>Premium Digital Tools</h1>
                <p className='text-[16px] font-normal text-center mt-4 text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='text-center mt-9'>
                    
                </div>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                <Products dataPromise={dataPromise}></Products>
            </Suspense>
            </div>
        </div>
    );
};

export default PremiumTools;