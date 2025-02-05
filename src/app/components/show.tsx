import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import React from "react";

const Show = () => {
  return (
    <div>
      <div className="w-full h-20 bg-slate-100 text-black flex flex-col mt-0 sm:flex-col md:flex-row lg:flex-row justify-between ">
        <div className="mt-8 md:pt-4 lg:pt-4">
          <h6 className="font-bold text-[14px] text-myGrey hover:text-blue-500">
            Showing all 12 results
          </h6>
        </div>

        <div className="w-[177px] h-[46px] flex justify-evenly items-center space-x-5">
          <h6 className=" font-bold text-sm text-myGrey hover:text-blue-500">
            Views:
          </h6>
          <div className=" w-[46px] h-[46px] outline outline-[#ECECEC]">
            <Image
              src={`/shop images/square.png`}
              alt={"images"}
              width={14}
              height={14}
              className="mx-auto pt-4"
            />
          </div>
          <div className="w-[46px] h-[46px] outline outline-[#ECECEC]">
            <Image
              src={`/shop images/bars.png`}
              alt={"images"}
              width={14}
              height={14}
              className="mx-auto pt-4"
            />
          </div>
        </div>

        <div className="flex justify-between w-[252px] h-[50px] space-x-6  ">
          <div className="flex justify-center items-center w-[141px] h-[50px] rounded-sm outline outline-[#ECECEC] space-x-2">
            <h6 className="font-normal text-sm text-myGrey hover:text-blue-500">
              Popularity
            </h6>
            <FaAngleDown className="mt-1" />
          </div>
          <div className="flex justify-center items-center w-[141px] h-[50px] rounded-sm bg-sky-500 outline outline-myBlue space-x-2">
            <h6 className="font-bold text-sm text-white hover:text-blue-500">
              Filter
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show