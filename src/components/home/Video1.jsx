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
        <div className='space-y-4'>

            {vid.map((item) => (
                <div key={item.id} className='relative h-screen  overflow-hidden'>

                    <video
                        autoPlay
                        loop
                        playsInline
                        muted
                        className='absolute inset-0 w-full h-full object-cover'
                        src={item.video}
                    />

                    <div className='absolute inset-0 flex flex-col justify-end items-center text-center z-10 pb-16'>
                        <div className='space-y-6 font-semibold tracking-widest'>
                            <h1 className='text-white text-2xl lg:text-4xl'>
                                {item.title}
                            </h1>
                            <Link
                                to={item.link}
                                className='text-white border border-white py-2 px-6 lg:py-3 lg:px-10 text-sm lg:text-lg'
                            >
                                EXPLORE
                            </Link>
                        </div>
                    </div>

                </div>
            ))}

            {/* Image Banner Section */}

            <div className='relative min-h-screen overflow-hidden'>

                <img
                    src="/banners/banner7.webp"
                    alt="banner"
                    className='absolute inset-0 w-full h-full object-cover'
                />

                <div className='absolute inset-0 flex flex-col justify-end items-center text-center z-10 pb-16'>
                    <div className='space-y-6 font-semibold tracking-widest'>
                        <h1 className='text-white text-2xl lg:text-4xl'>
                            BRIDAL COUTURE 2024
                        </h1>
                        <Link
                            to="/"
                            className='text-white border border-white py-2 px-6 lg:py-3 lg:px-10 text-sm lg:text-lg'
                        >
                            EXPLORE
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Banner
