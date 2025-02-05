import React from "react";
import Image from "next/image";
import col from "../app/col.png";
import kids from "../app/kids.png";
import card1 from "../app/card1.png";
import card2 from "../app/card2.png";
import card3 from "../app/card3.png";
import card4 from "../app/card4.png";
import card5 from "../app/card5.png";
import card6 from "../app/card6.png";
import card7 from "../app/card7.png";
import card8 from "../app/card8.png";
import produce from "../app/produce.png";
import man from "../app/man.png";
import pic1 from "../app/pic1.png";
import pic2 from "../app/pic2.png";
import pic3 from "../app/pic3.png";
import ProductCards from "./products/page";

export default function Home() {
  return (
    <div className="container w-full bg-[#FAFAFA] px-4 md:px-10 lg:px-20">
      {/* SECTION-1 */}
      <div className="flex">
        <Image className="w-full h-auto" src={col} alt='image' />
      </div>

      {/* SECTION-2 */}
      <div className="text-center my-10">
        <h1 className="text-black font-semibold text-lg">EDITOR’S PICK</h1>
        <p className="text-black text-sm">Problems trying to resolve the conflict between</p>
        <Image className="mt-5 mx-auto max-w-full h-auto" src={kids} alt="image" />
      </div>

      {/* SECTION-3 */}
      <div className="text-center my-10">
        <h1 className="text-gray-600 text-sm">Featured Products</h1>
        <p className="text-black font-semibold text-lg">BESTSELLER PRODUCTS</p>
        <p className="text-gray-600 text-sm">Problems trying to resolve the conflict between</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          {[card1, card2, card3, card4, card5, card6, card7, card8].map((card, index) => (
            <div key={index} className="text-center">
              <Image className="w-full h-80" src={card} alt="image" />
              <h1 className="text-black text-sm font-semibold">Graphic Design</h1>
              <p className="text-gray-500 text-xs">English Department</p>
              <p className="text-green-500 text-xs mt-1">$16.48 $6.48</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION-4 */}
      <div className="bg-green-800 py-6 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-xs md:text-sm lg:text-base">SUMMER 2020</h1>
            <p className="text-lg md:text-xl font-bold">Vita Classic Product</p>
            <p className="text-xs md:text-sm mt-2 leading-relaxed">
              We know how large objects will act, We know how <br /> objects will act, We know
            </p>
            <p className="text-md font-semibold mt-2">$16.48</p>
            <button className="mt-4 h-10 w-32 border border-white text-white text-sm font-semibold hover:bg-green-500 transition">
              ADD TO CART
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              className="h-auto w-[200px] md:w-[250px] lg:w-[300px]"
              src={produce}
              alt="Product Image"
            />
          </div>
        </div>
      </div>

      {/* SECTION-5 */}
      <div className="flex flex-col md:flex-row items-center my-10 text-center md:text-left px-6 md:px-10 lg:px-16">
        <Image
          className="w-48 h-auto mx-auto md:w-56 lg:w-64"
          src={man}
          alt="Image"
        />
        <div className="mt-6 md:mt-0 md:ml-8 lg:ml-12">
          <h1 className="text-gray-500 text-sm md:text-base">SUMMER 2020</h1>
          <p className="text-black text-lg md:text-xl font-bold">Part of the Neural Universe</p>
          <p className="text-gray-500 text-sm md:text-base mt-3">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-5 py-2 px-6 text-black border border-black text-sm md:text-base font-medium hover:bg-green-500 transition">
            BUY NOW
          </button>
        </div>
      </div>
      {/* SECTION-6 */}
      <div className="text-center my-10">
        <h1 className="text-blue-500 text-sm font-semibold">Practice Advice</h1>
        <p className="text-black text-xl font-semibold">Featured Posts</p>
        <p className="text-gray-500 text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {[pic1, pic2, pic3].map((pic, index) => (
            <Image key={index} className="w-full h-auto" src={pic} alt="image" />
          ))}
        </div>
        <ProductCards />
      </div>
    </div>
  );
}
