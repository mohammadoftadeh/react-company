import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CarouselContainer from '../components/Carousel/Carousel-container';
import ServicesContainer from '../components/Services/Services-container';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import PostsContainer from '../components/Posts/Posts-container';
import TestimonialContainer from '../components/Testimonial/Testimonial-container';
import Footer from '../components/Footer/Footer';


const HomePage = () => (
    <>
        <Navbar />
        <CarouselContainer />
        <ServicesContainer />
        <HeroVideo />
        <PostsContainer />
        <TestimonialContainer />
        <Footer />
    </>
);

export default HomePage;