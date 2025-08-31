import { useState } from "react";
import HeroImage1 from "../../assets/hfc-hero-image-1.jpg";
import HeroImage2 from "../../assets/hfc-hero-image-2.jpg";
import HeroImage3 from "../../assets/hfc-hero-image-3.jpg";
import HomeLogo from "../../assets/hfc-logo.jpg";
import HomeSection1 from "../../assets/hfc-section-1-image.jpg";
import HomeSection2 from "../../assets/hfc-section-2-image.jpg";
import Instagram from "../../assets/instagram-logo.png";
import LinkedIn from "../../assets/linkedin-logo.png";
const HomePage = () => {
  return (
    <div>
      <div className="w-full flex pb-8 md:pb-15">
        <img src={HeroImage1} alt="Hero 1" className="w-1/3 object-cover" />
        <img src={HeroImage2} alt="Hero 2" className="w-1/3 object-cover" />
        <img src={HeroImage3} alt="Hero 3" className="w-1/3 object-cover" />
      </div>
      <div className="container flex mx-auto py-8 md:py-15">
        <div className="px-5 md:px-0 w-full md:w-1/3">
          <img src={HomeLogo} alt="Hope for Childhood Logo" />
        </div>
        <div className="w-full my-3 md:my-0 md:w-2/3  md:py-2 pl-0 md:pl-10 flex flex-col justify-between">
          <p className="w-fit p-3 bg-[#FFF6E2] inline-block text-3xl md:text-5xl font-bold text-amber-500">
            Who We Are
          </p>
          <p className="mt-2 text-xl md:text-3xl text-[#004063]">
            This is our mission introduction. This is our mission introduction.
            This is our mission introduction. This is our mission introduction.
          </p>
          <a
            href="/donate"
            className="w-fit bg-amber-500 text-white text-xl md:text-2xl px-6 py-2 rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="container flex mx-auto py-8 md:py-15">
        <div className="px-5 md:px-0 w-full md:w-1/3">
          <img src={HomeSection1} alt="Section image" />
        </div>
        <div className="w-full my-3 md:my-0 md:w-2/3  md:py-2 pl-0 md:pl-10 flex flex-col justify-between">
          <p className=" w-fit p-3 bg-[#FFF6E2] inline-block text-3xl md:text-5xl font-bold text-amber-500">
            What We Do
          </p>
          <p className="mt-2 text-xl md:text-3xl text-[#004063]">
            This is our programs introduction. This is our programs
            introduction. This is our programs introduction. This is our
            programs introduction
          </p>
          <a
            href="/donate"
            className="w-fit bg-amber-500 text-white text-xl md:text-2xl px-6 py-2 rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="container flex mx-auto py-8 md:py-15">
        <div className="px-5 md:px-0 w-full md:w-1/3">
          <img src={HomeSection2} alt="Section Image" />
        </div>
        <div className="w-full my-3 md:my-0 md:w-2/3  md:py-2 pl-0 md:pl-10 flex flex-col justify-between">
          <p className="w-fit p-3 bg-[#FFF6E2] inline-block text-3xl md:text-5xl font-bold text-amber-500">
            Contact Us
          </p>
          <div className="text-[#004063]">
            <div className="flex my-3 items-center flex-wrap">
              <img src={Instagram} alt="Instagram Logo" />
              <p className="text-xl md:text-3xl ml-2">@instagramaccount</p>
            </div>
             <div className="flex my-3 items-center flex-wrap">
              <img src={LinkedIn} alt="Hope for Childhood Logo" />
              <p className="text-xl md:text-3xl ml-2">@linkedinaccount</p>
            </div>
          </div>
          <a
            href="/donate"
            className="w-fit bg-amber-500 text-white text-xl md:text-2xl px-6 py-2 rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
