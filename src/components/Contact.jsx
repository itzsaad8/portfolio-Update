import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='h-full w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white '>
        <div className='flex flex-col p-4 justify-center  mx-auto max-w-screen-lg h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Contact</p>
                <p className='py-6'> Submit the form below to get in touch with me !</p>
            </div>
            <div className='flex justify-center items-center'> 
                <form action="https://getform.io/f/a3672ccd-bb48-4701-a0e9-5881a028b0d4" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name '
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                  <input type="email" name='email' placeholder='Enter your email '
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message"  rows="10"
                     className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                     <button className='text-white bg-gradient-to-b from-orange-700 to-orange-400 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110  duration-300'>Let's talk</button>
                <div className='flex gap-10 justify-center  items-center '>
                    <a href="https://www.linkedin.com/in/saad-khan-340552254/"  className='hover:text-orange-500'><FaLinkedin size={30} /></a>
                    <a href="http://github.com/itzsaad8" className='hover:text-orange-500'><FaGithub size={30}/></a>
                    <a href="" className='hover:text-orange-500'> <HiOutlineMail size={30}/></a>
                    <a href="" className='hover:text-orange-500'> <BsFillPersonLinesFill size={30}/></a>
                
               
               
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact