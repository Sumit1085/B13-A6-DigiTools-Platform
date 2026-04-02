import React from 'react';
import userImg from "../../assets/products/img-1.png"
import packageImg from "../../assets/products/img-2.png"
import rocketImg from "../../assets/products/img-3.png"

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC] mt-30 py-15 '>
            <div className='container mx-auto'>
                <div className='text-center '>
                    <h1 className='text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                    <p className='text-[16px] mt-4'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                    <div className="card bg-base-100  shadow-sm rounded-2xl p-5 text-center">
                        <div className="badge rounded-full ml-auto  badge-primary">01</div>
                        <img className='w-62.5 mx-auto text-center' src={userImg} alt="" />
                        <div className="card-body">
                            <h2 className="text-[#101727] text-2xl font-bold text-center">
                                Card Title
                                
                            </h2>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                            
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                       <div className="card bg-base-100 sm:mx-auto  shadow-sm rounded-2xl p-5 text-center">
                        <div className="badge rounded-full ml-auto  badge-primary">02</div>
                        <img className='w-62.5 mx-auto text-center' src={packageImg} alt="" />
                        <div className="card-body">
                            <h2 className="text-[#101727] text-2xl font-bold text-center">
                                Card Title
                                
                            </h2>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                            
                        </div>
                    </div>
                    </div>
                    <div className="card bg-base-100 sm:mx-auto shadow-sm">
                        <div className="card bg-base-100  shadow-sm rounded-2xl p-5 text-center">
                        <div className="badge rounded-full ml-auto  badge-primary">03</div>
                        <img className='w-62.5 mx-auto text-center' src={rocketImg} alt="" />
                        <div className="card-body">
                            <h2 className="text-[#101727] text-2xl font-bold text-center">
                                Card Title
                                
                            </h2>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;