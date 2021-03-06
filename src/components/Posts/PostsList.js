import React from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ data }) => (
    <div className="d-flex justify-content-center flex-wrap mb-3">
        {
            data.map(item => (
                <div className="card o-card m-2 shadow-lg border-0" key={item.id}>
                    <div className="card-body">
                    <h6 className="card-title text-left">
                        <Link to={`/blog/${item.id}`} className="text-dark text-decoration-none">{item.title}</Link>
                    </h6>                    
                    </div>
                    <div className="card-footer d-flex justify-content-between border-0 bg-white align-items-center">
                        <Link to={`/blog/${item.id}`} className="text-dark">Read More</Link>
                        <small className="o-text-primary">13 Feb 2020</small>
                    </div>
                </div>
            ))
        }
    </div>
);

export default PostsList;