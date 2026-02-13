import React from 'react'

const Navbar = () => {
    return (
        <div className=''>
            <div className='relative  h-screen overflow-hidden'>
                <video autoPlay loop playsInline muted className='w-full  absolute md:h-full max-md:h-[160vw]  object-cover top-0' src="/video/hero.mp4"></video>
                <div className='flex  flex-col justify-between  absolute inset-0 z-10  items-center'>
                    <h1 className='lg:text-6xl lg:mt-6 max-lg:mt-2  text-center  font-semibold text-white max-lg:text-2xl'>
                        REESA
                    </h1>
                    <div className=' lg:mt-6 max-lg:mt-2 lg:space-y-10  max-lg:space-y-4 tracking-widest mb-6  text-center  font-semibold  '>
                        <h1 className='text-white lg:text-5xl max-lg:text-2xl'>25 YEARS SABYASACHI</h1>
                        <button className='text-white border border-white max-md:py-2 max-md:px-6 md:py-4 md:px-14 lg:text-2xl'>WATCH NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
