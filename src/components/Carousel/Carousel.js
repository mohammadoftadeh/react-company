import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Carousel.scss';

const Carousel = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div className="main-slider">
            <Slider {...settings}>
            {
                data.map(item => (
                    <img key={item.id} src={item.urls.regular} alt={item.alt_description} />
                ))
            }
            </Slider>
        </div>
    );
};

export default Carousel;