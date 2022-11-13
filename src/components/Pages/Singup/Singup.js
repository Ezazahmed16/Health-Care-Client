import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const Singup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handSingup = (data) => {
        console.log(data);
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content block w-full md:w-2/4 lg:w-2/5">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <h1 className="text-2xl lg:text-4xl font-bold text-center pt-5">Create Your Account</h1>

                        <form onSubmit={handleSubmit(handSingup)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: 'Name is required' })} type="text" placeholder="Enter Your Name" className="input input-bordered " />
                                {errors.name && <p className='mt-1 ml-2 text-error' role="alert">{errors.name?.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: 'Email Address is required' })} type="text" placeholder="Enter Your Emial" className="input input-bordered " />
                                {errors.email && <p className='mt-1 ml-2 text-error' role="alert">{errors.email?.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: 'Password is required', 
                                    minLength: { value: 6, message: 'Password should be at least 6 characters or longer' },
                                    pattern: { value: /(?=.*[a-zA-Z])/, message: 'Password must have at least one alphabetical' },
                                })} type="password" placeholder="Enter Your Password" className="input input-bordered" />
                                {errors.password && <p className='mt-2 ml-2 text-error' role="alert">{errors.password?.message}</p>}
                            </div>

                            <div className="form-control mt-2">
                                <input type="submit" value="Singup" className="btn btn-primary"></input>
                            </div>

                            <label className="label mx-auto">
                                <Link to="/login" className="label-text-alt link link-hover text-sm">Already Have an account! <span className='font-semibold'> please login </span></Link>
                            </label>
                        </form>

                        <div className="divider">OR</div>

                        <div className="flex justify-center pb-5">
                            <div className="btn btn-success btn-outline w-2/5 m-1">Google <FaGoogle className='ml-2 w-6 h-6' /></div>
                            <div className="btn btn-accent btn-outline w-2/5 m-1">Facebook <FaFacebookF className='ml-2 w-6 h-6' /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;