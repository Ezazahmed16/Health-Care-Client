import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';


const Login = () => {
    const { loginWithEmial, googleLogin } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [data, setData] = useState("");

    const handleLogin = (data) => {
        setErrorMessage('')
        loginWithEmial(data.email, data.password)
            .then((userCredential) => {
                // const user = userCredential.user;
                toast.success('LogIn Success');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                toast.success('Login Success')
            }).catch((error) => {

            });
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content block w-full md:w-2/4 lg:w-2/5">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <h1 className="text-2xl lg:text-4xl font-bold text-center pt-5">Login now!</h1>

                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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

                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>

                            <div className="form-control mt-2">
                                <input type="submit" value="Login" className="btn btn-primary"></input>
                            </div>

                            {
                                errorMessage ? <>
                                    <p className='text-warning'>{errorMessage}</p>
                                </> : <></>
                            }

                            <label className="label mx-auto">
                                <Link to="/singup" className="label-text-alt link link-hover text-sm">Don't have an account <span className='font-semibold'>Create an account</span></Link>
                            </label>
                        </form>

                        <div className="divider">OR</div>

                        <div className="flex justify-center pb-5">
                            <div onClick={handleGoogleLogin} className="btn btn-success btn-outline w-2/5 m-1">Google <FaGoogle className='ml-2 w-6 h-6' /></div>
                            <div className="btn btn-accent btn-outline w-2/5 m-1">Facebook <FaFacebookF className='ml-2 w-6 h-6' /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;