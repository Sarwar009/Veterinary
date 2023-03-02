import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Aboutdata } from './AboutData.js'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './About.css'

const About = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

  return (
    <div id='about'>
        <Container>
            <div className='text-center'>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='about-us mt-5'>
                {
                    Aboutdata.map((data) =>
                    <div key={data.id} className='about-details' >
                        <img src={data.img} className='about-img'  data-aos='fade-up' alt={data.name}/>
                        <h5  data-aos='fade-up'>{data.name}</h5>
                        <h6  data-aos='fade-up'>{data.title}</h6>
                        <div className='about_social'  data-aos='fade-up'>
                            <a href='https://www.facebook.com'>{data.fb}</a>
                            <a href='https://www.instagram.com' className='m-1'>{data.insta}</a>
                            <a href='https://www.linkedIn.com' className='m-1'>{data.linkedIn}</a>
                            <a href='https://www.twitter.com' className='m-1'>{data.twitter}</a>
                        </div>
                    </div>)
                }
            </div>
        </Container>
    </div>
  )
}

export default About