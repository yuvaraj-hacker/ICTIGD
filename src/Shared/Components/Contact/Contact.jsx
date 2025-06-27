
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';
import Other from '../Other/Other';

function Contact() {

    const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('message', formData.message);
            const response = await fetch('http://192.168.29.174/iciscm/message_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    message: '',
                });
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
            <Other Title="Contact Us" />
            <section className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5 md:py-10 ">
                <div className="lg:flex md:flex  gap-8 ">
                    <div className="max-w-full w-full ">
                        <div className="lg:max-w-3xl max-w-xl w-full mx-auto ">
                            <div className="  :bg-gray-900 lg:px-20 md:px-5 ">
                                <div className=' text-center mx-auto flex justify-center md:mb-5 mb-3 '>
                                    <h1 className="text-center w-fit mx-auto rounded-full font-semibold p-1 lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                                        Reach Us
                                    </h1>
                                </div>
                                <div className="mx-auto max-w-screen-md relative">
                                    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div> */}
                                    <form onSubmit={handleSubmit} className="w-full grid lg:grid-cols-2 gap-5 bg-gradient-to-tr shadow-xl   from-[#f0f4ff] to-[#e2ecfc]   p-5 "
                                        style={{
                                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                        }} ngNativeValidate>
                                        <div className="">
                                            <label for="email" className="block mb-2 text-sm mt-4   ">
                                                Name
                                            </label>
                                            <input type="text" name="name" id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                ngModel className="shadow-sm   border text-sm    border-gray-300  focus:outline-none bg-white text-black focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  mt-4" placeholder="Enter Your Name" required />
                                        </div>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm mt-4  ">
                                                Email
                                            </label>
                                            <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} ngModel className="shadow-sm   focus:outline-none border bg-white text-black   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                placeholder="name@gmail.com" required />
                                        </div>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm       mt-4 "  >
                                                Contact Number
                                            </label>
                                            <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} ngModel className="shadow-sm  focus:outline-none bg-white text-black  border   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                placeholder="Enter Your Mobile Number" required />
                                        </div>
                                        <div className="lg:col-span-2 mt-4">
                                            <label for="message" className="block mb-2 text-sm   ">
                                                Your Message
                                            </label>
                                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} ngModel rows="4" className="block p-2.5 w-full text-sm shadow-sm border bg-white text-black  focus:outline-none   border-gray-300   focus:ring-primary-500 focus:border-primary-500   mt-4 " placeholder="Leave a Message..." ></textarea>
                                        </div>
                                        <div className="text-center md:mt-0 mt-5  lg:col-span-2">
                                            <button type="submit" className="py-3 px-6 text-sm   text-center   shadow-lg  hover:shadow-xl  bg-white hover:bg-[#f0f4ff] duration-300  text-[#014BBD]  cursor-pointer  font-semibold   " >
                                                {status === 'Sending...' ? 'Submitting...' : 'Send message'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contct />
        </>
    )
}

export default Contact

