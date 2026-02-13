import React from 'react'
import { Link } from 'react-router-dom'

const vid = [
    {
        id: 1,
        title: "THE CURIOSITY, ART & ANTIQUITY PROJECT",
        link: "/",
        video: "/video/video4.mp4",
    },
   
]

const Banner = () => {
    return (
        <div className=''>
         
            {vid.map((item, index) => (
                <div key={item.id} className='relative md:my-16   h-screen overflow-hidden'>
                    <video autoPlay loop playsInline muted className='w-full  absolute md:h-full max-md:h-[160vw]  object-cover top-0' src={item.video}></video>
                    <div className='flex  flex-col justify-between text-center  w-full absolute  z-10  bottom-16 items-center'>

                        <div className=' lg:mt-6 max-lg:mt-2 lg:space-y-12 max-lg:space-y-4 flex justify-center flex-col items-center tracking-widest mb-6  text-center  font-semibold  '>
                            <h1 className='text-white lg:text-4xl max-lg:text-2xl'>{item.title}</h1>
                            <Link to={item.link} className='text-white border border-white  max-md:py-2 max-md:px-6 md:py-3 md:px-10 lg:text-lg max-lg:text-sm'>EXPLORE</Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Banner
