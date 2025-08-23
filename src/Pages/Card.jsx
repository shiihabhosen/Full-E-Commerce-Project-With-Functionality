import React from 'react'
import Container from '../Component/Container'
import Monitor from '../assets/Monitor.png'
import Gamepad from '../assets/Gamepad.png'
import Button from '../Component/Button'
import CardSave from './CardSave'
import BreadCrumb from '../Component/BreadCrumb'

const Card = () => {
    return (
        <>
            <Container>
                <BreadCrumb/>
                <div className='w-full h-[840px]  mt-[180px]  '>
                    <div className='w-full h-[72px] flex justify-around items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-[4px]'>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    <div className='space-y-10'>
                        <CardSave img={Monitor} itemname='LCD Monitor' price='$650' pise='01' total='$650' />
                        <CardSave img={Gamepad} itemname='H1 Gamepad' price='$550' pise='02' total='$1100' />
                    </div>
                    <div className='flex  justify-between mt-5'>
                        <Button className='border-2 border-gray-200 bg-white ' btntext='Return To Shop' />
                        <Button className='border-2 border-gray-200 bg-white ' btntext='Update Cart' />
                    </div>
                    <div className='w-full h-[324px] mt-[80px] flex justify-between '>
                        <div className=''>
                            <input type="text" placeholder='Coupon Code' className='w-[300px] h-[56px] py-4 px-6 border-2 border-gray-200  focus:outline-none' />
                            <Button className='border-2 border-gray-200 text-white ' btntext='Apply Coupon' />
                        </div>
                        <div className='w-[470px] h-full  border-2 border-black rounded-[4px] '>
                            <div className='py-[18px] px-6 '>
                                <h4 className='text-[20px] font-medium'>Cart Total</h4>
                                <div className='flex justify-between border-b-2 border-gray-200 mt-6 pb-4'>
                                    <p>Subtotal:</p>
                                    <p>$1750</p>
                                </div>
                                <div className='flex justify-between border-b-2 border-gray-200 mt-6 pb-4'>
                                    <p>Shipping:</p>
                                    <p>Free</p>
                                </div>
                                <div className='flex justify-between mt-6 '>
                                    <p>Total:</p>
                                    <p>$1750</p>
                                </div>
                            </div>
                             <div className='text-center '>
                                <Button className='text-white' btntext='Procees to checkout' />
                             </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Card
