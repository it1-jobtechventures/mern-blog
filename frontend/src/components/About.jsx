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
              About My Family
            </h1>
            <div className="w-1/3 sm:w-1/4 h-1 bg-[#ff9724]"></div>
          </div>
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:p-10  text-justify space-y-2">
            Family is the cornerstone of everything I do. It’s where I draw my inspiration, strength, and motivation. Together, we’ve built a life rooted in love, respect, and a shared commitment to growth and happiness.<br/>
            <p><span className='font-bold'>Priya Bansal</span>, my wonderful wife, is a <span className='font-bold'>dedicated dietitian</span> who has always been a source of health and well-being in our home. Her passion for nutrition and wellness inspires us to live balanced, healthy lives, and her unwavering support has been instrumental in both my personal and professional journey. She’s not just the heart of our home, but a true partner in every sense.<br/></p>
            <p>Our daughters are both exceptionally talented and unique in their own ways:</p>
              <p><span className='pl-6 font-bold'>• Mansi Bansal</span> (18) is in her first year of <span className='font-bold'>Computer Engineering</span>. A tech enthusiast with a sharp mind and a love for problem-solving, she’s already carving out her path in the world of technology. We’re incredibly proud of how she’s embracing the challenges of university life and the bright future ahead of her.</p>
              <p><span className='pl-6 font-bold'>• Ashmi Bansal</span> (12) is a creative soul who has already made her mark as an <span className='font-bold'>author</span>. At just 12 years old, she has a unique perspective on the world, which she beautifully captures in her writing. Whether it’s crafting stories or exploring new ideas, Ashmi constantly reminds us of the power of imagination and self-expression.</p>
              <p>Together, our family creates a nurturing, supportive environment where we learn from each other, celebrate each other’s successes, and always have each other’s backs. We believe in the power of <span className='pl-6 font-bold'>shared experiences</span>, whether it’s celebrating achievements, overcoming challenges, or simply enjoying time together. Our family is a reflection of the values I hold dear—growth, love, creativity, and kindness.</p>
          </p>
        </div>
      </header>
    </div>
  </main>
  )
}

export default About