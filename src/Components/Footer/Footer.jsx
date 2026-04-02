import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
        <div className=' bg-[#101727]'>
            <footer className="footer sm:footer-horizontal p-10 md:p-16 text-white justify-between ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
                    <div>
                        <h1 className='text-5xl font-extrabold'>DigiTools</h1>
                        <p className='mt-4'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>
                    <nav className='flex flex-col space-y-4'>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav className='flex flex-col space-y-4'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav className='flex flex-col space-y-4'>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <div className='flex gap-4'>
                            <FaFacebook className='text-4xl cursor-pointer' />
                            <FaInstagram className='text-4xl cursor-pointer' />

                            <FaXTwitter className='text-4xl cursor-pointer' />
                        </div>

                    </nav>
                </div>
                    <div className="divider"></div>


            </footer>
        </div>
    );
};

export default Footer;