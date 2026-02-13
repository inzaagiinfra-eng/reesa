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
        <div className=''>
           
            {ban.map((item, index) => (
                <div key={item.id} className='relative md:my-16 max-md:my-6 min-h-[60vh] md:min-h-screen overflow-hidden'>
                    <img  className='w-full  absolute md:h-full max-md:h-96  object-cover top-0' src={item.img}></img>
                    <div className='flex  flex-col justify-between text-center  w-full absolute  z-10  bottom-16 items-center'>

                        <div className=' lg:mt-6 max-lg:mt-2 lg:space-y-12 max-lg:space-y-4 flex justify-center flex-col items-center tracking-widest mb-6  text-center  font-semibold  '>
                            <h1 className='text-white lg:text-4xl max-lg:text-2xl'>{item.title}</h1>
                            <Link to={item.link} className='text-white border border-white  max-md:py-2 max-md:px-6 md:py-3 md:px-10 lg:text-lg max-lg:text-sm'>EXPLORE</Link>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex flex-col justify-center items-center lg:gap-8 lg:py-4 px-2 text-center lg:px-[30vw]'>
                <p>“Crowded narrow lanes with balconies jutting out of beautiful old mansions and homes, jostling for space in North Calcutta. So rich in its nonchalance, between the clamour of grandeur and decay. It’s almost spiritual, the neglect of luxury and the casual existence of glamour. It makes Calcutta unforgettable.”</p>
                <img src="/icons/animal.png" className='w-14 h-14' alt="animal"/>

            </div>
            
        </div>
    )
}

export default Banner2
