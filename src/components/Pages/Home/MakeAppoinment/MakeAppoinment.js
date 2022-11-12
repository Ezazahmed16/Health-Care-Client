import React from 'react';
import bgAppoinment from '../../../../assets/images/appointment.png'
import femaledoctor from '../../../../assets/images/female-doctor.png'

const MakeAppoinment = () => {
    return (
        <div>
            <section className='mt-32 mb-10'>
                <div className="hero" style={{ backgroundImage: `url("${bgAppoinment}")` }}>
                    <div className="hero-overlay bg-opacity-40"></div>

                    <div className="hero max-w-screen-lg mx-auto py-10">
                        <div className="hero-content flex-col md:flex-row lg:flex-row">
                            <img src={femaledoctor} className="md:-mt-56 lg:-mt-52 max-h-fit hidden md:block lg:block rounded-lg" alt=''/>

                            <div className=''>
                                <h5 className='text-base-400 font-bold mb-2'>Appointment</h5>
                                <h1 className="sm:text-xl md:text-3xl lg:text-5xl font-bold text-neutral-content">Make an appointment Today</h1>
                                <p className="py-5 text-neutral-content">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary btn-outline">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppoinment;