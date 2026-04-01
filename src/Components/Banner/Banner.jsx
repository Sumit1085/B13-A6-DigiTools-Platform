import React from 'react';
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { CiPlay1 } from "react-icons/ci";
import bannerImg from "../../assets/products/banner.png"
import active from "../../assets/products/active.png"



const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-22 flex justify-between items-center'>
                <div className="banner-left w-1/2">
                    <p className='flex items-center w-72.5 rounded-4xl px-3 text-base font-medium gap-2 bg-[#E1E7FF] text-[#9514fa]'><img src={active} alt="" /> New: AI-Powered Tools Available</p>
                    <h1 className='text-7xl mt-10 font-extrabold'>Supercharge Your Digital Workflow</h1>
                    <p className='text-[18px] font-base text-[#627382] mt-4'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                    </p>
                   <div className='mt-11'>
                        <button className='btn text-white rounded-4xl bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>Explore Products</button>
                        <button className='btn border ml-4 border-[#9514fa] rounded-4xl text-[#9514fa]'><CiPlay1 /> Watch Demo</button>
                   </div>
                </div>
                <div className="banner-right w-1/2 ">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;