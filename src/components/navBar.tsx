'use client'

import React, { useState } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface NavbarProps {
    bg: string;
}

const Navbar: React.FC<NavbarProps> = ({ bg }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={`${bg} rounded-full py-2 px-10 flex items-center justify-between`} style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" width={104} height={50} />
            </div>
            <button className="lg:hidden text-white" onClick={toggleMenu}>
                <span className="block w-6 h-0.5 bg-black mb-1"></span>
                <span className="block w-6 h-0.5 bg-black mb-1"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
            </button>
            <div className={`${isOpen ? "absolute shadow-xl top-6 left-0 right-0 bg-white p-4 flex flex-col gap-6" : "hidden"}
        lg:flex lg:items-center lg:gap-8 lg:text-[16px] lg:text-[#333333] lg:font-[600] lg:justify-between`}>
                <button onClick={toggleMenu} className="absolute flex items-center justify-center top-4 right-4 text-white">
                    <X className="w-4 h-4 text-black block md:hidden" />
                </button>
                <a href="/" className="text-[#333333] hover:text-[#466A5E] font-[500] hover:font-bold">
                    Home
                </a>
                <a href="/aboutUs" className="text-[#333333] hover:text-[#466A5E] font-[500] hover:font-bold">About Us</a>
                <a href="/contactUs" className="text-[#333333] hover:text-[#466A5E] font-[500] hover:font-bold">Our Services</a>
                <a href="/contactUs" className="text-[#333333] hover:text-[#466A5E] font-[500] hover:font-bold">Contact Us</a>
                <a href="#" className="text-[#333333] hover:text-[#466A5E] font-[500] hover:font-bold">Newsletter</a>
                <Button className="bg-[#FAC241] hover:bg-yellow-500 font-[600] text-[#333333] text-[16px] md:ml-4 sm:ml-0 rounded-[24px]">
                    Sign in
                </Button>
            </div>
        </div>
    );
}

export default Navbar;