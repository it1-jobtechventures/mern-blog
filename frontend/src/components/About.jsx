import React from 'react'
import fam from '../assets/fam.jpeg'
import about from '../assets/about.jpeg'
const About = () => {
  return (
    <main>
    <header className="flex flex-col bg-[#202020] text-white pt-12 pb-32">
      <div className="flex flex-col-reverse md:flex-row bg-[#202020] text-white md:pt-16">
        <div className="w-full md:w-1/2 p-6 md:text-left">
        <div className="bottom-0 left-0 w-full h-1 bg-[#ff9724]"></div>
          <h1 className="text-7xl font-bold mb-6 relative inline-block">
            ABOUT.
          </h1>
          <div className="w-full  text-lg sm:text-xl p-5 pl-10">
            I’m passionate about innovation and driven by impact.
          </div>
          <div className="text-sm lg:text-xl  mt-6 md:mt-10">
            I really enjoy working on cutting-edge projects and developing enabling new technologies in the hope that these will one day translate back to the real world and have a direct impact on our lives.
            I also enjoy being surrounded by brilliant people that share the vision of “technology for good” and I’m truly humbled by their support. Meanwhile, I’m excited by the ever-growing challenges I’m faced with as my career unfolds and keen to take them on.
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center p-6">
          <img src={about} alt="profile" className="rounded-md shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"/>
        </div>
      </div>
    </header>
    <div>
      <header className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center p-6">
          <img src={fam} alt="profile" className="rounded-md object-contain  w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"/>
        </div>
        <div className="w-full md:w-1/2 p-6 bg-[#f3f3f3] ">
          <div className="flex flex-col items-end">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 relative text-right">
              My background is a bit like a pizza
            </h1>
            <div className="w-1/3 sm:w-1/4 h-1 bg-[#ff9724]"></div>
          </div>
          <p className="text-base sm:text-lg leading-relaxed mb-4 pt-7 p-6 sm:p-10 lg:p-14">
            The base is Mathematical Physics, the sauce is Engineering and Computer Science, and the toppings, well, the toppings will depend on the project that I’m working on at the time. 
            Most recently, at Ultraleap, we’ve been developing a new type of human-computer interface. One made up of invisible small vibrations in the air that we can generate and you can gesture, touch and feel with your bare hands and without having to wear or hold anything. A touchable hologram if you like.
            Prior to that, at Toshiba, we’ve been working on modelling and designing more reliable wireless networks. Part of my work on this topic was included in Toshiba’s wining bid to rollout smart meters in Japan.
            So, my background in Mathematical Physics, Complex Systems, and Wireless Networks certainly comes in handy in the development of emerging technologies, especially during the current wave of AI. However, at the same time in the past few years, I’ve learned so much about user-centered design, human factors, immersive multi-sensory experiences, and the importance of responsible research and innovation.
            More recently, I’ve been fascinated by the complexities of how to set up and manage an R&D team that is able to fund itself and delivers results. So much so, that I’ve written a book about it.
            Finally, leveraging my experiences, I’ve recently launched a consultancy service that helps other companies apply for R&D funding and then set them up. I’m calling this service: Orestify. 
          </p>
        </div>
      </header>
    </div>
  </main>
  )
}

export default About