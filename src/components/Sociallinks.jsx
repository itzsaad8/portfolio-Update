import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Sociallinks = () => {

    const links =[
        {
            id:1,
            child:(
                <>
                Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: 'http://linkedin.com/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: 'http://github.com/itzsaad8',
            
        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:msikhan32@gmail.com',
            
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: 'http://linkedin.com/',
            style: 'rounded-br-md',
            downloaded: true
        }
    ]
  return (
    <div className='hidden lg:flex flex-col fixed top-[35%] left-0 '>
        <ul>
            {
                links.map(({id, child, href, style, download})=>(
                    <li key={id} className={"flex justify-between items-center w-36 h-10 px-2 bg-gray-600 ml-[-105px] hover:ml-[-5px] hover:rounded-md duration-200 hover:bg-orange-500"+" "+style}>
                    <a 
                    download={download}
                    target='_blank'
                    rel="noreferrer"
                    className='flex justify-between items-center w-full text-white'     href={href}>{child}
                    </a>
                    </li>
                ))
            }

        </ul>
    </div>
  )
}

export default Sociallinks