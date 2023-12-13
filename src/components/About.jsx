import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full md:h-screen pt-12 sm:pt-0  bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg pt-12 md:pt-0 p-4 flex flex-col justify-center mx-auto w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>About</p>
                </div>
                <p className='md:text-xl text-sm mt-5 md:mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid deleniti blanditiis quasi veritatis! Quo ut ipsa dignissimos quisquam deserunt est ipsum laborum eligendi laboriosam, placeat eos eius facere numquam corporis ex itaque illum. Iusto veniam voluptates a ullam commodi tempora, mollitia quis adipisci dignissimos eligendi nemo. Explicabo, ab mollitia.</p>
                <br />
                <p className='md:text-xl text-sm'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo porro dicta modi a, aperiam facere deleniti animi officia obcaecati voluptatum nam quam debitis perspiciatis ut voluptates error suscipit beatae numquam et! Autem voluptates sed doloremque repellendus quam repellat voluptate esse voluptatibus sapiente quisquam? Corporis, odit inventore maxime nisi ad accusamus.
                </p>
            </div>
        </div>
    )
}

export default About