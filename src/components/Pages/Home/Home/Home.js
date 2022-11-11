import React from 'react';
import Banner from '../Banner/Banner';
import ExDantalCare from '../ExdantalCare/ExDantalCare';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExDantalCare></ExDantalCare>
        </div>
    );
};

export default Home;