import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const TopHeader = () => {
    return (
        <div className='w-full bg-myDark text-[#FAFAFA] px-4 md:px-8 text-sm'>
            <div className='flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-2 gap-4'>
                <div className='flex flex-wrap items-center gap-2 md:gap-4 justify-center md:justify-start'>
                    <IoCallOutline className='w-4 h-4' />
                    <p>(225) 555-0118</p>
                    <TfiEmail className='w-4 h-4' />
                    <p>michelle.rivera@example.com</p>
                    <p className='hidden md:block text-center'>Follow Us and get a chance to win 80% off</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='hidden md:block'>Follow Us:</p>
                    <FaInstagram className='w-5 h-5' />
                    <FaYoutube className='w-5 h-5' />
                    <FaFacebookF className='w-5 h-5' />
                    <CiTwitter className='w-5 h-5' />
                </div>
            </div>
        </div>
    );
};

export default TopHeader;