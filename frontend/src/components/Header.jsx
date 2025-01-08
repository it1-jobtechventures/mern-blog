import React from "react";
import { Link } from "react-router-dom";
import bioImage from '../assets/pb2_bio.jpeg'
import header from '../assets/image1.jpeg'

const Header = () => {
  return (
    <main>
      <header className="flex flex-col bg-[#202020] text-white pb-12">
        <div className="flex flex-col-reverse md:flex-row bg-[#202020] text-white md:pt-16">
          <div className="w-full md:w-1/2 p-6 md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block">
              PRAKASH BANSAL
            </h1>
            <div className="bottom-0 left-0 w-full h-1 bg-[#ff9724]"></div>
            <div className="text-3xl sm:text-5xl lg:text-7xl text-right mt-6 md:mt-10">
              <p>RESEARCHER.</p>
              <p>INVENTOR.</p>
              <p>AUTHOR.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-6">
            <img src={header} alt="profile" className="rounded-md shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg md:h-[400px] h-[250px] object-cover object-top"/>
          </div>
        </div>
        {/* <div className="w-full md:w-3/4 lg:w-1/2 text-lg sm:text-xl p-5 pl-10">
          An experienced researcher, inventor, and author, with a track record
          at leading R&D teams, writing winning grant proposals, whilst being
          passionate about deep-tech innovation that leads to impact.
        </div> */}
      </header>
      <div>
        <header className="flex flex-col-reverse md:flex-row ">
          <div className="w-full md:w-1/2 flex justify-center  p-6">
            <img src={bioImage} alt="profile" className="rounded-md shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"/>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-[#f3f3f3]">
            <div className="flex flex-col items-end">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 relative text-right">
                BIOGRAPHY
              </h1>
              <div className="w-full sm:w-1/4 h-1 bg-[#ff9724]"></div>
            </div>
            <p className="text-base sm:text-lg leading-relaxed mb-4 pt-4 sm:p-10  text-justify">
              <p>I’m <span className="font-bold">Prakash Bansal</span>, an entrepreneur and business leader with a deep passion for driving innovation and scaling businesses. Over the years, I’ve successfully built and led ventures across multiple industry sectors, leveraging technology and strategic vision to create impactful, high-growth solutions.<br/></p>
              <p className="pt-3">Passionate about turning bold ideas into sustainable businesses that not only meet market needs but also lead through innovation. My entrepreneurial journey is rooted in the belief that impactful businesses are built through customer-centric solutions, operational excellence, and strong leadership.<br/></p>
              <p className="pt-3">From launching startups to leading high-growth companies, I have always focused on fostering a culture of innovation and delivering real value. I like to interact with people from diverse backgrounds, any generation of entrepreneurs, sharing insights and strategies for business growth and leadership.</p>
              <p className="pt-3">Let’s connect to explore how we can innovate, collaborate, and grow together!</p>
            </p>
            <div className=" pl-6 sm:pl-10 lg:pl-14 text-lg sm:text-xl">
              <Link to={"/about"}>
                <button className="bg-[#ff9724] text-white p-3 rounded-full">
                  About me
                </button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </main>
  );
};

export default Header;
