import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Title from '../components/Title/Title';

const AboutPage = () => (
    <>
        <Navbar />
        <div className="d-flex flex-column justify-content-center text-center my-5">
            <Title>About Us</Title>
            <div className="container">
                <img className="mb-5" alt="business" style={{ maxWidth: '75%', height: 'autot' }} src="https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <article>
                    <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="text-justify">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                </article>
            </div>
        </div>
    </>
);

export default AboutPage;