import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main>
      <header className="flex flex-col bg-[#202020] text-white pt-12 pb-32">
        <div className="flex flex-col-reverse md:flex-row bg-[#202020] text-white md:pt-16">
          <div className="w-full md:w-1/2 p-6 md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block">
              PRAKASH BANSAL
            </h1>
            <div className="bottom-0 left-0 w-full h-1 bg-[#FF6200]"></div>
            <div className="text-3xl sm:text-5xl lg:text-8xl text-right mt-6 md:mt-10">
              <p>RESEARCHER.</p>
              <p>INVENTOR.</p>
              <p>AUTHOR.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center p-6">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className="rounded-md shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"/>
          </div>
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 text-lg sm:text-xl p-5 pl-10">
          An experienced researcher, inventor, and author, with a track record
          at leading R&D teams, writing winning grant proposals, whilst being
          passionate about deep-tech innovation that leads to impact.
        </div>
      </header>
      <div>
        <header className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center bg-[#f3f3f3] p-6">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className="rounded-md shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"/>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-[#fffafa]">
            <div className="flex flex-col items-end">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 relative text-right">
                BIOGRAPHY
              </h1>
              <div className="w-1/3 sm:w-1/4 h-1 bg-[#FF6200]"></div>
            </div>
            <p className="text-base sm:text-lg leading-relaxed mb-4 pt-7 p-6 sm:p-10 lg:p-14">
              Dr Orestis Georgiou is an author of 6 patents, 2 books, and 100+
              academic papers that have been published in leading journals and
              conferences of Mathematics, Physics, Computer Science, Engineering
              and Medicine. He has also been co-awarded R&D grants in excess of
              €10 million, including a Marie Curie Individual Fellowship, and is
              the recipient of the prestigious 2019 IEEE Heinrich Hertz award.
              Finally, as Head of R&D Partnerships at Ultraleap, he is passionate
              about haptic technologies, networks, and spatial XR computing and
              oversees all our external R&D collaboration activities and
              grant-funded projects.
            </p>
            <div className="-mt-6 pl-6 sm:pl-10 lg:pl-14 text-lg sm:text-xl">
              <Link to={""}>
                <button className="bg-[#ff6200] text-white p-3 rounded-full">
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
