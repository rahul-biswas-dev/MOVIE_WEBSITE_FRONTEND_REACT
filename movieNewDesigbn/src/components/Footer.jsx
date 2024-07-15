/* eslint-disable no-unused-vars */
import React from "react";
import Designer from "../assets/Designer.png"

const Footer = () => {
  return (
    <footer className="pb-4 w-full  bg-indigo-300 px-4 text-black pt-4 items-center flex flex-col md:flex-row flex-wrap justify-between  md:px-12">
      <div>
        <img className="w-20 h-20" src={Designer} alt="" />
      </div>
      <div>
        <a href="#" className="no-underline">
          <h4 className="font-bold text-xl mt-4">MovieHive</h4>
        </a>
      </div>
      <div>
        <h2 className="font-bold text-xl mt-4">Contact</h2>
        <div className="w-[100px] h-1 border-b-2 border-yellow-400 rounded-2xl my-2 "></div>
        <div className="cursor-pointer">
          <p className="hover:text-blue-50">Email Us</p>
          <p className="hover:text-blue-50">Suggestion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
