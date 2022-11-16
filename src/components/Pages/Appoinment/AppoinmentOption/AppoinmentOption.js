import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const AppoinmentOption = ({ appoinmentOption, setTreatment }) => {
    const { name, slots } = appoinmentOption;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const loginFirst = () => {
        navigate('/loginfirst')
    }
    return (
        <div>
            <div className="card bg-base-200 shadow-sm text-center">
                <div className="card-body">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p> {slots.length > 0 ? slots[0] : 'Sorry. Please Try Another Day.'} </p>
                    <p> <span className='font-extrabold'>{slots.length}</span> {slots.length > 1 ? 'Spaces' : 'Space'} Available </p>



                    {
                        user?.email ?
                            <>
                                <div className="card-actions justify-center my-4">
                                    <label onClick={() => setTreatment(appoinmentOption)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary btn-outline">Book Now</label>
                                </div>
                            </>
                            :
                            <>
                                <div className="card-actions justify-center my-4">
                                    <label onClick={loginFirst} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary btn-outline">Book Now</label>
                                </div>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;