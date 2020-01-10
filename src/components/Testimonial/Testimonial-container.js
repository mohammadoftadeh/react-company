import React from 'react';
import axios from 'axios';

import Title from '../Title/Title';
import Spinner from '../Spinner/Spinner';

import './Testimonial.scss';

import Testimonial from './Testimonial';

class TestimonialContainer extends React.Component{
    state = {
        comments: [],
        isLoading: true
    };

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => this.setState({ comments: response.data, isLoading: false }))
        .catch(error => console.log(error));
    }

    render(){
        const { comments, isLoading } = this.state;
        const commentsLimit = comments.slice(0, 6);
        return(
            <div className="d-flex flex-column justify-content-center text-center my-5">
                <Title>Testimonial</Title>
                {
                    isLoading ?  <Spinner /> : <Testimonial data={commentsLimit} />
                }
            </div>
        );
    }
}

export default TestimonialContainer;