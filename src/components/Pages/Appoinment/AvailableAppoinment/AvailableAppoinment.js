import React, { useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppoinment = ({ selectedDate }) => {
    // const [appoinmentOptions, setAppoinmentOptions] = useState([]);
    const [treatment, setTreatment] = useState({});
    const date = format(selectedDate, 'PP');

    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appoinmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appoinmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appoinmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppoinmentOptions(data))
    // }, [])
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
                treatment && <BookingModal
                    refetch={refetch}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    treatment={treatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppoinment;