import Edit from './Edit';
import LastSection from '../Last/LastSection';
import Other from '../Other/Other';

function Issues({ }) {
    const Tech = [
        { Name: 'Sunil Kumar Alavilli', position: 'Sephora', location: 'California, USA' },
        { Name: 'Deepa Bhadana', position: 'CCS Univeristy', location: 'UP, India' },
        { Name: 'Nagendra Kumar Musham', position: 'Celer Systems Inc', location: 'California, USA' },
        { Name: 'Xi Zhang', position: 'Lecturer(University of KU Leuven)', location: 'Belgium' },
        { Name: 'Rajya Lakshmi Gudivaka', position: 'Wipro', location: 'Hyderabad, India' },
    ];
    return (
        <>
            <Other Title="Editorial Board" />
            <section className="flex flex-col md:gap-5 gap-3 max-w-[80rem]  2xl:px-0 px-3 mx-auto  md:py-10 py-5" >
                <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                    Board of Editors
                </h1>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <Edit key={index} position={member.position} Name={member.Name} location={member.location} />
                    ))}
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default Issues;
