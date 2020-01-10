import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaGlobeAmericas } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';

import Social from '../Social/Social';

import './Footer.scss';


const Footer = () => (
    <footer className="o-bg-dark text-white py-3">
        <div className="container">
            {/* <div className="d-flex justify-content-between flex-wrap"> */}
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 footer__div my-2">
                    <h1 className="o-font-lg">M.O</h1>
                    <p className="o-font-sm">
                    Imperdiet parturient eleifend scelerisque natoque parturient rutrum mus eros dis ullamcorper a ullamcorper.
                    </p>
                    <Social customClass="text-white" />
                </div>
                <div className="col-12 col-sm-6 col-lg-3 footer__div my-2 mt-4">
                    <h6 className="">CONTACT INFO</h6>
                    <div className="o-font-sm">
                        <address className="d-flex">
                        <div className="align-middle mr-2">
                            <FaMapMarkerAlt />
                        </div>
                        <span>Iran - Khorasan Razavi - Mashhad - 50 street</span>
                        </address>
                    </div>
                    <div className="o-font-sm mb-1">
                        <div className="d-flex">
                        <div className="mr-2 o-font-md">
                            <MdLocalPhone />
                        </div>
                        <span><strong>Phone:</strong> [+98] 9339709557</span>
                        </div>
                    </div>
                    <div className="o-font-sm">
                        <div className="d-flex">
                        <div className="mr-2 o-font-md">
                            <FaEnvelope />
                        </div>
                        <span className="mt-1"><strong>E-mail:</strong> <a href="mailto:vitateachcom@gmail.com" className="text-white">vitateachcom@gmail.com</a></span>
                        </div>
                    </div>
                    <div className="o-font-sm mb-1">
                        <div className="d-flex">
                        <div className="mr-2 o-font-md">
                            <FaGlobeAmericas />
                        </div>
                        <span className="mt-1"><strong>Website:</strong> <a href="https://vitateach.com" className="text-white">vitateach.com</a></span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 footer__div my-2 mt-4">
                    <h6 className="">ADDITIONAL LINKS</h6>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/" className="text-white o-font-sm">Services</a>
                        </li>
                        <li>
                            <a href="/" className="text-white o-font-sm">Blog</a>
                        </li>
                        <li>
                            <a href="/" className="text-white o-font-sm">Contact</a>
                        </li>
                        <li>
                            <a href="/" className="text-white o-font-sm">About</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 footer__div my-2 mt-4">
                    <h6 className="">EVENTS</h6>
                    <ul className="list-unstyled">
                        <li className="o-font-sm mb-1">
                            <a href="/" className="text-white o-font-sm"><strong>First Festival</strong></a> - February 3, 2020
                        </li>
                        <li className="o-font-sm mb-1">
                            <a href="/" className="text-white o-font-sm"><strong>Second Festival</strong></a> - March 4, 2020
                        </li>
                        <li className="o-font-sm mb-1">
                            <a href="/" className="text-white o-font-sm"><strong>Third Event</strong></a> - June 25, 2021
                        </li>
                        <li className="o-font-sm mb-1">
                            <a href="/" className="text-white o-font-sm"><strong>Global Festival</strong></a> - December 13, 2022
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="bg-light" />
            <div className="d-flex justify-content-between flex-wrap">
                <p className="mb-1 o-font-sm">M.O by Mohammad Oftadeh. All rights reserved.</p>
                <div className="d-flex">
                    <a href="/" className="text-white o-font-sm mr-3">Privacy Policy</a>
                    <a href="/" className="text-white o-font-sm">Terms and Conditions</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;