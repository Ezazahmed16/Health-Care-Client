import React from 'react';
import { Link } from 'react-router-dom';

const LoginFirst = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 bg-base text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-5xl text-gray-600">
                           Login Now
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">For Booking you have to Login First</p>
                        <p className="mt-4 mb-8 text-gray-400">Please Login Or Singup Now</p>

                        <Link rel="noopener noreferrer" to="/login" className="px-8 py-3 font-semibold rounded btn-success btn-outline btn text-gray-900">Login</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginFirst;