import React from 'react';

const SingleTestionial = ({ review }) => {
    const { description, name, address, img } = review;
    return (
        <div>
            <div className="card bg-base-200 mt-12">
                <div className="card-body">
                    <p>{description}</p>
                </div>
                <div className="card-footer flex justify-around items-center  pb-7">
                    <div className="avatar">
                        <div className="w-10 h-10 lg:w-12 lg:h-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='' src={img} alt=''/>
                        </div>
                    </div>
                    <div className="info">
                        <h2 className='text-xl text-base-content'>{name}</h2>
                        <h5 className='text text-base-content'>{address}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestionial;