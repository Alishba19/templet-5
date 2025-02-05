import React from "react"; 
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => { 
  return (
    <div className="bg-[#edebeb] py-10 px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-black text-sm">
        
        {/* Company Info */}
        <div>
          <h2 className="font-semibold text-base mb-2">Company Info</h2>
          <p>About Us</p>
          <p>Career</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>

        {/* Legal */}
        <div>
          <h2 className="font-semibold text-base mb-2">Legal</h2>
          <p>About Us</p>
          <p>Career</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>

        {/* Features */}
        <div>
          <h2 className="font-semibold text-base mb-2">Features</h2>
          <p>Business Marketing</p>
          <p>User Analytics</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold text-base mb-2">Resources</h2>
          <p>iOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="font-semibold text-base mb-2">Get In Touch</h2>
          <div className="flex items-center bg-white border rounded px-2 py-1">
            <input type="email" placeholder="Your email" className="text-sm flex-1 bg-transparent outline-none" />
            <LuSendHorizontal className="text-black w-5 h-5 cursor-pointer" />
          </div>
          <p className="mt-4 text-xs">Lorem ipsum dolor sit amet</p>
        </div>

      </div>
    </div>
  );
}

export default Footer;
