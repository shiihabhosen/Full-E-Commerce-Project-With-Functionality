import React from 'react'
import Container from '../Component/Container'
import image from '../assets/aboutwoman.png'
import shopicon from '../assets/shopicon.png'
import icardicon from '../assets/cardicon.png'
import salesicon from '../assets/salesicon.png'
import AboutCard from './AboutCard'
import TeamCard from './TeamCard'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'

import Slider from "react-slick";
import Delevery from '../Component/Delevery'
import BreadCrumb from '../Component/BreadCrumb'



const About = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      <Container>
        <BreadCrumb/>
        <div className='mt-[143px]'>
          <div className='flex justify-between items-center w-full h-[609px]'>
            <div className='w-[525px] h-[336px]'>
                <h2 className='text-[54px] font-semibold'>Our Story</h2>
                <p className='pt-p10 pb-4 text-[16px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className='absolute right-0'>
                <img src={image} alt="" />
            </div>
        </div>
              {/* cound section */}
            <div className='flex justify-between'>
                <AboutCard img={shopicon} sectext='10.5k' pera='Sallers active our site'/>
                <AboutCard img={salesicon} sectext='10.5k' pera='Mopnthly Produduct Sale'/>
                <AboutCard img={icardicon} sectext='10.5k' pera='Customer active in our site'/>
                <AboutCard img={salesicon } sectext='10.5k' pera='Anual gross sale in our site'/>
            </div>

            {/* team section  */}
           <Slider {...settings}>
             
              <div>
                <TeamCard teamimg={team1} name='Tom Cruise' pera='Founder & Chairman'/>
              </div>
              <div>
                <TeamCard teamimg={team2} name='Emma Watson' pera='Managing Director'/>
              </div>
             <div>
               <TeamCard teamimg={team3} name='Will Smith' pera='Product Designer'/>
             </div>
              <div>
                <TeamCard teamimg={team1} name='Tom Cruise' pera='Founder & Chairman'/>
              </div>
              <div>
                <TeamCard teamimg={team2} name='Emma Watson' pera='Managing Director'/>
              </div>
             <div>
               <TeamCard teamimg={team3} name='Will Smith' pera='Product Designer'/>
             </div>
              <div>
                <TeamCard teamimg={team1} name='Tom Cruise' pera='Founder & Chairman'/>
              </div>
              <div>
                <TeamCard teamimg={team2} name='Emma Watson' pera='Managing Director'/>
              </div>
             <div>
               <TeamCard teamimg={team3} name='Will Smith' pera='Product Designer'/>
             </div>
              <div>
                <TeamCard teamimg={team1} name='Tom Cruise' pera='Founder & Chairman'/>
              </div>
              <div>
                <TeamCard teamimg={team2} name='Emma Watson' pera='Managing Director'/>
              </div>
             <div>
               <TeamCard teamimg={team3} name='Will Smith' pera='Product Designer'/>
             </div>
              <div>
                <TeamCard teamimg={team1} name='Tom Cruise' pera='Founder & Chairman'/>
              </div>
              <div>
                <TeamCard teamimg={team2} name='Emma Watson' pera='Managing Director'/>
              </div>
             <div>
               <TeamCard teamimg={team3} name='Will Smith' pera='Product Designer'/>
             </div>
        
           </Slider>

           {/* delevery section */}
           <div>
            <Delevery/>
           </div>
        </div>
      </Container>
    </>
  )
}

export default About
