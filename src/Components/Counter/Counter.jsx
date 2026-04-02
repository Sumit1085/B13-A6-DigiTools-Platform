import React from 'react';

const Counter = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] mt-20'>
            <div className='container mx-auto grid grid-cols-1 space-y-10 md:grid-cols-3 text-center p-13'>
                <div className="left">
                    <h1 className='text-6xl font-extrabold text-white'>50K+</h1>
                    <p className='text-2xl mt-1 font-light text-white'>Active Users</p>
                    
                </div>
                {/* <div className="divider lg:divider-horizontal"></div> */}
                <div className="middle">
                    <h1 className='text-6xl font-extrabold text-white'>200+</h1>
                    <p className='text-2xl mt-1 font-light text-white'>Premium Tools</p>
                </div>
                {/* <div className="divider lg:divider-horizontal"></div> */}
                <div className="right">
                    <h1 className='text-6xl font-extrabold text-white'>4.9</h1>
                    <p className='text-2xl mt-1 font-light text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;