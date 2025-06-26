import React from 'react'

function Guideline() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className='p-0.5 border border-[#3e8000]'>
                                <h1 className="bg-primary text-white text-center merry shadow md:p-3 p-2 font-semibold  lg:text-2xl   text-lg ">
                                    Author Guidelines
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Conference on Intelligent Systems and Computational Methods welcomes high-quality, original research contributions in the fields of robotics, automation, artificial intelligence, and related disciplines. Authors must adhere to the following guidelines when preparing and submitting their manuscripts.                            </p>

                        </section>

                        <section className="flex flex-col gap-4">
                            <div className='p-0.5 border border-[#3e8000]'>
                                <h1 className="bg-primary text-white text-center merry shadow md:p-3 p-2 font-semibold  lg:text-2xl   text-lg ">
                                    Publishing Requirements
                                </h1>
                            </div>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">  Manuscripts must strictly follow the IJATRA template and adhere to proper formatting guidelines</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""> Abstracts should be between 200–1000 characters, structured clearly with concise objectives, methodology, and findings.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""> Include 3 to 8 keywords to enhance indexing and searchability.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""> References must comply with the IEEE/APA citation style, ensuring consistency and accuracy.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">  Maintain proper grammar, spelling, and formal academic English throughout the manuscript.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""> All figures and tables must have descriptive captions and be appropriately referenced in the text.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""> Ethical approval statements must be provided where applicable, particularly for studies involving human or animal subjects.</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-4  md:text-base text-sm">
                            <div className='p-0.5 border border-[#3e8000]'>
                                <h1 className="bg-primary text-white text-center merry shadow md:p-3 p-2 font-semibold  lg:text-2xl   text-lg ">
                                    Submission Process
                                </h1>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""><span className='text-[#3e8000] font-semibold'>Initial Manuscript Screening  </span> – The editorial team evaluates submissions for scope, quality, and adherence to guidelines.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""><span className='text-[#3e8000] font-semibold'>Double-Blind Peer Review </span> – Manuscripts are reviewed by at least two independent experts to ensure scholarly integrity.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""><span className='text-[#3e8000] font-semibold'>Author Revision Period</span> – Authors receive reviewer feedback and are provided with clear deadlines for revisions.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""><span className='text-[#3e8000] font-semibold'>Final Editorial Decision</span> –  The editorial board makes the final decision based on reviewer recommendations.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""><span className='text-[#3e8000] font-semibold'>Publication & Licensing </span> – Articles are published under a Creative Commons license for maximum visibility.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""><span className='text-[#3e8000] font-semibold'>DOI Assignment  </span> –  Each article is assigned a unique DOI for permanent identification and citation.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""><span className='text-[#3e8000] font-semibold'>Digital Archiving  </span> – Published research is digitally archived to ensure long-term availability and accessibility.</p>
                                </div>
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Guideline
