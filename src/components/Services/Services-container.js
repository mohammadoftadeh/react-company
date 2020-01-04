import React from 'react';
import {
    FiLayout,
    FiSearch
} from 'react-icons/fi';
import {
    FaHeadset
} from 'react-icons/fa';

import Services from './Services';
import Title from '../Title/Title';

import './Services.scss';

const services = [
    {
        id: 1,
        icon: <FiLayout />,
        title: 'Initial concept',
        description: 'Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores'
    },
    {
        id: 2,
        icon: <FaHeadset />,
        title: 'Support',
        description: 'Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores'
    },
    {
        id: 3,
        icon: <FiSearch />,
        title: 'Analysis',
        description: 'Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores'
    },
]

const ServicesContainer = () => (
    <div className="d-flex flex-column justify-content-center text-center my-5">
        <Title>How We Work</Title>
        <Services data={services} />
    </div>
);

export default ServicesContainer;