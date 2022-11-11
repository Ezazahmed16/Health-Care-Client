import React from 'react';

const Service = ({ service }) => {
    const { name, img, description } = service
    return (
        <div>
            <div className="card bg-base-200 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-24 w-24" />
                </figure>
                <div className="card-body items-center text-center text-neutral-content">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className='text-sm my-2'>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;