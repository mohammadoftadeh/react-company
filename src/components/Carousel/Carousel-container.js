import React from 'react';
import axios from 'axios';

import Carousel from './Carousel';

class CarouselContainer extends React.Component{

    state = {
        data: []
    }

    componentDidMount(){
        const API_KEY = "90c5cf5b5e2026bed66347280d26a2484abb2f0e270bb1e0e2f83ad49880d20e";

        axios.get(`https://api.unsplash.com/search/photos?query=business&per_page=3&client_id=${API_KEY}`)
        .then(response => this.setState({ data: response.data.results }))
        .catch(error => console.log(error));
    }

    render(){
        const { data } = this.state;
        return(
            <Carousel data={data} />
        );
    }
}

export default CarouselContainer;