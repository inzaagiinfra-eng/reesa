import React from 'react'
import { Link } from 'react-router-dom'

const vid = [
    {
        id: 1,
        title: "SABYASACHI X TATA CLIQ LUXURY",
        link: "/",
        video: "/video/video1.mp4",
    },
    {
        id: 2,
        title: "A CALCUTTA SUMMER FEAST",
        link: "/",
        video: "/video/video2.mp4",
    },
    {
        id: 3,
        title: "HIGH JEWELLERY",
        link: "/",
        video: "/video/video3.mp4",
    },
]

const Banner = () => {
    return (
        <div className=''>

            {vid.map((item, index) => (
                <div key={item.id} className='relative max-md:my-6 md:my-16  h-screen overflow-hidden'>
                    <video autoPlay loop playsInline muted className='w-full  absolute md:h-full max-md:h-[160vw]  object-cover top-0' src={item.video}></video>
                    <div className='flex  flex-col justify-between text-center  w-full absolute  z-10  bottom-16 items-center'>

                        <div className=' lg:mt-6 max-lg:mt-2 lg:space-y-12 max-lg:space-y-4 flex justify-center flex-col items-center tracking-widest mb-6  text-center  font-semibold  '>
                            <h1 className='text-white lg:text-4xl max-lg:text-2xl'>{item.title}</h1>
                            <Link to={item.link} className='text-white border border-white  max-md:py-2 max-md:px-6 md:py-3 md:px-10 lg:text-lg max-lg:text-sm'>EXPLORE</Link>
                        </div>
                    </div>
                </div>
            ))}
            <div className='relative max-md:my-6 md:my-16 min-h-[60vh] md:min-h-screen overflow-hidden'>
                <img className='w-full  absolute md:h-full max-md:h-96  object-cover top-0' src="/banners/banner7.webp" />
                <div className='flex  flex-col justify-between text-center  w-full absolute  z-10  bottom-16 items-center'>

                    <div className=' lg:mt-6 max-lg:mt-2 lg:space-y-12 max-lg:space-y-4 flex justify-center flex-col items-center tracking-widest mb-6  text-center  font-semibold  '>
                        <h1 className='text-white lg:text-4xl max-lg:text-2xl'>BRIDAL COUTURE 2024</h1>
                        <Link className='text-white border border-white  max-md:py-2 max-md:px-6 md:py-3 md:px-10 lg:text-lg max-lg:text-sm'>EXPLORE</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
