import React from 'react'
import { Link } from 'react-router-dom'

const ban = [
    {
        id: 1,
        title: "EVENING COLLECTION",
        link: "/",
        img: "/banners/banner1.webp",
    },
    {
        id: 2,
        title: "AUTUMN/WINTER 2025",
        link: "/",
        img: "/banners/banner2.webp",
    },
    {
        id: 3,
        title: "HERITAGE MENSWEAR 2025-26",
        link: "/",
        img: "/banners/banner3.webp",
    },
]

const Banner = () => {
    return (
        <div>
            <div className="flex justify-center my-4 md:my-12">
                <p className="text-center text-sm md:text-xl">
                    “For culture to be relevant, it needs to be dynamic.”
                </p>
            </div>
            {ban.map((item) => (
                <div
                    key={item.id}
                    className="relative w-full  my-6 md:my-16 min-h-[60vh] md:min-h-screen overflow-hidden"
                >
                    <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />


                    <div className="absolute inset-0 flex items-end justify-center pb-10 md:pb-20 z-10">
                        <div className="flex flex-col items-center gap-4 md:gap-8 text-center tracking-widest font-semibold">
                            <h1 className="text-white text-xl md:text-4xl">
                                {item.title}
                            </h1>
                            <Link
                                to={item.link}
                                className="text-white border border-white px-6 py-2 md:px-10 md:py-3 text-sm md:text-lg"
                            >
                                EXPLORE
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Banner
