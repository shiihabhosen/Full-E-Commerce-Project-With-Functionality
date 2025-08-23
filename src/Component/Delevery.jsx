import React from 'react'
import DeleveryCard from './DeleveryCard'
import delevery from '../assets/delevery.png'
import headphone from '../assets/head.png'
import done from '../assets/done.png'
import Container from './Container'

const Delevery = () => {
    return (
        <Container>
            <div className='mt-[140px] h-[300px] '>
                <div className='grid grid-cols-3'>
                    <DeleveryCard img={delevery} sectext='FREE AND FAST DELIVERY' pera='Free delivery for all orders over $140' />
                    <DeleveryCard img={headphone} sectext='24/7 CUSTOMER SERVICE' pera='Friendly 24/7 customer support' />
                    <DeleveryCard img={done} sectext='MONEY BACK GUARANTEE' pera='We reurn money within 30 days' />
                </div>
            </div>
        </Container>
    )
}

export default Delevery
