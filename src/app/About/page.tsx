import React from "react";
import Image from "next/image";
import shopping from "../About/shopping.png";
import number from "../About/number.png";
import Videocard from "../About/Video card.png";
import pic1 from "../About/pic1.png";
import pic2 from "../About/pic2.png";
import pic3 from "../About/pic3.png";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import desktop from "../About/desktop.png";
import pic4 from "../About/pic4.png";

function Page() {
  return (
    <div className="bg-[#fafafa] w-full">
      {/* SECTION-1 */}
      <div className="h-auto w-full bg-slate-100 flex flex-col lg:flex-row items-center px-4 lg:px-20 py-10">
        <div className="text-center lg:text-left ml-20 max-w-lg">
          <h1 className="text-2xl lg:text-3xl font-semibold uppercase text-black">
            ABOUT COMPANY
          </h1>
          <p className="text-black text-xl mt-3 font-semibold">About us</p>
          <p className="text-sm text-[#8c8787] mt-3 font-semibold">
            We know how large objects will act, but things on a small scale
          </p>
          <button className='h-10 w-32 text-black border border-black mt-4 text-sm hover:bg-blue-500'>
            Get Quote Now
          </button>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-10">
          <Image className="w-full max-w-xs lg:max-w-md" src={shopping} alt='Get in touch today!' />
        </div>
      </div>

      {/* SECTION-2 */}
      <div className="w-full px-4 lg:px-20 py-10">
        <div className='flex flex-col lg:flex-row gap-10 text-center lg:text-left'>
          <div className="max-w-sm">
            <h1 className='text-[#f32c2c] text-sm font-semibold'>Problems trying</h1>
            <p className='text-black text-xs mt-2'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
          </div>
          <p className='text-black text-sm max-w-lg'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
        </div>
        <div className="h-28 mt-10 flex justify-center">
          <Image src={number} alt='next' />
        </div>
      </div>

      {/* SECTION-3 */}
      <div className="flex justify-center py-10">
        <Image className="w-full max-w-lg" src={Videocard} alt="image" />
      </div>

      {/* SECTION-4 */}
      <div className="text-center px-4 lg:px-20 py-10">
        <h1 className="text-black text-2xl font-semibold">Meet Our Team</h1>
        <p className="text-black text-sm mt-4">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[pic1, pic2, pic3].map((pic, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image className="h-60 w-60 rounded-lg" src={pic} alt="Team Member" />
              <p className="text-black mt-2 font-semibold">Username</p>
              <p className="text-black text-sm">Profession</p>
              <div className="flex gap-2 mt-2 text-black">
                <CiTwitter />
                <FaFacebookF />
                <FaInstagram />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION-5 */}
      <div className="bg-slate-300 text-center px-4 lg:px-20 py-10">
        <h1 className="text-black font-bold text-2xl">Big Companies Are Here</h1>
        <p className="text-black text-sm mt-3">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <div className="flex justify-center mt-5">
          <Image src={desktop} alt='next' />
        </div>
      </div>

      {/* SECTION-6 */}
      <div>
        <Image className="w-full h-auto" src={pic4} alt="image" />
      </div>
    </div>
  );
}

export default Page;
