import React from 'react';

import './Title.scss';

const Title = ({ children }) => (
    <h5 className="position-relative my-5">{children}</h5>
);

export default Title;