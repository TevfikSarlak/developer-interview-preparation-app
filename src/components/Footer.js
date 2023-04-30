import React from "react";
import { useState } from "react";
import ContactForm from "../components/ContactForm";


export const Footer = () => {

  

  return (
    
      <div
        className="flex flex-col sm:text-sm md:flex-row justify-center md:justify-around items-center bg-darkBlue
                        mx-auto mt-96 mb-0 pb-8 md:text-left"
      >
        <div className=" md:ml-4 space-x-2 py-8 space-y-4">
          <h1 className="font-mont font-bold text-lightRed">Follow me</h1>
          <div>
            <h3 className="underline font-mont text-lightRed mb-1 font-semibold ">
              Socials
            </h3>
            <div className="flex flex-row justify-center md:justify-start space-x-3 mb-8">
              <a href="https://github.com/TevfikSarlak" target="_blank">
                <img
                  src="../images/github.png"
                  className="hover:bg-violet-800  rounded-full"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/tevfik-%C5%9Farlak-25854a135/"
                target="_blank"
              >
                <img
                  src="../images/linkedin.png"
                  className="hover:bg-blue-900 rounded-full"
                />
              </a>
              <a href="https://twitter.com/tevfiksarlak" target="_blank">
                <img
                  src="../images/twitter.png"
                  className="hover:bg-blue-700 rounded-full"
                />
              </a>
              <a href="https://medium.com/@tevfiksarlak" target="_blank">
                <img
                  src="../images/medium.png"
                  className="hover:bg-green-700 bg-darkBlue rounded-full"
                />
              </a>
            </div>
            <div className="flex flex-row justify-center md:justify-start text-lightRed font-mont underline space-x-2 mb-4">
              <img src="../images/email.png" />
              <p> tevfiksarlak@gmail.com</p>
            </div>
            <div className="flex flex-row justify-center md:justify-start text-lightRed font-mont underline space-x-1">
              <img src="../images/telephone-call.png" />
              <p>+90 505 470 7777</p>
            </div>
          </div>
        </div>
        <div className="space-y-2 font-mont text-white text-xs md:text-base">
           <p>&copy; 2023 Tevfik Şarlak. All rights reserved.</p>
           <p>You can reach out to me on Social Media or via email </p>
           <p className="mb-4">Your Feedback is invaluable for me </p>
           <div className="mt-10 flex justify-center">
             <a href="https://github.com/TevfikSarlak/developer-interview-preparation-app"
                target="_blank"
                className="border px-4 py-2 rounded-lg text-darkBlue bg-lightBlue font-semibold">
                &lt;Source&gt;
             </a>
           </div>
        </div>
      </div>
    

  );
};
