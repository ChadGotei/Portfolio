import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#151030] text-white py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="h-12 w-12" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold cursor-pointer">
            © Gaurav Sharma
          </h2>
          <p className="text-sm text-gray-400">
            Built with 💙 using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
