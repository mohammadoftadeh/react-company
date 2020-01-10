import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import Spinner from '../Spinner/Spinner';
import PostsList from './PostsList';

import './Posts.scss';

class PostsContainer extends React.Component{

    state = {
        posts: [],
        isLoading: true
    };

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({ posts: response.data, isLoading: false }))
        .catch(error => console.log(error));
    }

    render(){
        const { posts, isLoading } = this.state;
        const postsLimit = posts.slice(0, this.props.limit);
        return(
            <div className="d-flex flex-column justify-content-center text-center my-5">
                <Title>Blog</Title>
                {
                    isLoading ?  <Spinner /> : <PostsList data={postsLimit} />
                }
                
                    {this.props.viewAll ? <div>
                        <Link to="/blog" className="btn o-bg-primary text-white btn-sm px-4">View all</Link>
                    </div> : ''}
                
            </div>
        );
    }
}

export default PostsContainer;