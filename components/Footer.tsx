
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-green-950 text-white py-8 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <div className="mb-4 md:mb-0 ">
        <img src="/Assets/loogoo.png" alt="logo" className='w-10 h-10 object-contain' />
          <h3 className="text-lg font-bold">SmartDisposal</h3>
          <p className="text-sm">Making waste disposal smarter and eco-friendly.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link href="#how-it-works" className="text-sm hover:underline">
            How It Works
          </Link>
          <Link href="#features" className="text-sm hover:underline">
            Features
          </Link>
          <Link  href="./Contact" className="text-sm hover:underline">
            Feedback
          </Link>
          <Link href="#privacy-policy" className="text-sm hover:underline">
            Back to top
          </Link>
        </div>

     
      </div>

      <div className="border-t border-gray-500 mt-8 py-4 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Smart Disposal . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
