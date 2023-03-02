import React from 'react'
import {BiUpArrowAlt} from 'react-icons/bi'
import { Row } from 'react-bootstrap'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from 'react-icons/fa';
import './Footer.css'

export default function Footer() {
    return (
        <div id='footer'>
            <div className='container'>
                <Row>
                    <div className='col-lg-4 footer_about'>
                        <h1>About</h1>
                        <h6>History</h6>
                        <h6>Our Team</h6>
                        <h6>brand Guidelines</h6>
                        <h6>Terms & Condition</h6>
                        <h6>Privacy Policy</h6>
                    </div>
                    <div className='col-lg-4'>
                        <h1>Services</h1>
                        <h6>How to Order</h6>
                        <h6>Our Product</h6>
                        <h6>Order Status</h6>
                        <h6>Promo</h6>
                        <h6>Payment Method</h6>
                    </div>
                    <div className='col-lg-4'>
                        <h1>Veterinary</h1>
                        <h6>Lorem Ipsum available, but the majanit</h6>
                        <div className='footer_social'>
                            <a href='https://www.facebook.com'><FaFacebookF /></a>
                            <a href='https://www.instagram.com' className='m-1'><FaInstagram /></a>
                            <a href='https://www.linkedIn.com' className='m-1'><FaLinkedinIn /></a>
                            <a href='https://www.twitter.com' className='m-1'><FaTwitter /></a>
                        </div>
                    </div>
                </Row>
                <div className='bottom_to_top'><a href='#hero'><BiUpArrowAlt className='b_to_t'/></a></div>
            </div>
        </div>
    )
}
