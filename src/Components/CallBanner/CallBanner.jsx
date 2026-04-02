import React from 'react';

const CallBanner = () => {
    return (
        <div className=" bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-5 md:p-30 text-center">
            <div className='container mx-auto'>
                <h1 className='text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h1>
                <p className='mt-4 text-white'>Join thousands of professionals who are already using Digitools to work smarter.<br/> Start your free trial today.</p>
                <div className='mt-10'>
                    <button className='btn rounded-4xl text-[#4F39F6]'>Explore Products</button>
                    <button className='btn border border-white bg-transparent text-white rounded-4xl ml-4'>View Pricing</button>
                </div>
                <p className='mt-4 text-[#bdc3c7]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default CallBanner;