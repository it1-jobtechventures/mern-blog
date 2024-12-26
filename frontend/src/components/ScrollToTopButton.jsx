import React, { useEffect, useState } from 'react'
import { RiPlaneFill } from "react-icons/ri";

const ScrollToTopButton = () => {
    const [visible , setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        window.addEventListener("scroll" , handleScroll)

        return () => {
            window.removeEventListener("scroll" , handleScroll)
        }
    },[])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    visible && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-[#FF9724] text-white p-3 rounded-full shadow-lg hover:bg-[#ec9735] transition">
            <span className="text-xl"><RiPlaneFill/></span> 
        </button>
    )
  )
}

export default ScrollToTopButton