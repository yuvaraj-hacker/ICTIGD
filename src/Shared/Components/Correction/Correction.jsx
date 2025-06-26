import React from 'react'

function Correction() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className='p-0.5 border border-[#3e8000]'>
                                <h1 className="bg-primary text-white text-center merry shadow md:p-3 p-2 font-semibold  lg:text-2xl   text-lg ">
                                    Journal Correction Policy
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                Our journal maintains strict standards for publishing corrections to ensure the integrity and accuracy of scientific literature. We carefully evaluate each correction request to maintain the highest quality of published research while ensuring transparency in scientific communication.                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#719465]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Version of Record (VoR)
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">The paper, revised and accepted following peer review, in its final form, including the abstract, text, references, and bibliography</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">All accompanying tables, illustrations, and data</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Any supplemental material provided with the paper</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#719465]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Correction Criteria
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p  >Corrections are published only for significant errors affecting factual information</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p  >Minor corrections (spelling, typographical, grammatical errors) will not be published</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p  >Corrections are published as errata or corrigenda for serious errors affecting scientific accuracy</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p  >Changes that don't materially affect the article or reader understanding are not published</p>
                                </div>

                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#719465]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Correction Process
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Authors must submit a letter to Editor-in-Chief stating reason and justification for changes</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">All changes must be clearly detailed and signed by all authors</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Editor-in-Chief consults with original Editors and Reviewers</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Refutations undergo peer review, typically with original referees</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Refutations may be published in Communications Arising or Correspondence sections</p>
                                </div>

                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Correction

