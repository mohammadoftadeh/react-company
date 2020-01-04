import React from 'react';
import axios from 'axios';

import Title from '../Title/Title';
import PostsList from './PostsList';

import './Posts.scss';

class PostsContainer extends React.Component{

    state = {
        posts: []
    };

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({ posts: response.data }))
        .catch(error => console.log(error));
    }

    render(){
        const { posts } = this.state;
        const postsLimit = posts.slice(0, 3);
        return(
            <div className="d-flex flex-column justify-content-center text-center my-5">
                <Title>Blog</Title>
                <PostsList data={postsLimit} />
            </div>
        );
    }
}

export default PostsContainer;