import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import Other from '../Other/Other'

function    Publication() {
    return (
        <>
            <Other Title="Key Dates" />
            <section className="flex flex-col md:gap-10 gap-5   max-w-[80rem] py-5 md:py-10  mx-auto 2xl:px-0 px-3">
                <div className=''>
                    <div className='flex items-center md:mb-5 mb-3 gap-4  text-center  mx-auto justify-center text-[#014BBD]'>
                        <i class="fi fi-rs-calendar-clock flex items-center text-xl"></i>
                        <h1 className="text-center w-fit   rounded-full p-1 font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                            Important Dates
                        </h1>

                    </div>
                    <p className=" mb-10 text-center">We encourage all participants, authors, and attendees to carefully review and adhere to the key dates associated with the International Conference on Technology Integration for Global Development. These important deadlines include paper submission, acceptance notifications, registration windows, and the final conference schedule. Staying aligned with these dates ensures a smooth and well-coordinated participation experience. We recommend marking your calendars early and completing all necessary steps on or before the stated deadlines to guarantee your involvement in this global event.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-7xl mx-auto">
                        {[
                            {
                                date: "07-06-2025",
                                event: "Full Paper Submission Deadline",
                            },
                            // {
                            //     date: "29-07-2025",
                            //     event: "Notification of Decision",
                            // },
                            // {
                            //     date: "05-08-2025",
                            //     event: "Deadline for Submitting Revised Full Paper",
                            // },
                            {
                                date: "18-06-2025",
                                event: "Notification of Acceptance",
                            },
                            {
                                date: "21-06-2025",
                                event: "Final Paper Submission",
                            },
                            // {
                            //     date: "26-08-2025",
                            //     event: "Last Date for Registration",
                            // },
                        ].map((item, index) => (
                            <div key={index} style={{
                                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                            }} className="  relative   w-full h-full flex items-center   shadow-md p-5 hover:shadow-xl transition duration-300 bg-white/80 backdrop-blur-sm"  >
                                <section className="  ">
                                    <div className="flex items-center gap-5 z-10 relative h-full ">
                                        <div className="  text-[#1B1F3B] font-semibold p-5 bg-gradient-to-r from-[#2487DB] to-[#014BBD] rounded-full text-sm md:text-base  whitespace-nowrap">
                                            <i className="fi fi-sr-calendar flex items-center text-white md:text-3xl text-xl"></i>
                                        </div>
                                        <div className="md:text-base text-sm font-medium flex flex-col gap-5">
                                            <p className=" w-fit p-2 text-white  md:px-5 px-3  bg-gradient-to-r from-[#2487DB] to-[#014BBD]">{item.date}</p>
                                            <p className="md:text-lg "> {item.event}</p>
                                        </div>
                                    </div>
                                    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div> */}
                                </section>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <LastSection />

        </>
    )
}

export default Publication

