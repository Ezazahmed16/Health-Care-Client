import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';

const services = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: fluoride
    },
    {
        id: 2,
        name: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: cavity
    },
    {
        id: 3,
        name: 'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: whitening
    },
]

const Services = () => {
    return (
        <div className='my-10'>
            <h2 className='text-xl md:text-2xl lg:text-2xl text-base-content text-center font-semibold'>OUR SERVICES</h2>
            <h3 className='text-3xl md:text-5xl lg:text-5xl mb-5 text-neutral-content text-center font-semibold'>Services We Provide</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;