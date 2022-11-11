import React from 'react';
import bgChair from '../../../../assets/images/bg.png'
import chair from '../../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${bgChair}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content max-w-screen-lg mx-auto">
                    <div className="">
                        <div className="hero-content flex-col md:flex-row-reverse md:justify-around lg:flex-row-reverse lg:justify-around">
                            <img src={chair} className="lg:w-2/4 md:w-2/4 w-full rounded-lg shadow-2xl opacity-90" alt=''/>
                            <div>
                                <h1 className="lg:text-5xl text-4xl font-bold ">Box Office News!</h1>
                                <p className="lg:py-6 py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary btn-outline">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;