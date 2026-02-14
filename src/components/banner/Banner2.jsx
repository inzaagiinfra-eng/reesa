import React from 'react'
import { Link } from 'react-router-dom'

const ban = [
    {
        id: 1,
        title: "ACCESSORIES",
        link: "/",
        img: "/banners/banner4.webp",
    },
    {
        id: 2,
        title: "WEDDINGS",
        link: "/",
        img: "/banners/banner5.webp",
    },
    {
        id: 3,
        title: "ART OF RETAIL",
        link: "/",
        img: "/banners/banner6.webp",
    },
]

const Banner2 = () => {
    return (
        <div>

            {ban.map((item) => (
                <div
                    key={item.id}
                    className='relative min-h-screen overflow-hidden my-6 md:my-16'
                >

                    <img
                        src={item.img}
                        alt={item.title}
                        className='absolute inset-0 w-full h-full object-cover'
                    />

                    <div className='absolute inset-0 flex flex-col justify-end items-center text-center z-10 pb-16'>
                        <div className='space-y-4 lg:space-y-8 font-semibold tracking-widest'>
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

            {/* Text Section */}

            <div className='flex flex-col justify-center items-center gap-6 py-10 px-4 text-center lg:px-[30vw]'>
                <p>
                    “Crowded narrow lanes with balconies jutting out of beautiful old mansions and homes,
                    jostling for space in North Calcutta. So rich in its nonchalance,
                    between the clamour of grandeur and decay. It’s almost spiritual,
                    the neglect of luxury and the casual existence of glamour.
                    It makes Calcutta unforgettable.”
                </p>

                <img
                    src="/icons/animal.png"
                    className='w-14 h-14'
                    alt="animal"
                />
            </div>

        </div>
    )
}

export default Banner2
