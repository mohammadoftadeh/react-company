import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaPlayCircle } from 'react-icons/fa';

import './HeroVideo.scss';

import HeroVideoBg from '../../assets/images/hero-video.jpg';
 
const HeroVideo = () => {

    const [toggler, setToggler] = useState(false);

    const style = {
        background: `url(${HeroVideoBg})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
 
    return (
        <div className="hero-video bg-warning d-flex align-items-center justify-content-center my-5" style={style}>
            <button className="o-text-primary bg-white border-0 rounded-circle position-relative" onClick={ () => setToggler(!toggler) }>
                <FaPlayCircle />
            </button>
            <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/watch?v=891yn6fYRWY'
                ] }
            />
        </div>
    );
}
 
export default HeroVideo;