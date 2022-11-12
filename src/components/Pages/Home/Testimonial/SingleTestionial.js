import React from 'react';

const SingleTestionial = ({ review }) => {
    const { description, name, address, img } = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    {/* <h2 className="card-title">{}</h2> */}
                    <p>{description}</p>
                </div>
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default SingleTestionial;