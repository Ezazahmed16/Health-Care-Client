import React from 'react';

const InfoCard = ({ infoCard }) => {
    const { name, icon, description, bgColor } = infoCard;
    return (
        <div>
            <div className={`card card-side hover:drop-shadow-2xl h-40 px-2 py-5 hover:cursor-grab 
            ${bgColor}`}>
                <figure><img className='block h-14 w-14 m-2' src={icon} alt="icons" /></figure>
                <div className="card-body block">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;