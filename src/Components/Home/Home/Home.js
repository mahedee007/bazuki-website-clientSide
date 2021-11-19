import React from 'react';
import Banner from '../Banner/Banner';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import HomeProducts from '../HomeProducts/HomeProducts';
import Products from '../Products/Products';


const Home = () => {
    return (
        <>
            <Banner/>
            <Products/>
            <HomeProducts/>
            <ClientFeedback/>
            
        </>
    );
};

export default Home;