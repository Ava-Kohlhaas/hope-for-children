import { useState } from "react";
import HomeLogo from "../assets/hfc-logo.jpg";
import Instagram from "../assets/instagram-logo.png";
import LinkedIn from "../assets/linkedin-logo.png";
const Footer = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-between py-10 md:py-15">
      <img
        src={HomeLogo}
        alt="Hope for Childhood Logo"
        className="my-4 w-40"
      />
      <div>
        <div className="font-bold text-xl md:text-3xl text-gray-600">
          Quick Links
        </div>
        <div className="flex mt-5 text-xl text-gray-600">
          <div>
            <div className="my-2">
              <a href="/">
                Home
              </a>
            </div>
            <div className="my-2">
              <a href="/">Donate</a>
            </div>
          </div>
          <div className="ml-5">
            <div className="my-2">
              <a href="/">
                Our Programs
              </a>
            </div>
            <div className="my-2">
              <a href="/">Our Teams</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-xl md:text-3xl text-gray-600">
          Connect with Us
        </div>
        <div className="flex items-center md:justify-center mx-auto w-full my-2 md:my-5">
          <div>
            <a href="/">
                <img src={Instagram} alt="Instagram Logo" className="w-10 inline"/>
            </a>
          </div>
          <div>
            <a href="/" className="ml-5">
                <img src={LinkedIn} alt="Linkedin Logo" className="w-10 inline"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
