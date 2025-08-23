import React from 'react'
import Container from './Container'
import { useLocation } from 'react-router'

const BreadCrumb = () => {
     let location = useLocation().pathname
     let usePathName = location.split("/")[1]
    return (
        <>
            <Container>
                <div className='my-[80px] flex gap-4 text-[#808080]'>
                    <h3>Home</h3>
                    <h3>/</h3>
                    <h3>{usePathName}</h3>
                </div>
            </Container>
        </>
    )
}

export default BreadCrumb
