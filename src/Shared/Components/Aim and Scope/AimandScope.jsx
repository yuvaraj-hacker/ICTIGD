import React from 'react';
import { Link } from 'react-router-dom';
import LastSection from '../Last/LastSection';
import Other from '../Other/Other';

function AimandScope() {
    return (
        <>
            <Other Title="Scope of the Conference" />
            <section className="flex flex-col  md:gap-10 gap-5  max-w-[80rem]  md:py-10 py-5 mx-auto md:px-5 px-3 ">
                <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-center">
                    <div className='flex flex-col md:gap-5 gap-3'>
                        {/* <h1 className="text-center font-semibold text-[#269C52] lg:text-2xl text-lg">
                                Scope of the Conference
                        </h1> */}
                        <div className="flex flex-col gap-5">
                            <p className="text-justify md:text-lg text-sm leading-7">
                                The scope of ICTIGD  encompasses a wide range of disciplines and technologies with a common goal — leveraging innovation for sustainable and inclusive global development. The conference serves as a forum for the exchange of ideas, breakthroughs, and applications that demonstrate how emerging technologies can address critical challenges in diverse sectors.                            </p>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <img className="h-64 sm:h-80 w-full object-cover" rel="preload" src="/assets/images/17690.jpg" style={{ clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 60px 100%, 0 calc(100% - 60px))' }} alt="Conference Visual" />
                    </div>
                </section>
                <section className="">
                    <div className="mx-auto text-justify text-gray-700 space-y-4 text-sm md:text-base leading-7">
                        <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                            Vision
                        </h1>
                        <div className='grid md:grid-cols-2 gap-7'>

                            <div className='flex flex-col gap-3 justify-center'>
                                <h2 className='md:text-xl font-semibold bg-gradient-to-r from-[#2487DB] to-[#014BBD]  text-white  md:p-2 p-3 rounded-md'>Artificial Intelligence and Machine Learning for Development </h2>
                                <ul className='list-disc ml-8 md:text-lg text-sm'>
                                    <li> <i class="fi fi-sc-wifi-1"></i>  Predictive analytics for healthcare, education, agriculture  </li>
                                    <li>AI for decision-making in policy and governance</li>
                                    <li>Ethics and fairness in AI for underserved populations</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='md:text-xl font-semibold bg-gradient-to-r from-[#2487DB] to-[#014BBD]  text-white  md:p-2 p-3 rounded-md'>Smart Cities and Urban Transformation </h2>
                                <ul className='list-disc ml-8 md:text-lg text-sm'>
                                    <li> Intelligent transportation and mobility
                                    </li>
                                    <li>Urban sustainability through IoT and automation</li>
                                    <li>Data-driven governance and smart infrastructure</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='md:text-xl font-semibold bg-gradient-to-r from-[#2487DB] to-[#014BBD]  text-white  md:p-2 p-3 rounded-md'>Sustainable and Green Technologies </h2>
                                <ul className='list-disc ml-8 md:text-lg text-sm'>
                                    <li>Renewable energy systems and smart grids
                                    </li>
                                    <li>Circular economy models and eco-innovation</li>
                                    <li>Low-carbon solutions and climate resilience tools</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='md:text-xl font-semibold bg-gradient-to-r from-[#2487DB] to-[#014BBD]  text-white  md:p-2 p-3 rounded-md'>Internet of Things (IoT) and Embedded Systems </h2>
                                <ul className='list-disc ml-8 md:text-lg text-sm'>
                                    <li>IoT for agriculture, water management, and disaster response
                                    </li>
                                    <li>Smart devices in healthcare and home automation</li>
                                    <li>Sensor networks for real-time monitoring
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
            <LastSection />
        </>
    );
}

export default AimandScope;
