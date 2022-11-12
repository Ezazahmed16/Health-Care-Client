import React from 'react';
import bgAppoinment from '../../../../assets/images/appointment.png'
import doctor from '../../../../assets/images/doctor.png'

const MakeAppoinment = () => {
    return (
        <div>
            <section className='mt-32 mb-10'>
                <div className="hero" style={{ backgroundImage: `url("${bgAppoinment}")` }}>
                    <div className="hero-overlay bg-opacity-40"></div>

                    <div className="hero max-w-screen-lg mx-auto py-10">
                        <div className="hero-content flex-col md:flex-row lg:flex-row">
                            <img src={doctor} className="-mt-44 max-w-md hidden md:block lg:block rounded-lg" alt=''/>

                            <div className=''>
                                <h5 className='text-base-400 font-bold mb-2'>Appointment</h5>
                                <h1 className="text-5xl font-bold text-neutral-content">Make an appointment Today</h1>
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