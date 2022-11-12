import React from 'react';
import SingleTestionial from './SingleTestionial';
import quote from '../../../../assets/icons/quote.svg'

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
            address: 'Pabna',
            img: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'
        },
        {
            id: 3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Nasrin Swity',
            address: 'Dhakaa',
            img: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'
        },
    ]
    return (
        <div>
            <section className='max-w-screen-lg mx-5 md:mx-5 lg:mx-auto my-10'>

                <div className="flex justify-between items-center">
                    <div>
                        <h5 className='text-base-400 font-bold mb-3'>Testimonial</h5>
                        <h3 className='text-neutral-content text-3xl lg:text-5xl'>What Our Patients Says</h3>
                    </div>
                    <div className="">
                        <img className='w-24' src={quote} alt="" />
                    </div>
                </div>

                <div className="grid md:gap-3 lg:gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">{
                    reviews.map(review => <SingleTestionial
                        key={review.id}
                        review={review}
                    ></SingleTestionial>)
                }</div>

            </section>
        </div>
    );
};

export default Testimonial;