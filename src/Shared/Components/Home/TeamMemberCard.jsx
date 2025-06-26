import React from 'react';

const TeamMemberCard = ({ image, name, position, dataAos }) => {
    return (
        <div className="flex flex-col items-center text-center" >
            <div className="p-5rounded-full border-4 border-yellow-400 rounded-full overflow-hidden" data-aos={dataAos}>
                <img rel='preload' src="/assets/Images/members.jpg" alt={name} className="md:w-52 w-32 md:h-52 object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{position}</p>
        </div>
    );
};

export default TeamMemberCard;
