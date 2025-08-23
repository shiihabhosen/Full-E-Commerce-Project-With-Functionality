import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { CiInstagram, } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

const TeamCard = (props) => {
    return (
        <>
            <div className=' w-full h-[564px] '>
                <div className='h-full w-[370px]'>
                    <div>
                        <img src={props.teamimg} alt="" />
                    </div>
                    <div className='mt-[32px]'>
                        <h5 className='text-[32px] font-medium'>{props.name}</h5>
                        <p className='py-1'>{props.pera}</p>
                        <div className='flex gap-4'>
                            <a href="https://x.com/shiihabhosen" target='blank'><CiTwitter className='text-2xl' /></a>
                            <a href="https://www.instagram.com/shiihab_hosen/" target='blank'><CiInstagram className='text-2xl' /></a>
                            <a href="https://www.linkedin.com/in/shiihabhosen01/" target='blank'><RiLinkedinLine className='text-2xl' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard
