import { Briefcase, Building2, MapPin, User } from 'lucide-react'

function Edit({ position, Name, location }) {
    return (
        <>
            <div style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
            }} className=" relative bg-gradient-to-br from-white to-gray-50  hover:shadow-2xl shadow-xl transition-all duration-500 p-6 transform hover:-translate-y-2  ">
                <div className="relative z-10 text-center  flex flex-col gap-2 ">
                    <div>
                        <h3 className="md:text-lg font-bold text-gray-800 -hover:text-blue-600 transition-colors duration-300">
                            {Name}
                        </h3>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                        {/* <Building2 className="w-4 h-4 text-blue-500" /> */}
                        <p className="text-sm font-medium">{position}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                        {/* <MapPin className="w-4 h-4 text-[#14AE5C]" /> */}
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit
