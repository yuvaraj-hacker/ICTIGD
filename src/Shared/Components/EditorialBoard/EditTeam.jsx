// import React from 'react'

// function EditTeam({ position, Name, location, dataAos }) {
//     return (
//         <>
//             <section className='border-2 rounded-xl  overflow-hidden '>
//                 <div className='p-2 bg-[#1B1F3B] text-white text-center  '>
//                     {position}
//                 </div>
//                 <div className='p-4 text-center'>
//                     <img data-aos={dataAos} src="/assets/Images/members.jpg" className='w-32 mx-auto' alt="" />
//                     <div className='flex flex-col space-y-2'>
//                         <p>{Name}</p>
//                         <p className="
//                     ">{location}</p>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default EditTeam

import React from 'react'

function EditTeam({ position, Name, location, dataAos, avatar }) {
    return (
        <div style={{
            clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
        }} className="group relative bg-white    shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2   overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Position badge */}


            {/* Card content */}
            <div className="relative p-6 text-center">


                {/* Name and location */}
                <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#1B1F3B] transition-colors duration-300">
                        {Name}
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {location}
                    </p>
                </div>

            </div>
            <div className="relative   px-4 py-3 text-center font-semibold text-sm tracking-wide">
                {position}
            </div>
        </div>
    )
}

export default EditTeam
