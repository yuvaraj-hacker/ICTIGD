import Edit from './Edit';
import LastSection from '../Last/LastSection';
import Other from '../Other/Other';

function Issues({ }) {
    const Tech = [
        // { Name: 'Naaman Omar', position: 'Department of Information Technology', university: 'Duhok Polytechnic University', location: 'Iraq' },
        // { Name: 'Archana Chaluvadi', position: 'MASSMUTUAL', location: 'BOSTON,USA' },
        // { Name: 'Sai Sathish Kethu', position: 'NeuraFlash', location: 'Georgia, USA' },
        // { Name: 'Venkat Garikipati', position: 'Innosoft', location: 'Sacramento,CA,USA' },
        // { Name: 'Durai Rajesh Natarajan', position: 'Estrada Consulting Inc', location: 'California, USA' },
        {
            name: "Ridwan Mustofa",
            university: "Khulna University of Engineering & Technology",
            location: "Bangladesh"
        },
        {
            name: "Johan Hendri Prasetyo",
            university: "Universitas Nusa Mandiri",
            location: "Indonesia"
        },
        {
            name: "Twana A. Hamad",
            university: "Harran University",
            location: "Turkey"
        },
        {
            name: "Awais Khan Jumani",
            university: "ILMA University",
            location: "Pakistan"
        },
        {
            name: "Ammar Amjad",
            university: " National Yang Ming Chiao Tung University",
            location: "Taiwan"
        },
        {
            name: "Bibhakar Das",
            university: "Khulna University of Engineering and Technology",
            location: "Bangladesh"
        },

        {
            name: "Qiang Tong",
            university: "Shenzhen Institute of Information Technology",
            location: "China"
        },
        {
            name: "Rodrigo Augusto Ricco",
            university: "Federal University of Ouro Preto",
            location: "Brazil"
        },

        {
            name: "Saqib Amin",
            university: "Riphah International University",
            location: "Pakistan"
        },

        {
            name: "Qianyun Zheng",
            university: "Xi’an Peihua University",
            location: "China"
        },
        {
            name: "Daniel Ekpenyong Asuquo",
            university: "University of Uyo",
            location: "Nigeria"
        },
        {
            name: "Waseem",
            university: "Jiangsu University",
            location: "China"
        },
        {
            name: "Jhanghiz Syahrivar",
            university: "President University",
            location: "Indonesia"
        },
        {
            name: "Abraham Musa Peter ",
            university: "Federal University Lokoja",
            location: "Nigeria"
        },
        { name: 'Chhavi Dhiman', university: 'Delhi Technological University', location: 'India' },

        {
            name: "Ghulam Gilanie",
            university: "The Islamia University of Bahawalpur",
            location: "Pakistan"
        },
        {
            name: "Maryam Anwer",
            university: " Majma University",
            location: "Saudi Arabia"
        },

        {
            name: "Abraham Musa Peter ",
            university: "Federal University Lokoja",
            location: "Nigeria"
        },
        {
            name: "K. Ramesh",
            university: "V.R.S. College of Engineering and Technology",
            location: "India"
        },
        {
            name: "K. Ramesh",
            university: "V.R.S. College of Engineering and Technology",
            location: "India"
        },
        { name: 'V. Pravenea', university: ' Dr.N.G.P Institute of Technology', location: ' India' },
        { name: 'Oladayo Atanda', university: ' Bowen University', location: 'Nigeria' },
        { name: 'Khushbu Doulani', university: 'IIIT Lucknow', location: 'India' },
        { name: 'Comfort O. Folorunso', university: 'University of Lagos', location: ' Nigeria' },
        { name: 'Muhammad Asif Khan', university: 'Qatar University', location: 'Qatar' },

    ];
    return (
        <>
            <Other Title="Editorial Board" />
            <section className="flex flex-col md:gap-5 gap-3 max-w-[80rem]  2xl:px-0 px-3 mx-auto  md:py-10 py-5" >
                <h1 className="text-center w-fit mx-auto rounded-full font-semibold p-1 lg:text-3xl text-xl bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text  text-transparent">
                    Board of Editors
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                    The Board of Editors for the International Conference on Technology Integration for Global Development consists of renowned scholars, researchers, and industry experts from across the globe. Their role is essential in maintaining the academic rigor and integrity of the conference proceedings. The board is responsible for overseeing the peer review process, ensuring the quality and originality of submitted manuscripts, and providing guidance on editorial standards. Through their expertise, the Board of Editors ensures that the published work reflects cutting-edge research, promotes global collaboration, and contributes meaningfully to the advancement of technology for sustainable development.
                </p>
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-5">
                    {Tech.map((member, index) => (
                        <Edit key={index} position={member.position} name={member.name} university={member.university} location={member.location} />
                    ))}
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default Issues;
