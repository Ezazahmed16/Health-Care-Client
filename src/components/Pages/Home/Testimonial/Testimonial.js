import React from 'react';
import SingleTestionial from './SingleTestionial';

const Testimonial = () => {
    const reviews = [
        {   
            id: 1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Ezaz Ahmed',
            address: 'Cumilla',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtd0soCSRdpo8Y5klekJdABh4emG2P29jwg&usqp=CAU'
        },
        {   
            id: 2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Nasrin Swity',
            address: 'Cumilla',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtd0soCSRdpo8Y5klekJdABh4emG2P29jwg&usqp=CAU'
        },
        {   
            id: 3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Nasrin Swity',
            address: 'Cumilla',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtd0soCSRdpo8Y5klekJdABh4emG2P29jwg&usqp=CAU'
        },
    ]
    return (
        <div>
            <section className='max-w-screen-lg mx-auto my-10'>
                <h5 className='text-base-400 font-bold mb-3'>Testimonial</h5>
                <h3 className='text-neutral-content text-5xl'>What Our Patients Says</h3>

                {/* {
                    reviews.map( review => <SingleTestionial
                        key={review.id}
                        review={review}
                    ></SingleTestionial> )
                } */}

            </section>
        </div>
    );
};

export default Testimonial;