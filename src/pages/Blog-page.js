import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import PostsContainer from '../components/Posts/Posts-container';
import Footer from '../components/Footer/Footer';

const BlogPage = () => (
    <>
        <Navbar />
        <PostsContainer limit="13" />
        <Footer />
    </>
);

export default BlogPage;