import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import phone from '../../../../assets/icons/phone.svg'
import marker from '../../../../assets/icons/marker.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infoCards = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open at 2:00 P.M. to 5:00 A.M.',
            icon: clock,
            bgColor: 'bg-base-200'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Daffodil International University, Savar, Dhaka',
            icon: marker,
            bgColor: 'bg-base-300'
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: '01726065822',
            icon: phone,
            bgColor: 'bg-base-200'
        },
    ]
    return (
        <div className='my-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center max-w-screen-lg mx-auto'>
            {
                infoCards.map(infoCard => <InfoCard
                    key={infoCard.id}
                    infoCard={infoCard}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;