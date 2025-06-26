import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import Other from '../Other/Other'

function Publication() {
    return (
        <>
            <Other Title="Key Dates and Registration Details" />
            <section className="flex flex-col md:gap-10 gap-5   max-w-[80rem] py-5 md:py-10  mx-auto xl:px-0 px-3">
                <div className=''>
                    <div className='flex items-center md:mb-5 mb-3 gap-4  text-center  mx-auto justify-center text-[#014BBD]'>
                        <i class="fi fi-rs-calendar-clock flex items-center text-xl"></i>
                        <h1 className="text-center w-fit   rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                            Key Dates
                        </h1>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-7xl mx-auto">
                        {[
                            {
                                date: "22-07-2025",
                                event: "Full Paper Submission Deadline",
                            },
                            {
                                date: "29-07-2025",
                                event: "Notification of Decision",
                            },
                            {
                                date: "05-08-2025",
                                event: "Deadline for Submitting Revised Full Paper",
                            },
                            {
                                date: "12-08-2025",
                                event: "Notification of Acceptance",
                            },
                            {
                                date: "19-08-2025",
                                event: "Camera-Ready Paper Submission",
                            },
                            {
                                date: "26-08-2025",
                                event: "Last Date for Registration / Payment",
                            },
                        ].map((item, index) => (
                            <div key={index} className="border relative border-[#2487DB] w-full h-full flex items-center rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 bg-white/80 backdrop-blur-sm"  >
                                <section className="  ">
                                    <div className="flex items-center gap-5 z-10 relative  h-full ">
                                        <div className="  text-[#1B1F3B] font-semibold p-5 bg-gradient-to-r from-[#2487DB] to-[#014BBD] rounded-full text-sm md:text-base  whitespace-nowrap">
                                            <i className="fi fi-sr-calendar flex items-center text-white md:text-3xl text-xl"></i>
                                        </div>
                                        <div className="md:text-base text-sm font-medium flex flex-col gap-5">
                                            <p className=" border-2 w-fit p-2 rounded-full md:px-5 px-3 border-[#014BBD]">{item.date}</p>
                                            <p className="md:text-lg "> {item.event}</p>
                                        </div>
                                    </div>
                                    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div> */}
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-3 md:mb-5 mb-3 justify-center text-[#014BBD]'>
                        <i class="fi fi-sr-registration-paper flex items-center text-xl"></i>
                        <h1 className="text-center w-fit   rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                            Registration Details
                        </h1>
                    </div>
                    <div className="max-w-[80rem] mx-auto bg-gradient-to-tr from-[#f0f4ff] to-[#e2ecfc] rounded-2xl shadow-xl p-6">
                        <h2 className="md:text-2xl font-bold  mb-6 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M4 6h16M4 14h16M4 18h16" />
                            </svg>
                            Bank Account Information
                        </h2>

                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-8">
                            {[
                                { label: 'Account Name', value: 'XXXXXXXX' },
                                { label: 'Account Number', value: 'XXXXXXXX' },
                                { label: 'Branch', value: 'XXXXXXXX' },
                                { label: 'IFSC Code', value: 'XXXXXXXX' },
                                { label: 'MICR', value: 'XXXXXXXX' },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl ">
                                    <p className="text-gray-500 text-sm font-medium">{item.label}</p>
                                    <p className="text-gray-900 font-semibold mt-1">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Payment Instructions */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
                            <h3 className="text-xl font-semibold   mb-4 border-b pb-2">
                                Payment Instructions
                            </h3>
                            <ul className="list-inside list-disc space-y-3 text-gray-800 leading-relaxed">
                                <li>
                                    <span className="font-medium">Register only after your article is accepted.</span>
                                </li>
                                <li>
                                    Payment methods: <span className="font-semibold text-blue-800">NEFT / IMPS</span> or <span className="font-semibold text-blue-800">Cash Deposit</span>.
                                </li>
                                <li>
                                    After payment, send <span className="italic">screenshot / reference no. / transaction ID / counter slip</span> with your paper ID.
                                </li>
                                <li>
                                    <span className="font-semibold">At least one author</span> of each accepted paper must register and attend.
                                </li>
                                <li>
                                    Selected abstracts will be published in the conference proceedings with an <span className="font-semibold">ISBN</span>.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>
            <LastSection />

        </>
    )
}

export default Publication

