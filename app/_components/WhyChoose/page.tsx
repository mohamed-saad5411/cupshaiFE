'use client'
import Image from 'next/image'
import React from 'react'
import clickLogo from '../../../../public/assets/img/click logo.png'
import securityLogo from '../../../../public/assets/img/security logo.png'
import priceLogo from '../../../../public/assets/img/price logo.png'
import whyLogo from '../../../../public/assets/img/f548660ec27ca1cecf4fb8ff726d51c31faefdbb.jpg'

export default function WhyChoose() {
    return (
        <section className='my-18'>
            <div className="container">
                <div className="grid lg:grid-cols-2 justify-center items-center">

                    {/* Left Image */}
                    {/* <div className="col-span-1">
                        <div className='w-[90%] md:w-[80%] md:m-auto lg:m-0 lg:w-[75%] lg:rounded-tr-[7rem] rounded-tr-[4rem] bg-[#B4BABE80] h-full'>
                            <Image
                                src={whyLogo}
                                alt="Why Choose Be3ly"
                                className='lg:rounded-tr-[7rem] rounded-tr-[4rem]'
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div> */}
                    <div className="col-span-1 hidden md:block">
                        <div className="w-[90%] md:w-[80%] md:m-auto lg:m-0 lg:w-[580px] lg:rounded-tr-[7rem] rounded-br-lg rounded-tr-[4rem] bg-[#B4BABE80] h-[510px] relative">
                            <Image
                                src={whyLogo}
                                alt="Login Logo"
                                className="lg:rounded-tr-[7rem] rounded-tr-[4rem] lg:translate-y-13"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-span-1 mt-14 lg:mt-0">
                        <div className='container'>
                            <h6 className='mb-4'>Why Choose <span>Be3ly</span></h6>

                            {/* Security */}
                            <div className='sm:flex sm:items-center grid grid-cols-4 items-center mb-5'>
                                <div className='w-[3rem] h-[3rem] col-span-1 me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                                    <Image
                                        src={securityLogo}
                                        alt="Security"
                                        className='w-1/2 h-1/2'
                                    />
                                </div>
                                <div className='col-span-3'>
                                    <p className='parag-24'>Security</p>
                                    <p className='parag-18'>We provide a security system to protect your data.</p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className='sm:flex sm:items-center grid grid-cols-4 items-center mb-5'>
                                <div className='w-[3rem] h-[3rem] col-span-1 me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                                    <Image
                                        src={priceLogo}
                                        alt="Price"
                                        className='w-1/2 h-1/2'
                                    />
                                </div>
                                <div className='col-span-3'>
                                    <p className='parag-24'>Price</p>
                                    <p className='parag-18'>Buy and sell anything at your preferred price.</p>
                                </div>
                            </div>

                            {/* Easy Way */}
                            <div className='sm:flex sm:items-center grid grid-cols-4 items-center'>
                                <div className='w-[3rem] h-[3rem] col-span-1 me-3 flex items-center justify-center rounded-full bg-[#1CA49926]'>
                                    <Image
                                        src={clickLogo}
                                        alt="Easy Way"
                                        className='w-1/2 h-1/2'
                                    />
                                </div>
                                <div className='col-span-3'>
                                    <p className='parag-24'>Easy way</p>
                                    <p className='parag-18'>We make it simple and easy to meet all of your needs.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
