import React from 'react';
import Banner from '../Banner/Banner';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import HomeProducts from '../HomeProducts/HomeProducts';
import Media from '../Media/Media';


const Home = () => {
    return (
        <>
            <Banner/>
            <HomeProducts/>
            <ClientFeedback/>
            <Media/>
            
        </>
    );
};

export default Home;