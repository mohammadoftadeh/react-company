import React from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ data }) => (
    <div className="d-flex justify-content-center flex-wrap">
        {
            data.map(item => (
                <div className="card o-card m-2 shadow-lg border-0" key={item.id}>
                    <div className="card-body">
                    <h6 className="card-title text-left">
                        <Link to={`/blog/${item.id}`} className="text-dark text-decoration-none">{item.title}</Link>
                    </h6>
                    {/* <p className="card-text">{item.body}</p> */}
                    
                    </div>
                    <div class="card-footer d-flex justify-content-between border-0 bg-white align-items-center">
                        <Link to={`/blog/${item.id}`} class="text-dark">Read More</Link>
                        <small class="o-text-primary">13 Feb 2020</small>
                    </div>
                </div>
            ))
        }
    </div>
);

export default PostsList;