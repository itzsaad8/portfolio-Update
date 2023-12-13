import React from 'react'
import img from '../assets/dp4.jpg'
import img1 from '../assets/projctspics/img1.jpg'
import img2 from '../assets/projctspics/img2.jpg'

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: img1
        },
        {
            id:2,
            src: img2
        },
        {
            id:3,
            src: img1
        },
        {
            id:4,
            src: img2
        },
        {
            id:5,
            src: img1
        },
        {
            id:6,
            src: img2
        }
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full '>
        <div className='max-w-screen-lg p-4 flex flex-col justify-center  w-full h-full mx-auto'>
            <div className='pb-8'>
                <p className='text-4xl border-b-4 border-orange-500 font-bold inline'>Portfolio</p>
                <p className='py-6'>Check out some of my work here </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id,src}) =>(
                    <div key={id} className='group shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-300 group-hover:scale-105' />
                    <div className=' flex items-center justify-center'>
                        <button className='w-1/2px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default Portfolio