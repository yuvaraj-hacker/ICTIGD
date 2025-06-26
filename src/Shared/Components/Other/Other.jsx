import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Other({ Title }) {
    return (
        <>
            <section className="lg:px-4">
                <section className="relative lg:h-[30vh] w-full overflow-hidden clip  "  >
                    <div className=" h-full w-full bg-[url('public/assets/images/Conference.jpg')] bg-center bg-cover object-center z-0 flex items-center lg:py-0 py-16 justify-center">
                        <div className=" ">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#2487DB] to-[#014BBD] opacity-50 z-0 "></div>
                        </div>
                        <p className=" md:px-0 px-3 relative md:text-4xl text-2xl text-white md:text-left text-center  font-bold">{Title}</p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Other
