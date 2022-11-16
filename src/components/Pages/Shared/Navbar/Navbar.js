import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const menuItems = <>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/appoinment'>Appoinment</NavLink></li>
        <li><NavLink to='/reviews'>Reviews</NavLink></li>
        <li><NavLink to='/contactus'>Contact Us</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.warning('Logout Successfull')
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className=''>
            <div className="navbar bg-neutral">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-2xl font-extrabold">Health Care</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <>
                            <div className="dropdown dropdown-bottom dropdown-end mx-5">
                                <label tabIndex={0} className="btn btn-info text-base-300">Dashboard</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <div className="bg-base-300 p-4 mb-2">
                                        <div className="avatar block">
                                            <div className="w-12 mx-auto rounded-full ring ring-base-200 ring-offset-base-100 ring-offset-2">
                                                <img className=' ' src="https://placeimg.com/192/192/people" alt='
                                                '/>
                                            </div>
                                        </div>

                                        <p className='text-center text-base-content text-sm font-bold'>{user?.displayName}</p>
                                        <p className='text-center text-base-content text-sm block'>{user?.email}</p>
                                    </div>

                                    <li><Link className='btn btn-success btn-outline m-1' to='/dashboard '>Dashboard</Link></li>

                                    <li><Link onClick={handleLogOut} className="btn btn-base-300 btn-outline m-1">Logout</Link></li>

                                </ul>
                            </div>
                        </>
                            :
                            <></>
                    }

                    {
                        !user?.email ?
                            <>
                                <Link className="btn btn-base-300 btn-outline" to='/login'>Login</Link>
                            </>
                            :
                            <>

                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;