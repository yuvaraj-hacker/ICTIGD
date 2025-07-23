import EditTeam from './EditTeam'
import LastSection from '../Last/LastSection';
import Other from '../Other/Other';

function EditorialBoard({ position, Name, location }) {
    const Tech = [
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },

    ];
    return (
        <>
            <Other Title="Organizing Committee" />
            <section className="flex flex-col md:gap-5 gap-3 max-w-[80rem]  2xl:px-0 px-3 mx-auto  md:py-10 py-5" >
                <div className='flex flex-col gap-3 '>
                    <h1 className="text-center w-fit mx-auto rounded-full p-1 font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                        Committee Members
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                        The Organizing Committee of the International Conference on Technology Integration for Global Development comprises a distinguished group of academic leaders, researchers, and industry professionals committed to advancing global collaboration through technology. The committee oversees the strategic planning and seamless execution of the conference, including technical program development, keynote coordination, peer review management, and logistical operations. Their collective efforts ensure a dynamic and inclusive platform for exchanging ideas, fostering innovation, and addressing real-world challenges through interdisciplinary approaches and sustainable technological solutions.
                    </p>
                </div>
                {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <EditTeam key={index} position={member.position} Name={member.Name} location={member.location} dataAos="flip-left" />
                    ))}
                </div> */}
                <div className="  ">
                    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent mb-6">
                        Roles and Responsibilities of Committee Members
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                        The Organizing Committee members of the International Conference on Technology Integration for Global Development play a pivotal role in shaping the success and impact of the event. Their responsibilities include planning and structuring the technical program, inviting keynote speakers, coordinating paper review and selection, and ensuring high-quality content across all sessions. Members also handle sponsorship outreach, venue coordination, publicity, and participant engagement. Additionally, they work collaboratively to promote international participation, ensure smooth event logistics, and maintain the academic and professional integrity of the conference at every stage.
                    </p>
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default EditorialBoard
