import React from 'react'
import { MdArrowForwardIos  } from "react-icons/md";
import img from '../assets/dp2.jpg'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'>
            <div className='flex flex-col h-full justify-center  '>
                <h2 className='text-2xl sm:text-5xl font-bold text-white'>I'm Frontend Web Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I have experiance of 2 years in frontend.
                    currently i learnin backend with express,nodejs and MongoDb.
                    I love to work on web application using 
                    react, tailwind ,bootstrap . 
                </p>
                <div>
                    <button className='flex gap-1 text-white py-2 px-5 my-2 bg-gradient-to-r from-cyan-500 to-blue-500 w-fit items-center rounded-md cursor-pointer'>
                        portfolio
                        <span className='hover:rotate-90 '><MdArrowForwardIos /></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={img}  className='rounded-2xl mx-auto w-2/3 md:w-full '  alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home