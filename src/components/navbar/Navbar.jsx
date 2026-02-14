import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const nav = [
    { id: 1, title: "WHAT'S NEW", link: "/" },
    { id: 2, title: "HIGH JEWELLERY", link: "/high-jewellery" },
    { id: 3, title: "FINE JEWELLERY", link: "/fine-jewellery" },
    { id: 4, title: "WOMENSWEAR", link: "/womenswear" },
    { id: 5, title: "MENSWEAR", link: "/menswear" },
    { id: 6, title: "WEDDINGS", link: "/weddings" },
    { id: 7, title: "ACCESSORIES", link: "/accessories" },
    { id: 8, title: "WORLD OF SABYASACHI", link: "/world" },
]

const Navbar = () => {
    const location = useLocation()

    const isHome = location.pathname === "/"

    return (
        <div className={`relative ${isHome ? "h-screen overflow-hidden" : ""}`}>

            {/* ✅ Video sirf home page pe */}
            {isHome && (
                <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    className='absolute inset-0 w-full h-full object-cover'
                    src="/video/hero.mp4"
                />
            )}

            <div className={`absolute inset-0 flex flex-col justify-between items-center z-10 py-6 
                ${isHome ? "text-white" : "bg-white text-black relative"}
            `}>

                <div className='flex flex-col justify-center gap-4 items-center'>
                    <Link to="/" className='text-2xl lg:text-6xl font-semibold'>
                        REESA
                    </Link>

                    <div className='flex gap-4 lg:text-md max-lg:text-lg'>
                        {nav.map((item) => (
                            <Link key={item.id} to={item.link}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {isHome && (
                    <div className='text-center font-semibold tracking-widest space-y-4 lg:space-y-10 pb-6'>
                        <h1 className='text-2xl lg:text-5xl'>
                            25 YEARS SABYASACHI
                        </h1>

                        <button className='border border-white py-2 px-6 lg:py-4 lg:px-14 text-sm lg:text-2xl'>
                            WATCH NOW
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
