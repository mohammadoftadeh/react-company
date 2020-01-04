import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CarouselContainer from '../components/Carousel/Carousel-container';
import ServicesContainer from '../components/Services/Services-container';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import PostsContainer from '../components/Posts/Posts-container';


const HomePage = () => (
    <>
        <Navbar />
        <CarouselContainer />
        <ServicesContainer />
        <HeroVideo />
        <PostsContainer />
    </>
);

export default HomePage;