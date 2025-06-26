import React from 'react';

function Invitees({ Name, Position, location }) {
    return (
        <section className="rounded-xl    ">
            {/* Corner Cut Shape */}
            <div className='grid md:grid-cols-1 grid-cols-2 items-center   shadow-2xl hover:scale-105 duration-300 py-5 px-5   hover:from-white hover:to-white hover:duration-300 bg-gradient-to-br from-[#2487DB] to-[#e6f0fb] bg-white  gap-10' style={{
                clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 60px 100%, 0 calc(100% - 60px))',
            }}>
                <div className="flex flex-col items-center gap-3 z-10 mx-auto   justify-center col-span-1 w-full h-full    ">
                    <div className="  font-semibold  text-sm md:text-2xl ">
                        {Name}
                    </div>
                    <div className=" md:text-lg text-sm font-medium">
                        {Position}
                    </div>
                    {/* <div className=" md:text-lg text-sm font-medium">
                        {location}
                      </div> */}
                </div>
                <img rel='preload' src="/assets/images/homes.jpg" className='md:w-full md:h-full w-40 h-40 col-span-1 rounded-full ' alt="" />
            </div>
        </section>
    );
}

export default Invitees;