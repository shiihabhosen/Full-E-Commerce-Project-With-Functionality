import React from 'react'
import Container from '../Component/Container'
import Button from '../Component/Button'
import { NavLink } from 'react-router'
import BreadCrumb from '../Component/BreadCrumb'

const ErrorPage = () => {
  return (
    <>
      <Container>
        <BreadCrumb/>
        <div className='mt-[200px] text-center'>
            <h1 className='text-[110px] font-medium'>404 Not Found</h1>
            <p className='pt-10 pb-[80px]'>Your visited page not found. You may go home page.</p>
           <NavLink to='/'>
             <Button btntext='Back to home page' className='text-white'/>
           </NavLink>
        </div>
      </Container>
    </>
  )
}

export default ErrorPage
