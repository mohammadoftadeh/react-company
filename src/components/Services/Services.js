import React from 'react';

const Services = ({ data }) => (
    <div className="d-flex justify-content-center flex-wrap">
        {
            data.map(item => (
                <div className="services-box d-flex flex-column align-items-center m-3" key={item.id}>
                    <div className="services-icon o-bg-blue-light o-text-primary mb-3">{item.icon}</div>
                    <strong className="d-block">{item.title}</strong>
                    <p className="text-center">{item.description}</p>
                </div>
            ))
        }
    </div>
);

export default Services;