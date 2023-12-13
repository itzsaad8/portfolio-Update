import React from 'react'
import logo1 from '../assets/logos/boot.png'
import  logo2 from '../assets/logos/css.png'
import logo3 from '../assets/logos/js.png'
import logo4 from '../assets/logos/github1.png'
import logo5 from '../assets/logos/html.png'
import logo6 from '../assets/logos/node.png'
import logo7 from '../assets/logos/react.png'

const Skills = () => {
    const skills =[
        {
            id:1,
            src: logo5,
            title:"html",
            style:"shadow-orange-400"
        },
        {
            id:2,
            src: logo2,
            title:"Css",
            style:"shadow-blue-400"
        },
        {
            id:3,
            src: logo1,
            title:"Bootstrap",
            style:"shadow-purple-400"
        },
        {
            id:4,
            src: logo3,
            title:"Javascript",
            style:"shadow-yellow-400"
        },
        {
            id:5,
            src: logo7,
            title:"Reactjs",
            style:"shadow-cyan-400"
        },
        {
            id:6,
            src: logo6,
            title:"Nodejs",
            style:"shadow-green-400"
        },
        {
            id:7,
            src: logo4,
            title:"Github",
            style:"shadow-gray-400 "
        }

    ]
  return (
    <div name='skills' className='pt-10 bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-full'>
        <div className='max-w-screen-lg p-4 flex flex-col justify-center  w-full h-full mx-auto'>
            <div className='pb-8'>
                <p className='text-4xl border-b-4 border-orange-500 font-bold inline'>Skills</p>
                <p className='py-6'> These are the Skills that i work with!</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0 '>
                {
                    skills.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md  px-2 sm:px-0 hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4 text-sm sm:text-base'>{title}</p>
                    </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Skills