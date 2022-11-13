import React from 'react';

const AppoinmentOption = ({ appoinmentOption, setTreatment }) => {
    const { name, slots } = appoinmentOption;
    return (
        <div>
            <div className="card bg-base-200 shadow-sm text-center">
                <div className="card-body">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p> {slots.length > 0 ? slots[0] : 'Sorry. Please Try Another Day.'} </p>
                    <p> <span className='font-extrabold'>{slots.length}</span> {slots.length > 1 ? 'Spaces' : 'Space'} Available </p>
                    <div className="card-actions justify-center my-4">
                        <label onClick={() => setTreatment(appoinmentOption)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary btn-outline">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;