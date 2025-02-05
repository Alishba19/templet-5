import React from "react"; 
import Link from "next/link";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

export const Header = () => {
    return (
        <div className="w-full bg-[#fafafa] px-4 md:px-8 lg:px-16 shadow-md">
            <div className="flex items-center justify-between h-[60px] max-w-7xl mx-auto">
                <h2 className="text-2xl font-semibold text-black">
                    <Link href='/'>Banbage</Link>
                </h2>
                
                <ul className="hidden md:flex items-center gap-6 text-[#278af3]">
                    <li className="text-[15px] font-normal"><Link href='/'>Home</Link></li>
                    <li className="text-[15px] font-normal"><Link href='/shop'>Shop</Link></li>
                    <HiChevronDown className="w-5 h-5" />
                    <li className="text-[15px] font-normal"><Link href='/About'>About</Link></li>
                    <li className="text-[15px] font-normal"><Link href='/Contact'>Contact</Link></li>
                    <li className="text-[15px] font-normal"><Link href='/'>Pages</Link></li>
                </ul>
                
                <div className="flex items-center gap-4 text-[#278af3]">
                    <p className="flex justify-center md:block text-[15px] text-black w-[100px] h-[40px] rounded-sm bg-sky-500 outline outline-black space-x-2">
                    <Link href="/Login" className="w-full h-full flex justify-center items-center">Login</Link></p>
                    <CiSearch className="w-6 h-6" />
                    <CiShoppingCart className="w-6 h-6" />
                    <CiHeart className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default Header;
