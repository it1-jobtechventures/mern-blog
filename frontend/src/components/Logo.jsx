import React from 'react'
import alanze from '../assets/alanze.png'
import ArfectLogo from '../assets/ArfectLogo.png'
import hindco from '../assets/hindco.png'
import jobringer from '../assets/jobringer.png'

const Logo = () => {
  return (
    <> 
        <div className='flex justify-around items-center pb-7'>
            <div className='flex flex-col items-center'>
                <img src={alanze} alt='logo' className='h-28 w-28 border p-1'/>
                <p> Online retail Apparel and Fashion Platform</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={ArfectLogo} alt='logo' className='h-28 w-28 border p-1'/>
                <p>Medical Affairs And scientific Communication Firm</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={hindco} alt='logo' className='h-28 w-28 border p-1'/>
                <p>Executive search And  Recruitment consulting Firm</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={jobringer} alt='logo' className='h-28 w-28 border p-1'/>
                <p>JobRinger~India's job portal</p>
            </div>
        </div>
    </>
  )
}

export default Logo