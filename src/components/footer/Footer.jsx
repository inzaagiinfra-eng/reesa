import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const WHATSNEW = [
    {
        id: 1,
        title: "Evening Collection",
        link: "/"
    },
    {
        id: 2,
        title: "Heritage Menswear 2025-26",
        link: "/"
    },
    {
        id: 3,
        title: "Autumn/Winter 2025",
        link: "/"
    },
    {
        id: 4,
        title: "Opium Revisited",
        link: "/"
    },
    {
        id: 5,
        title: "Sabyasachi X Tata Cliq",
        link: "/"
    },
    {
        id: 6,
        title: "The New World",
        link: "/"
    },
    {
        id: 7,
        title: "The New India",
        link: "/"
    },
    {
        id: 8,
        title: "A Calcutta Summer Feast",
        link: "/"
    },
    {
        id: 9,
        title: "25 Years Of Sabyasachi",
        link: "/"
    },
    {
        id: 10,
        title: "The Curiosity, Art & Antiquity Project",
        link: "/"
    },

]

const WORLDOFSABYASACHI = [
    {
        id: 1,
        title: "History",
        link: "/"
    },
    {
        id: 2,
        title: "Collaborations",
        link: "/"
    },
    {
        id: 3,
        title: "The Sabyasachi Art Foundation",
        link: "/"
    },
    {
        id: 4,
        title: "Social Initiatives",
        link: "/"
    },
    {
        id: 5,
        title: "Craft Preservation",
        link: "/"
    },
    {
        id: 6,
        title: "Art of Retail",
        link: "/"
    },
]

const CUSTOMERCARE = [
    {
        id: 1,
        title: "Contact",
        link: "/contact",
    },
    {
        id: 2,
        title: "Stores",
        link: "/",
    },
]

const SOCIAL = [
    {
        id: 1,
        title: "Instagram",
        link: "/",
    },
    {
        id: 2,
        title: "YouTube",
        link: "/",
    },
    {
        id: 3,
        title: "Facebook",
        link: "/",
    },

]

const CORPORATE = [
    {
        id: 1,
        title: "Privacy Policy",
        link: "/"
    },
    {
        id: 2,
        title: "Terms of Use",
        link: "/"
    },
]




const Footer = () => {
    const [open, setOpen] = useState(null)

    const section = [
        { title: "WHAT'S NEW", data: WHATSNEW },
        { title: "WORLD OF SABYASACHI", data: WORLDOFSABYASACHI },
        { title: "CUSTOMER CARE", data: CUSTOMERCARE },
        { title: "SOCIAL", data: SOCIAL },
        { title: "CORPORATE", data: CORPORATE }
    ]
    return (
        <div className='bg-gray-950 py-6'>
            <div className='max-md:hidden'>

                <div className='app-container flex gap-12  justify-center '>
                    {section.map((sec, idx) => (
                        <div key={idx} className='flex py-10 flex-col'>
                            <h2 className=" text-xl text-gray-600">
                                {sec.title}
                            </h2>

                            <div className="flex flex-col gap-4">

                                {sec.data.map((item, i) => (
                                    <Link className='text-white hover:underline ' to={item.link} key={item.id}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>

                        </div>
                    ))
                    }
                </div>

            </div>
            <div className='md:hidden'>

                <div className='app-container flex flex-col  justify-center '>
                    {section.map((sec, idx) => (
                        <div key={idx} className='flex py-2 flex-col'>
                            <button
                                onClick={() => setOpen(open === idx ? null : idx)}
                                className=" flex justify-between w-full border-b transition-transform text-md text-gray-600">
                                {sec.title}
                                <span>{open === idx ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                            </button>
                            {open === idx && (
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${open === idx ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="flex flex-col gap-4">
                                        {sec.data.map((item, i) => (
                                            <Link className='text-white hover:underline' to={item.link} key={item.id}>
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Footer
