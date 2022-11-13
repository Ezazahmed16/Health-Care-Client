import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';



const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault()
        const patinetName = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const slot = event.target.slot.value;
        const date = event.target.date.value;

        const booking = {
            treatmentName: name,
            appoinmentDate: date,
            slot,
            patinetName: patinetName,
            email,
            number,
        }

        console.log(booking);
        toast.success('Successfully Submit Your Information')
        setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-center">{name}</h3>

                    <div className="card flex-shrink-0 w-full mt-5 max-w-lg bg-base-300">
                        <form onSubmit={handleBooking} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input name="date" disabled type="text" value={format(selectedDate, 'PP')} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Slot</span>
                                </label>
                                <select name='slot' placeholder='Select Your Slot' className="select w-full">
                                    {
                                        slots?.map((slot, i) => <option
                                            value={slot}
                                            key={i}
                                        >{slot}</option>)
                                    }
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered" placeholder='Your Name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered" placeholder='Your Email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" name="number" className="input input-bordered" placeholder='Your Phone Number' required />
                            </div>


                            <div className="form-control mt-6">
                                <input type='submit' value='Submit' className="btn btn-primary btn-outline"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;