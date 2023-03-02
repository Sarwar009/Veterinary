import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroImg from '../../../Assets/heroImg.png'
import Image3 from '../../../Assets/images__3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './Hero.css'

const Hero = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <div id='hero'>
      <Container>
        <Row>
          <Col lg={7} data-aos='fade-up'>
            <h1>First I wanted be a Veterinarian</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className='contact_button'>
              <button className='btn btn-primary'>Contact</button>
              <button className='btn btn-service'>Our Service</button>
            </div>
          </Col>
          <Col lg={4} data-aos='fade-left'>
            <div><img src={HeroImg} className='hero_img' alt='heroImg' /></div>
          </Col>
        </Row>
      </Container>
      <div className='bg-white text-black'>
        <Container className='mt-3'>
          <Row className='pt-5'>
            <Col lg={7} className='pt-5' data-aos='fade-down'>
              <h1>As a Veterinarian and lover of animals</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <button className='btn mb-5'>Read more</button>
            </Col>
            <Col lg={4} className='pt-5' data-aos='fade-right'>
              <img src={Image3} alt='img3' />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Hero