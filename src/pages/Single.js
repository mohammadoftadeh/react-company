import React from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar/Navbar';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Spinner from '../components/Spinner/Spinner';

class Single extends React.Component{

    state = {
        post: {},
        isLoading: true
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(response => this.setState({ post: response.data, isLoading: false}))
        .catch(error => console.log(error));
    }

    render(){
        const { post, isLoading } = this.state;
        return(
            <>
                {
                    isLoading ? <Spinner /> :
                    <div>
                        <Navbar />
                        <div className="d-flex flex-column justify-content-center text-center my-5">
                            <Title>{post.title}</Title>
                            <div className="container">
                                <article className="mb-5">
                                    <p className="text-justify">{post.body}</p>
                                </article>
                                <h4 className="text-left mb-3">Tags:</h4>
                                <div className="d-flex flex-wrap mb-5">
                                    <a href="/" className="btn btn-outline-secondary rounded-pill btn-sm m-1">business</a>
                                    <a href="/" className="btn btn-outline-secondary rounded-pill btn-sm m-1">website</a>
                                    <a href="/" className="btn btn-outline-secondary rounded-pill btn-sm m-1">company</a>
                                    <a href="/" className="btn btn-outline-secondary rounded-pill btn-sm m-1">application</a>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            </>
        );
    }
}

export default Single;