import React from 'react'
import WishlistCard from './WishlistCard'
import Button from '../Component/Button'
import Container from '../Component/Container'
import bag from '../assets/bag.png'
import light from '../assets/light.png'
import gameber from '../assets/gameber.png'
import tshirt from '../assets/t.png'
import laptop from '../assets/laptop.png'
import Monitor from '../assets/Monitor.png'
import Gamepad from '../assets/Gamepad.png'
import Keyboard from '../assets/Keyboard.png'


const Wishlist = () => {
    return (
        <>
            <Container>
                <div className='mt-[95px]'>
                    <div className='flex justify-between items-center '>
                        <p>Wishlist (4)</p>
                        <Button btntext='Move All To Bag' className='bg-white border-2 hover:bg-[#DB4444] border-gray-300 hover:text-white' />
                    </div>
                    <div className='flex justify-between '>
                        <WishlistCard img={bag} productName='Gucci duffle bag' price='$960' oldprice='$1160'>
                            <div className='w-[55px] h-[26px] rounded-[4px] bg-[#DB4444] flex justify-center items-center text-white text-[12px]'>
                                20%
                            </div>

                        </WishlistCard>
                        <WishlistCard img={light} productName='Gucci duffle bag' price='$960' oldprice='$1160' />
                        <WishlistCard img={gameber} productName='Gucci duffle bag' price='$960' oldprice='$1160' />
                        <WishlistCard img={tshirt} productName='Gucci duffle bag' price='$960' oldprice='$1160' />
                    </div>
                    {/*secund card section*/}
                    <div className='flex justify-between'>
                        <div className=' flex items-center gap-4'>
                            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
                            <h4 className='text-[20px]'>Just For You</h4>
                        </div>
                        <Button btntext='See All' className='bg-white border-2 hover:bg-[#DB4444] border-gray-300 hover:text-white ' />
                    </div>
                    <div className='flex justify-between'>
                        <WishlistCard img={laptop} productName='Gucci duffle bag' price='$960' oldprice='$1160' reviwretting='(65)'>
                            <div className='w-[55px] h-[26px] rounded-[4px] bg-[#DB4444] flex justify-center items-center text-white text-[12px]'>
                                20%
                            </div>
                        </WishlistCard>
                        <WishlistCard img={Monitor} productName='Gucci duffle bag' price='$960' oldprice='$1160' reviwretting='(65)' />
                        <WishlistCard img={Gamepad} productName='Gucci duffle bag' price='$960' oldprice='$1160' reviwretting='(65)'>
                            <div className='w-[55px] h-[26px] rounded-[4px] bg-[#00FF66] flex justify-center items-center text-white text-[12px]'>
                                NEW
                            </div>
                        </WishlistCard>
                        <WishlistCard img={Keyboard} productName='Gucci duffle bag' price='$960' oldprice='$1160' reviwretting='(65)' />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Wishlist
