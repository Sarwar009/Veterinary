import React from 'react'
import { ServiceData } from './ServiceData.js'

import './Service.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Service() {

    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div id='service'>
            <div className='container service'>
                <div data-aos='fade-down'>
                    <h1>Our Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div className='service_details'>
                    {
                        ServiceData.map((data) => 
                            <div key={data.index} className='service_card'>
                                <h4 data-aos='fade-down'>{data.name}</h4>
                                <img src={data.img} alt='service1' data-aos='flip-down'/>
                                <p data-aos='fade-up'>{data.descrip}</p>
                                
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

