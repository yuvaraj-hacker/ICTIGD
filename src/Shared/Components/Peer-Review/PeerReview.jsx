import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import Other from '../Other/Other'

function PeerReview() {
    return (
        <>
            <Other Title="Conference Tracks" />
            <section className="flex flex-col md:gap-5 gap-3 max-w-[80rem] py-5 md:py-10  mx-auto 2xl:px-0 px-3">
                {/* <h2 className="md:text-2xl text-xl font-bold  md:mb-2">📌 Why These Tracks Matter</h2> */}
                <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                    📌 Why These Tracks Matter
                </h1>
                <p className="md:text-lg text-sm   leading-relaxed">
                    In an increasingly interconnected world, technological innovation is more than just advancement — it’s a catalyst for
                    <span className="font-semibold text-blue-700"> global equity, sustainability, and progress</span>.
                    These conference tracks are carefully curated to cover the most critical sectors where technology can drive
                    <span className="font-semibold text-blue-700"> inclusive and impactful change</span>.
                    Whether you're a researcher, policymaker, entrepreneur, or student, these tracks offer you a platform to
                    <span className="italic">contribute, learn, and collaborate</span>.
                </p>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6   max-w-[80rem] mx-auto">
                    {[
                        {
                            title: "AI and Data Analytics for Global Impact",
                            desc: "Harnessing machine learning and intelligent data processing to solve challenges in healthcare, education, agriculture, and public services."
                        },
                        {
                            title: "Cloud-Based Intelligence for Scalable Development",
                            desc: "Deploying smart algorithms in cloud ecosystems to enable scalable, cost-effective solutions for digital transformation in developing regions."
                        },
                        {
                            title: "IoT and Smart Sensing for Sustainable Communities",
                            desc: "Designing and integrating intelligent IoT systems to enhance real-time monitoring, urban management, and sustainable resource usage."
                        },
                        {
                            title: "Predictive Analytics for Social and Economic Planning",
                            desc: "Applying forecasting models to anticipate trends, optimize services, and support informed decision-making in dynamic environments."
                        },
                        {
                            title: "Blockchain for Trust and Transparency in Development",
                            desc: "Using decentralized technologies to enhance trust, accountability, and security in governance, identity systems, and aid distribution."
                        },
                        {
                            title: "Edge and Fog Intelligence for Real-Time Development Solutions",
                            desc: "Leveraging edge and fog computing to power low-latency, localized applications in sectors like healthcare, agriculture, and mobility."
                        },
                        {
                            title: "Ethical and Inclusive Artificial Intelligence",
                            desc: "Ensuring fairness, privacy, and accountability in AI systems deployed for public benefit and development contexts."
                        },
                        {
                            title: "Deep Learning for Human-Centered Applications",
                            desc: "Utilizing neural networks to address complex problems in image recognition, natural language processing, and behavioral analysis."
                        },
                        {
                            title: "Big Data Infrastructure for Inclusive Growth",
                            desc: "Building resilient and intelligent data systems to manage large-scale information streams for research, governance, and innovation."
                        },
                        {
                            title: "Serverless Computing for Agile Development Solutions",
                            desc: "Implementing FaaS and microservice-based architectures to rapidly build and deploy development-focused digital tools."
                        },
                        {
                            title: "Smart Cities and Intelligent Infrastructure",
                            desc: "Creating responsive urban ecosystems powered by data and automation to improve quality of life and sustainability in cities."
                        },
                        {
                            title: "Green Computing for Sustainable Development",
                            desc: "Innovating energy-efficient computing methods and eco-conscious design to support climate goals and responsible innovation."
                        }
                    ].map((track, index) => (
                        <>
                            <div key={index} className="group flex items-start gap-4 bg-white rounded-2xl border border-[#2487DB]  shadow-md md:p-6 p-4   hover:shadow-lg transition duration-300"  >
                                <div className="flex-1">
                                    <h3 className="text-gray-800 font-bold md:text-lg text-base  transition-colors">
                                        {track.title}
                                    </h3>
                                    <div className='flex items-center gap-3'>
                                        {/* <div className="bg-[#2487DB] text-[#269C52] skew-6 p-2">
                                        </div> */}
                                        <p className="text-gray-600 text-sm md:text-base mt-1">
                                            {track.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
            <LastSection />

        </>
    )
}

export default PeerReview

