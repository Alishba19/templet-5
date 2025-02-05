import React from "react"; 
import Image from "next/image";
import pic1 from "../Contact/pic1.png";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiLobArrow } from "react-icons/gi";
import pic2 from "../Contact/pic2.png";
import pic3 from "../Contact/pic3.png";
import pic4 from "../Contact/pic4.png";

function Page() {
    return (
        <div className="bg-white w-full main-color py-10 px-4 lg:px-20">
            {/* SECTION-1 */}
            <div className="flex ml-28 flex-col lg:flex-row items-center bg-frame1-color p-6 lg:p-10 rounded-lg">
                <div className='flex flex-col gap-4 text-center lg:text-left'>
                    <h1 className="text-black text-2xl font-semibold">Get in touch today!</h1>
                    <p className="text-sm text-[#212121] font-semibold">We know how large objects will act, but things on a small scale</p>
                    <p className='text-lg text-[#212121] font-semibold'>Phone: +451 215 215 </p>
                    <p className='text-lg text-[#212121] font-semibold'>Fax: +451 215 215</p>
                    <div className='flex justify-center lg:justify-start gap-3 text-[#212121] text-xl'>
                        <CiTwitter /> <FaFacebookF /> <FaInstagram /> <FaLinkedin />
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-10">
                    <Image className="w-full max-w-xs lg:max-w-md" src={pic1} alt='Get in touch today!' />
                </div>
            </div>

            {/* SECTION-2 */}
            <div className='text-center py-16'>
                <h1 className='text-black text-sm font-semibold'>VISIT OUR OFFICE</h1>
                <p className='text-black text-2xl font-bold mt-2'>We help small businesses with big ideas</p>
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {[pic2, pic3, pic4].map((pic, index) => (
                        <Image key={index} className="h-60 w-52 rounded-lg" src={pic} alt='Office' />
                    ))}
                </div>
            </div>

            {/* LAST SECTION */}
            <div className='text-center py-16'>
                <GiLobArrow className='w-10 h-10 text-[#4a54e5] mx-auto' />
                <p className='text-black text-lg mt-5'>WE CAN'T WAIT TO MEET YOU</p>
                <p className='text-black text-2xl font-bold mt-2'>Let's Talk</p>
                <button className='mt-5 px-6 py-2 border border-black text-black hover:bg-blue-500 transition'>Try it free now</button>
            </div>
        </div>
    );
}

export default Page;
