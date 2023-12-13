import React from 'react'
import { MdArrowForwardIos  } from "react-icons/md";
import img from '../assets/dp4.jpg'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full pt-20 sm:pt-0 bg-gradient-to-b from-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-around h-screen px-5 md:flex-row'>
            <div className='flex flex-col h-full justify-center  '>
                <h2 className='text-2xl sm:text-6xl font-bold text-orange-500'>M. Saad Khan </h2>
                <span className='text-xl sm:text-4xl text-orange-400'>Frontend Web Developer</span> 
                <p className='text-gray-500 py-4 max-w-md'>I have experiance of 2 years in frontend.
                    currently i learnin backend with express,nodejs and MongoDb.
                    I love to work on web application using 
                    react, tailwind ,bootstrap . 
                </p>
                <div>
                    <button className='group flex gap-1 text-white py-2 px-5 my-2 bg-gradient-to-r from-orange-700 to-orange-400 w-fit items-center rounded-md cursor-pointer'>
                        portfolio
                        <span className='group-hover:rotate-90 duration-300'><MdArrowForwardIos size={16} className='ml-1'/></span>
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