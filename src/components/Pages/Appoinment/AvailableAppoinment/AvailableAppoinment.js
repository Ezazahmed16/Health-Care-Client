import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinment = ({ selectedDate }) => {
    const [appoinmentOptions, setAppoinmentOptions] = useState([]);
    const [treatment, setTreatment] = useState({});

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))
    }, [])
    return (
        <div className='my-10 max-w-screen-lg mx-auto'>
            <p className='text-center text-2xl mx-5'>Available Appoinment on {format(selectedDate, 'PP')}</p>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-5 lg:mx-0 md:mx-0 my-8">
                {
                    appoinmentOptions.map(appoinmentOption => <AppoinmentOption
                        key={appoinmentOption._id}
                        appoinmentOption={appoinmentOption}
                        setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
            </div>
            {
                treatment && <BookingModal selectedDate={selectedDate} setTreatment={setTreatment} treatment={treatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppoinment;