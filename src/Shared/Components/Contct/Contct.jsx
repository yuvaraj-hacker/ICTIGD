import React from 'react'

function Contct() {
    return (
        <>
            <section className='px-3'>
                <section className="w-full max-w-[80rem] py-7 md:py-10 mx-auto  bg-cover flex justify-center items-center lg:mb-10 mb-5  bg-gradient-to-r from-[#2487DB] to-[#014BBD]   p-5 md:p-10" style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}>
                    <div className=" md:mx-auto mx-0 md:px-10 px-5 ">
                        <section className=" flex flex-col gap-10 ">
                            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:gap-10">
                                <div className="text-center flex  md:flex-row flex-col items-center md:gap-4 gap-2">
                                    <div className=" px-4 py-4 bg-[#0000ff]  w-fit rounded-full  ">
                                        <i className="fi fi-rs-land-layer-location text-white flex items-center text-2xl md:text-2xl " />
                                    </div>
                                    <div className="md:text-lg text-sm text-white">
                                        <p>International Convention Center</p>
                                        <p>Chennai, India</p>
                                    </div>
                                </div>
                                <div className="text-center flex md:flex-row flex-col  items-center md:gap-4 gap-2 mx-auto">
                                    <div className=" px-4 py-4 bg-[#097a3e] w-fit rounded-full ">
                                        <i className="fi fi-rr-clock text-white flex items-center text-2xl md:text-2xl " />
                                    </div>
                                    <div className="md:text-lg text-sm text-white">
                                        <p>September 26-27, 2025</p>
                                        <p>9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                                <div className="text-center flex  md:flex-row flex-col  items-center md:gap-4 gap-2 mx-auto">
                                    <div className=" px-4 py-4 bg-[#1b2150] w-fit rounded-full ">
                                        <i className="fi fi-ss-envelope text-white flex items-center text-2xl md:text-2xl "></i>
                                    </div>
                                    <div className="md:text-lg text-sm text-white">
                                        <p>info.ictigd@gmail.com</p>
                                        <p>Chennai, India</p>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Contct
