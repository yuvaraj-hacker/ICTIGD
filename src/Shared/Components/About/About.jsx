import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import Other from '../Other/Other'

function About() {
  const attendees = [
    "Researchers and Academicians",
    "Government and Policy Makers",
    "Industry Professionals and Startups",
    "NGOs and Development Agencies",
    "Students and Innovators",
  ];

  return (
    <>
      <Other Title="About the Conference" />
      <section className="flex flex-col  md:gap-10 gap-5  max-w-[80rem]  md:py-10 py-5 mx-auto md:px-5 px-3   ">
        <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-center">
          <div className="rounded-xl overflow-hidden">
            <img className="h-64 sm:h-80 w-full object-cover" style={{ clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 60px 100%, 0 calc(100% - 60px))' }} rel="preload" src="/assets/images/aboutus.jpg" alt="Conference Visual" />
          </div>
          <div className=' flex flex-col md:gap-5 gap-3'>
            {/* <h1 className=" text-center font-semibold  lg:text-2xl text-lg">
              About the Conference
            </h1> */}
            <div className="flex flex-col gap-5 ">
              {/* <p className="text-justify md:text-base text-sm leading-7">
                The International Conference on Big Data and Cloud Computing (ICBDCC) serves as a premier global platform for researchers, academicians, industry practitioners, and students to exchange ideas, innovations, and research outcomes in the fields of Big Data, Cloud Computing, and their emerging applications.
              </p> */}
              <p className="text-justify md:text-lg text-sm leading-7">
                The International Conference on Technology Integration for Global Development (ICTIGD) is an interdisciplinary platform aimed at advancing global development through innovative technological solutions. This prestigious event brings together visionaries, researchers, professionals, and academicians from across the globe to collaborate, share knowledge, and explore emerging technologies that can solve real-world challenges and promote sustainable growth.              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="mx-auto text-justify  space-y-4 text-sm md:text-base leading-7">
            {/* <h1 className="   font-semibold  lg:text-2xl text-lg">
              Vision
            </h1> */}
            <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
              Vision
            </h1>
            <p className='leading-7 md:text-lg text-sm'>
              The International Conference on Technology Integration for Global Development aims to foster a global dialogue on how emerging technologies can be purposefully harnessed to bridge development gaps, enhance human welfare, and build a more equitable and sustainable future. As the world faces complex challenges such as climate change, healthcare disparities, digital inequality, and rapid urbanization, this conference serves as a collaborative platform for researchers, policymakers, industry leaders, innovators, and development practitioners to come together and explore technology-driven solutions that deliver real-world impact.
            </p>
          </div>
        </section>
        <section className=" text-left">
          <div className="mx-auto text-justify  space-y-4 text-sm md:text-base leading-7">
            <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
              Objectives
            </h1>
            <ul className='list-disc ml-5 md:text-lg text-sm'>
              <li>To explore the role of emerging technologies in driving socio-economic development.</li>
              <li>To promote collaborative research between academia, industry, and government institutions.</li>
              <li>To highlight successful models of technology-led transformation in sectors such as healthcare, education, agriculture, smart cities, and the environment.</li>
              <li>To provide a platform for young researchers and innovators to present their ideas to a global audience.</li>

            </ul>
          </div>
        </section>
        <section className="  ">
          <h1 className="text-center w-fit mx-auto mb-5 rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
            Who Should Attend
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[80rem] mx-auto  gap-6">
            {attendees.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-md rounded-2xl md:p-6 p-3 hover:shadow-lg transition-all duration-300"
              >
                {/* <div className="text-xl font-semibold text-[#2487DB] mb-2">•</div> */}
                <p className="text-gray-800 md:text-lg text-sm font-medium text-center">{item}</p>
              </div>
            ))}
          </div>
        </section>

      </section>


      <LastSection />

    </>
  )
}

export default About
