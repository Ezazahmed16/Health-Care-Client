import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const ExDantalCare = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 max-w-screen-lg mx-auto m-y-5 px-5">
                <div className="hero-content flex-col  lg:flex-row md:flex-row">
                    <img src={treatment} className="lg:w-2/5 md:w-2/5 rounded-lg shadow-2xl" alt='treatment'/>
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary btn-outline">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExDantalCare;