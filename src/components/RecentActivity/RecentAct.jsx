import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './RecentAct.css'

export default function RecentAct() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div id='recent'>
      <div className='container'>
        <div className='title mb-3' data-aos='fade-up'>
          <h1>Recent Posts</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='posts'>
          <div className='post'>
            <img src={require('../../Assets/images (5).jpg')} alt='recent' data-aos='fade-up' />
            <h4 data-aos='fade-down'>As a veterinarian and lover of animals</h4>
            <p data-aos='fade-up'>February 25,2023</p>
            <p data-aos='fade-down'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button className='btn btn-primary' data-aos='fade-up'>Read More+</button>
          </div>
          <div className='post'>
            <img src={require('../../Assets/images (5).jpg')} alt='recent' data-aos='fade-up' />
            <h4 data-aos='fade-down'>As a veterinarian and lover of animals</h4>
            <p data-aos='fade-up'>February 25,2023</p>
            <p data-aos='fade-down'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button className='btn btn-primary' data-aos='fade-up'>Read More+</button>
          </div>
          <div className='post'>
            <img src={require('../../Assets/images (5).jpg')} alt='recent' data-aos='fade-up' />
            <h4 data-aos='fade-down'>As a veterinarian and lover of animals</h4>
            <p data-aos='fade-up'>February 25,2023</p>
            <p data-aos='fade-down'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button className='btn btn-primary' data-aos='fade-up'>Read More+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
