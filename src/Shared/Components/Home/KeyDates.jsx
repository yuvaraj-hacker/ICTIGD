// import React from 'react'

// function KeyDates({ Dates, Title }) {
//     return (
//         <>
//             <section className='md:p-4 p-3 bg-[#1B1F3B] flex gap-4 items-center rounded-xl'>
//                 <div className='p-2 rounded-xl bg-white w-fit whitespace-nowrap'>
//                     {Dates}
//                 </div>
//                 <div className='text-white md:text-base text-sm'>
//                     {Title}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default KeyDates

import React from 'react';

function KeyDates({ Dates, Title }) {
    return (
        <section className="relative  " >
            <div className="flex items-center gap-5 z-10 relative  h-full ">
                <div className="  text-[#1B1F3B] font-semibold p-5 bg-gradient-to-r from-[#2487DB] to-[#014BBD] rounded-full text-sm md:text-base  whitespace-nowrap">
                    <i className="fi fi-sr-calendar flex items-center text-white md:text-3xl text-xl"></i>
                </div>
                <div className="md:text-base text-sm font-medium flex flex-col gap-5">
                    <p className=" border-2 w-fit p-2   md:px-5 px-3 border-[#014BBD]">{Dates}</p>
                    <p className="md:text-lg "> {Title}</p>
                </div>
            </div>
            {/* <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div> */}
        </section>
    );
}

export default KeyDates;

