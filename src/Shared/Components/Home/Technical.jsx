
function Technical({ Name, Position, location }) {
    return (
        <section className="rounded-xl overflow-hidden    relative ">
            {/* Corner Cut Shape */}
            <div className='grid grid-cols-2 items-center bg-[#269C53]  '>
                <div className='p-5'>
                    <img rel="preload" src="/assets/Images/home6.jpg" className='w-full h-full col-span-1 rounded-xl ' alt="" />
                </div>
                <div className="flex flex-col items-center gap-3 z-10 mx-auto bg-gradient-to-r from-[#269C53] to-[#306042] justify-center col-span-1 w-full h-full">
                    <div className=" text-white font-semibold  text-sm md:text-base ">
                        {Name}
                    </div>
                    <div className="text-white md:text-lg text-sm font-medium">
                        {Position}
                    </div>
                    <div className="text-white md:text-lg text-sm font-medium">
                        {location}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technical;