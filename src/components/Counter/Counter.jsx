import React, {useEffect} from 'react'
import {TbHeartPlus, TbStethoscope} from 'react-icons/tb'
import {GiLoveInjection} from 'react-icons/gi'
import Aos from 'aos'
import aos from 'aos/dist/aos.css'

import './Counter.css'

export default function Counter() {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

  return (
    <div id='counter'>
        <img src={require('../../Assets/images (4).jpg')} alt='bg' />
        <div className='container counter-wrap'>
        
            <div data-aos='fade-up'>
                <span><TbHeartPlus /></span>
                <p>+34843</p>
                <h6>Happy Clients</h6>
            </div>
            <div data-aos='fade-down'>
                <span><TbStethoscope /></span>
                <p>+45345</p>
                <h6>Departments</h6>
            </div>
            <div data-aos='fade-up'>
                <span><GiLoveInjection /></span>
                <p>+54926</p>
                <h6>Vaccinations</h6>
            </div>
            <div data-aos='fade-down'>
                <span><TbHeartPlus /></span>
                <p>+34843</p>
                <h6>Successful Operation</h6>
            </div>
        </div>
    </div>
  )
}
