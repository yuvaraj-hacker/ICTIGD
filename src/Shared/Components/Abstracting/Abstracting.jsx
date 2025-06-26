
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';
import Other from '../Other/Other';

function Abstracting() {
    const [formData, setFormData] = useState({ paperTitle: "", name: "", email: "", number: "", institution: "", paper: null, Paper_Track: "" });
    const [uploadFile, setUploadFile] = useState(null);
    const [status, setStatus] = useState('');

    const handleRemoveFile = () => {
        setUploadFile(null);
        document.getElementById("upload-paper").value = ""; // Clear input
    };

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            const file = e.target.files[0];
            const maxSize = 10 * 1024 * 1024; // 10 MB in bytes
            if (file && file.size > maxSize) {
                alert("File size exceeds 10 MB. Please upload a smaller file.");
                e.target.value = ""; // Clear the file input
                return;
            }
            setFormData({ ...formData, [e.target.name]: file });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('paperTitle', formData.paperTitle);
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('institution', formData.institution);
            formDataToSend.append('Paper_Track', formData.Paper_Track);
            if (formData.paper) {
                formDataToSend.append('paper', formData.paper);
            }
            const response = await fetch('http://192.168.29.174/iciscm/send_mail.php', { method: 'POST', body: formDataToSend, });
            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    paperTitle: '',
                    name: '',
                    email: '',
                    number: '',
                    institution: '',
                    paper: null,
                    Paper_Track: ''
                });
                document.getElementById('paper').value = '';
                toast.success("Paper submitted successfully!");
                console.log("success")
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };
    return (
        <>
            <Other Title="Paper Submission" />
            <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-5 md:py-10 ">
                <div className="lg:flex md:flex  gap-8">
                    <div className="max-w-[90rem] mx-auto w-full">
                        <div className='md:mb-5 mb-3 flex justify-center items-center gap-3'>
                            <i class="fi fi-sr-document flex items-center text-xl  text-[#014BBD] "></i>
                            <h1 className="text-center w-fit  rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                                New Paper Submission
                            </h1>
                        </div>
                        <div className='grid lg:grid-cols-2 md:gap-4  gap-4 '>
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto  ">
                                <div className="bg-white md:p-5 p-3 ">
                                    <h3 className="text-lg md:text-xl font-semibold   mb-3">Submission Guidelines</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                        <li>Original and unpublished research papers only</li>
                                        <li>Submit in PDF or DOCX format</li>
                                        <li>Maximum file size: 10 MB</li>
                                        <li>Paper should follow the IEEE format</li>
                                        <li>Include author details on the first page</li>
                                        <li>Ensure all author details are correctly filled</li>
                                        <li>Upload a PDF or Word document of the paper</li>
                                        <li>Only one submission per author will be accepted</li>
                                        <li>Follow the formatting guidelines provided</li>
                                    </ul>
                                </div>
                                <div className="bg-white md:p-5 p-3 ">
                                    <h3 className="text-lg md:text-xl font-semibold   mb-3">Important Notes</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                        <li>Verify the accuracy of the contact details before submission.</li>
                                        <li>The first author will be contacted for further correspondence.</li>
                                        <li>Submissions must be made before the deadline date.</li>
                                        <li>Late submissions may not be considered for review.</li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
                                {/* Submission Guidelines */}
                                <div className=" ">
                                    <h3 className="md:text-xl font-semibold   mb-4 flex items-center gap-2   bg-gradient-to-r from-[#2487DB] to-[#014BBD]  text-white  md:p-2 p-3 rounded-md">
                                        {/* <i className="fi fi-bs-check flex items-center"></i> */}
                                        Submission Guidelines :
                                    </h3>
                                    <ul className="space-y-3 text-base text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Original and unpublished research papers only
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Submit in PDF or DOCX format
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Maximum file size: 10 MB
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Paper should follow the IEEE format
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Include author details on the first page
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Ensure all author details are correctly filled
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Upload a PDF or Word document of the paper
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Only one submission per author will be accepted
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Follow the formatting guidelines provided
                                        </li>
                                    </ul>
                                </div>
                                {/* Important Notes */}
                                <div className="">
                                    <h3 className="mb-4 flex items-center gap-2 md:text-xl font-semibold bg-gradient-to-r from-[#2487DB] to-[#014BBD]  text-white  md:p-2 p-3 rounded-md">
                                        {/* <i className="fi fi-ts-octagon-exclamation flex items-center"></i> */}
                                        Important Notes :
                                    </h3>
                                    <ul className="space-y-3 text-base text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Verify the accuracy of the contact details before submission.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> The first author will be contacted for further correspondence.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Submissions must be made before the deadline date.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Late submissions may not be considered for review.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <section className=''>
                                <div className="  w-full mx-auto col-span-2 ">
                                    <div className=" :bg-gray-900   ">
                                        <div className=" mx-auto max-w-screen-xl  bg-gradient-to-tr shadow-xl   from-[#f0f4ff] to-[#e2ecfc]  md:p-6 border border-gray-200  rounded-xl      p-3 ">
                                            <form className="w-full   grid lg:grid-cols-2 grid-cols-1 md:gap-5" ngNativeValidate onSubmit={handleSubmit}>
                                                <div className=' '>
                                                    <label for="paperTitle" className="block mb-2 text-sm text-[#1B1F3B mt-4 ">
                                                        Paper Title
                                                    </label>
                                                    <input type="text" ngModel id="paperTitle" name="paperTitle" value={formData.paperTitle} onChange={handleChange} className="shadow-sm bg-white    text-black       border text-sm  rounded-md border-gray-200  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4" placeholder="Enter the Paper Title" required />
                                                </div>
                                                <div>
                                                    <label for="name" className="block mb-2 text-sm text-[#1B1F3B] mt-4">
                                                        Name
                                                    </label>
                                                    <input type="text" name="name" id="name" ngModel value={formData.name} onChange={handleChange} className="shadow-sm bg-white   border    rounded-md border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4        "
                                                        placeholder="Enter Your Name" required />
                                                </div>
                                                <div>
                                                    <label for="email" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4  ">
                                                        Email
                                                    </label>
                                                    <input type="email" name="email" id="email" value={formData.email} ngModel onChange={handleChange} className="shadow-sm bg-white   border   rounded-md border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                        placeholder="name@gmail.com" required />
                                                </div>
                                                <div>
                                                    <label for="number" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 "  >
                                                        Contact Number
                                                    </label>
                                                    <input type="text" name="number" id="number" value={formData.number} ngModel onChange={handleChange} className="shadow-sm bg-white    border    rounded-md border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                        placeholder="Enter Your Mobile Number" required
                                                    />
                                                </div>
                                                <div>
                                                    <label for="institution" className="block mb-2 text-sm   text-[#1B1F3B] mt-4 " >
                                                        Institution Name
                                                    </label>
                                                    <input type="text" name="institution" id="institution" value={formData.institution} ngModel onChange={handleChange} className="shadow-sm  bg-white    rounded-md border-gray-200 border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-4" placeholder="Enter Your Institute" required />
                                                </div>
                                                <div>
                                                    <label for="institution" className="block mb-2 text-sm text-[#1B1F3B] mt-4 " >
                                                        Paper Track
                                                    </label>
                                                    <select name="Paper_Track" id="Paper_Track" value={formData.Paper_Track || ""}
                                                        onChange={handleChange}
                                                        required
                                                        className="shadow-sm bg-white border rounded-md border-gray-200 p-2.5 text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2 mt-4"                                                >
                                                        <option value="">Select Track</option>
                                                        <option value="TechForDevelopment">Technology for Sustainable Development</option>
                                                        <option value="SmartInfrastructure">Smart Infrastructure and Urban Innovation</option>
                                                        <option value="AI4Good">Artificial Intelligence for Social Impact</option>
                                                        <option value="DigitalHealth">Digital Health and Telemedicine</option>
                                                        <option value="EdTech">Technology in Education and Learning</option>
                                                        <option value="GreenTech">Green Technologies and Renewable Energy</option>
                                                        <option value="IoTandSensors">IoT and Remote Sensing for Development</option>
                                                        <option value="Data4Development">Big Data and Data-Driven Governance</option>
                                                        <option value="CyberPolicy">Cybersecurity, Ethics, and Digital Policy</option>
                                                        <option value="Automation4Industry">Automation, Robotics, and Industry 4.0</option>
                                                        <option value="BlockchainTransparency">Blockchain for Transparency and Aid Management</option>
                                                        <option value="AIinAgriculture">AI and Smart Technologies in Agriculture</option>
                                                        <option value="ClimateTech">Climate Tech and Environmental Monitoring</option>
                                                        <option value="SmartCommunities">Smart Villages and Connected Communities</option>

                                                    </select>
                                                </div>
                                                <div className="md:col-span-2 mt-5">
                                                    <label className="block mb-2 text-sm text-[#1B1F3B]">Upload Paper</label>
                                                    <input type="file" id="paper" name="paper" onChange={handleChange} accept=".pdf,.doc,.docx" required className="w-full p-2   border text-sm  rounded-md border-gray-200 ring-1 ring-transparent bg-white focus:ring-[#0B4F8E] focus:outline-none" />
                                                    <p className=" text-xs mt-3">* Maximum File Size: 10 MB</p>
                                                </div>
                                                {uploadFile && (
                                                    <div className="mt-4 bg-white p-3 rounded shadow flex justify-between items-center">
                                                        <div className="text-sm text-gray-800 truncate w-full pr-4">{uploadFile.name}</div>
                                                        <button onClick={handleRemoveFile} className="text-red-500 hover:text-red-700 transition cursor-pointer" title="Remove file"   >
                                                            ✕
                                                        </button>
                                                    </div>
                                                )}
                                                <div className="text-center mx-auto mt-5  md:col-span-2">
                                                    <button type="submit" disabled={status === 'Sending...'}
                                                        className="py-3 px-5 text-sm  bg-primary-blue-color  text-center    shadow-lg  hover:shadow-xl bg-white cursor-pointer font-semibold hover:text-primary-blue-color rounded-full     text-[#014BBD]   bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300    " >
                                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Paper'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Contct />
        </>
    )
}

export default Abstracting

