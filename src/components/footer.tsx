'use client'

import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const yearParagraph = document.querySelector('.footer-year');
    if (yearParagraph) {
      yearParagraph.textContent = `VirtualYou Platform © ${currentYear}. All rights reserved.`;
    }
  }, [currentYear]);

  return (
    <footer className="bg-[#466A5E] py-8 md:py-14 px-6 md:px-0 rounded-[20px]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col  md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <Image
              src="/textlogo.png"
              alt="pen"
              width={564}
              height={102}
            />
          </div>
          <div className="relative flex flex-row w-full sm:w-[35%]">
            <Input
              type="email"
              placeholder="Enter your email to get the latest from us"
              className="w-full pr-16 sm:pr-32 h-12 rounded-full bg-white text-gray-800 placeholder:text-gray-500 focus-visible:ring-emerald-600"
            />
            <Button
              className="absolute right-1 top-1 h-10 px-6 rounded-full bg-[#466A5E] hover:bg-[#FAC241] text-white font-medium"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className='border-b mb-8 border-white/60'></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-8">
          <p className="text-gray-200 text-sm leading-relaxed max-w-lg">
            To support government institutions,
            multinational organizations, private companies
            and individuals to transition to
            a digital economy.

          </p>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">VirtualYou Platform</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Leadership Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Locations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">In the Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">+234 900 000 0000</li>
              <li className="text-gray-300 text-sm break-all">info@datastarkey.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">Follow us on Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebookF className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedinIn className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/60 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            VirtualYou Platform © 2024. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
