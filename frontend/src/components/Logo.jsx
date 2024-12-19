import React from 'react'
import logo1 from '../assets/jobringer.png'
const Logo = () => {
  return (
    <div className="flex justify-center items-center border ">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-2 h-full">
          <div>
            <img src={logo1} alt="image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint totam nam voluptatum animi, nesciunt soluta veniam </p>
            <p>Links</p>
          </div>
          <div>
            <img src="" alt="image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint totam nam voluptatum animi, nesciunt soluta veniam </p>
            <p>Links</p>
          </div>
          <div>
            <img src="" alt="image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint totam nam voluptatum animi, nesciunt soluta veniam </p>
            <p>Links</p>
          </div>
          <div>
            <img src="" alt="image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint totam nam voluptatum animi, nesciunt soluta veniam </p>
            <p>Links</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo