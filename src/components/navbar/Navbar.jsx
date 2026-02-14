import React from 'react'

const Navbar = () => {
    return (
        <div className='relative h-screen overflow-hidden'>

            <video
                autoPlay
                loop
                playsInline
                muted
                className='absolute inset-0 w-full h-full object-cover'
                src="/video/hero.mp4"
            />

            <div className='absolute inset-0 flex flex-col justify-between items-center z-10 py-6'>

                <h1 className='text-white text-2xl lg:text-6xl font-semibold'>
                    REESA
                </h1>

                <div className='text-center font-semibold tracking-widest space-y-4 lg:space-y-10 pb-6'>
                    <h1 className='text-white text-2xl lg:text-5xl'>
                        25 YEARS SABYASACHI
                    </h1>

                    <button className='text-white border border-white py-2 px-6 lg:py-4 lg:px-14 text-sm lg:text-2xl'>
                        WATCH NOW
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
