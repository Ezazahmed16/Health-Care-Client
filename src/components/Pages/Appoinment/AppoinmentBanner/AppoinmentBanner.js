import bgChair from '../../../../assets/images/bg.png'
import chair from '../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';



const AppoinmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${bgChair}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content max-w-screen-lg mx-auto">
                    <div className="">
                        <div className="hero-content flex-col md:flex-row-reverse md:justify-around lg:flex-row-reverse lg:justify-around">
                            <img src={chair} className="lg:w-2/4 md:w-2/4 w-full rounded-lg shadow-2xl opacity-90" alt='' />
                            <div className='bg-base-300'>
                                <DayPicker 
                                     mode="single"
                                     selected={selectedDate}
                                     onSelect={setSelectedDate}
                                />
                                <p className='text-center pb-5'>You picked {format(selectedDate, 'PP')}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;