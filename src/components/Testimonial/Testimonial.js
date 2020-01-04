import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '100px',
        responsive: [{
            breakpoint: 1120,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 855,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 570,
            settings: {
              slidesToShow: 1,
            }
          }]
    };

    return(
        <div>
            <Slider {...settings}>
            {
                data.map(item => (
                    <div key={item.id} className="testimonial-box shadow-lg p-3 m-3">
                        <div className="d-flex align-items-center mb-3">
                            <div className="testimonial-icon o-bg-primary o-font-lg rounded-circle text-white mr-3">
                                <FaQuoteRight />
                            </div>
                            <div className="d-flex flex-column text-left">
                                <strong>{item.name.substr(0, 16)}</strong>
                                <small className="text-muted">Consumer</small>
                            </div>
                        </div>
                        <p className="o-font-sm text-left">{item.body}</p>
                    </div>
                ))
            }
            </Slider>
        </div>
    );
};

export default Testimonial;