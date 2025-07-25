import { useState } from "react";
import { Link } from "react-router-dom";
import KeyDates from "./KeyDates";
import LastSection from "../Last/LastSection";
import Invitees from "./Invitees";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";

export const Home = () => {
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
      const response = await fetch('http://192.168.29.174/my-react-app/message_mail.php', {
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

  const invitees = [
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },

  ];

  const date = [
    { Dates: '07-06-2025', Title: 'Full Paper Submission Deadline' },
    // { Dates: '29-07-2025', Title: 'Notification of Decision' },
    // { Dates: '05-08-2025', Title: 'Deadline for Submitting Revised Full Paper' },
    { Dates: '18-06-2025', Title: 'Notification of Acceptance' },
    { Dates: '21-06-2025', Title: 'Final Paper Submission' },
    // { Dates: '26-08-2025', Title: 'Last Date for Registration' },
  ];

  return (
    <>
      <section className="lg:px-3">
        <section className="relative lg:h-[70vh] w-full overflow-hidden clip  "  >
          <div className=" h-full w-full bg-[url('/assets/images/Conference.jpg')] bg-cover object-center z-0 flex items-center justify-center ">
            <div className="">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#2487DB] to-[#014BBD] opacity-50 z-0 "></div>
            </div>
            <div className="relative z-10 lg:py-0 py-10  items-center flex flex-col lg:gap-7 gap-5">
              <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-[80rem] mx-auto md:gap-10 gap-5 items-center md:px-8">
                <div className="relative">
                  <div className="flex  justify-center items-center lg:px-0 px-2">
                    <img src="/assets/images/herosec.jpg" alt="Conference" rel="preload" className=" z-30 lg:w-full w-96 clips" />
                  </div>
                  <div className="mx-auto lg:w-full w-96  border-2 border-[#014BBD] 2xl:block hidden  h-full absolute bg-white -top-1 -left-1 z-20 ">
                  </div>
                  <div className="mx-auto lg:w-full w-96  border-2 border-[#014BBD]  2xl:block hidden h-full absolute bg-white -top-2 -left-2 z-10 ">
                  </div>
                  <div className="mx-auto lg:w-full w-96  border-2 border-[#014BBD]  2xl:block hidden  h-full absolute bg-white -top-3 -left-3 ">
                  </div>
                </div>
                <div className="lg:ml-auto mx-auto flex flex-col gap-6">
                  <h1 className="text-3xl 2xl:text-5xl lg:text-4xl font-bold leading-snug  md:text-left text-center text-white">
                    International Conference on Technology Integration for Global Development
                  </h1>
                  <div className=" md:mx-0 mx-auto">
                    <Link to="/paper-submission">
                      <button className="  bg-white hover:bg-[#f0f4ff] duration-300 md:text-base text-sm  font-semibold  text-[#014BBD] px-6 py-3   cursor-pointer   ">
                        Register Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="  max-w-[110rem] mx-auto z-10 text-black bg-white md:p-4 p-2 border-y-4 border-[#014BBD] overflow-hidden ">
                <Marquee pauseOnHover>
                  <p className="bg-gradient-to-r  overflow-hidden from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent font-bold md:text-xl"> TECH INTEGRATION 2025 <span className="animate-spin inline-block text-[#014BBD]"> ✦ </span> GLOBAL DEVELOPMENT SUMMIT <span className="animate-spin inline-block text-[#014BBD]"> ✦ </span> ICT FOR GLOBAL CHANGE <span className="animate-spin inline-block text-[#014BBD]"> ✦ </span> INTERNATIONAL TECH SUMMIT <span className="animate-spin inline-block text-[#014BBD]"> ✦ </span> AUGUST 22–24, 2025  <span className="animate-spin inline-block text-[#014BBD]"> ✦ </span>  </p>
                </Marquee>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className=" ">
        <section className="max-w-[80rem] pt-7 md:pt-10 mx-auto md:px-5 px-3 flex flex-col md:gap-10 gap-5">
          <section className="grid md:grid-cols-1 grid-cols-1 md:gap-5 gap-3 items-start">
            <div className='flex flex-col md:gap-7 gap-3'>
              <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r p-1 from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                About Us
              </h1>
              <div className="grid lg:grid-cols-2 md:gap-10 gap-5 items-center">
                <img src="/assets/images/integration.jpg" className=" mx-auto" style={{ clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 60px 100%, 0 calc(100% - 60px))' }} alt="" />
                <div>
                  <div className=" flex flex-col gap-3 ">
                    <p className="text-justify md:text-lg text-sm leading-7">
                      Join us at the <strong>International Conference on Technology Integration for Global Development</strong> — a global forum committed to driving innovation through the integration of emerging technologies for sustainable and inclusive progress. This prestigious event brings together researchers, scholars, industry professionals, and students to share breakthroughs, discuss transformative trends, and present practical solutions that leverage technology for global development challenges.
                      <br />
                      ICTIGD provides a vibrant platform for knowledge exchange, cross-sector collaboration, and interdisciplinary exploration into how technologies like artificial intelligence, smart systems, automation, and data science can be harnessed to solve complex real-world issues and promote equitable growth.
                      <br />
                    </p>
                    <div className="md:mx-0 mx-auto">
                      <Link to="/about">
                        <button className="font-semibold bg-white hover:bg-[#f0f4ff] duration-300 text-[#014BBD] md:text-base text-sm px-6 shadow-lg py-2 md:py-3  cursor-pointer">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="grid md:grid-cols-1 grid-cols-1 md:gap-5 gap-3 items-start">
            <div className='flex flex-col md:gap-7 gap-3'>
              <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r p-1 from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                Our Mission
              </h1>
              <div className="grid lg:grid-cols-1 md:gap-10 gap-5 items-center">
                <div>
                  <div className="flex flex-col gap-3">
                    <p className="text-justify md:text-lg text-sm leading-7">
                      The mission of the International Conference on Technology Integration for Global Development is to foster global collaboration and innovation through the effective integration of emerging technologies. We aim to provide a dynamic platform for researchers, practitioners, policymakers, and industry leaders to share knowledge, explore solutions, and drive sustainable development across all regions. By bridging the gap between technology and global needs, the conference aspires to inspire impactful research and practical applications that address the world’s most pressing social, economic, and environmental challenges.
                    </p>
                    <p className="text-justify md:text-lg text-sm leading-7">
                      This conference also encourages interdisciplinary dialogue and the exchange of best practices that empower communities, enhance education, promote digital inclusion, and support economic growth. We are committed to nurturing a global network of innovators and changemakers who are dedicated to leveraging technology for the greater good of humanity.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/* <section className="max-w-[80rem] mx-auto flex flex-col md:gap-7 gap-3">
            <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl p-1 bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
              Key Invitees
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-5">
              {invitees.map((member, index) => (
                <Invitees key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
              ))}
            </div>
          </section> */}
          <section className="  max-w-[80rem]  mx-auto  ">
            <div className="  flex flex-col md:gap-7 gap-3">
              <h1 className="text-center w-fit mx-auto  font-semibold lg:text-3xl text-xl p-1 bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                Key Dates
              </h1>
              <div className="p-5 bg-gradient-to-tr shadow-lg   from-[#f0f4ff] to-[#e2ecfc]  " >
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5  ">
                  {date.map((item, index) => (
                    <div key={index} style={{
                      clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
                    }} className="  w-full h-full flex items-center     p-5 hover:shadow-xl transition duration-300 bg-white/80 backdrop-blur-sm"  >
                      <KeyDates Dates={item.Dates} Title={item.Title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[100rem]  mx-auto   lg:w-1/2 w-full text-white">
            <div className=" flex flex-col md:gap-7 gap-3">
              <h1 className="text-center w-fit mx-auto font-semibold lg:text-3xl text-xl bg-gradient-to-r p-1 from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                Reach Us
              </h1>
              <div className=" w-full">
                <form onSubmit={handleSubmit} className="w-full grid lg:grid-cols-2 gap-5 bg-[#1B1F3B] p-5  " style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))', }} ngNativeValidate>
                  <div className="">
                    <label for="email" className="block mb-2 text-sm mt-4 ">
                      Name
                    </label>
                    <input type="text" name="name" id="name"
                      value={formData.name}
                      onChange={handleChange}
                      ngModel className="shadow-sm   border text-sm   border-gray-300  bg-white text-black focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  mt-4" placeholder="Enter Your Name" required />
                  </div>
                  <div>
                    <label for="email" className="block mb-2 text-sm mt-4">
                      Email
                    </label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} ngModel className="shadow-sm  border bg-white text-black   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                      placeholder="name@gmail.com" required />
                  </div>
                  <div>
                    <label for="email" className="block mb-2 text-sm      mt-4 "  >
                      Contact Number
                    </label>
                    <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} ngModel className="shadow-sm bg-white text-black  border   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                      placeholder="Enter Your Mobile Number" required />
                  </div>
                  <div className="lg:col-span-2 mt-4">
                    <label for="message" className="block mb-2 text-sm ">
                      Your Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} ngModel
                      rows="4"
                      className="block p-2.5 w-full text-sm shadow-sm border bg-white text-black   border-gray-300   focus:ring-primary-500 focus:border-primary-500   mt-4 "
                      placeholder="Leave a Message..." ></textarea>
                  </div>
                  <div className="text-center md:mt-0 mt-5 lg:col-span-2">
                    <button type="submit" className="py-3 px-6    font-semibold   text-center  md:text-base text-sm shadow-xl   bg-white hover:bg-[#f0f4ff] duration-300  text-[#014BBD]  cursor-pointer     " >
                      {status === 'Sending...' ? 'Submitting...' : 'Send message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <LastSection />
        </section>
      </section >
    </>
  );
};



