'use client'

import Image from 'next/image'
import React from 'react'
import loginLogo from '../../../../public/assets/img/login logo.jpg'
import Link from 'next/link'

export default function Details() {
    return (
        <section className='bg-gray-100'>
            <div className="container p-8 bg-gray-50 rounded-md">
                <div className="grid lg:grid-cols-2 bg-white rounded-md shadow-md p-3 items-start">
                    {/* Left Image */}
                    <div className="col-span-1 hidden md:block p-3 bg-gray-200 rounded-md">
                        <div className='w-full rounded-md overflow-hidden'>
                            <Image
                                src={loginLogo}
                                alt="Product"
                                className='w-full h-auto'
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-span-1 p-3 md:mt-14 lg:mt-0">
                        <div>
                            {/* Header */}
                            <div className='border-b border-gray-300 mb-5 pb-5'>
                                <div className='flex items-center justify-between w-full'>
                                    <h3>iPhone 11 Pro Max</h3>
                                    <div className='flex gap-4'>
                                        <i className="fa-md text-gray-600 fa-solid fa-share-nodes"></i>
                                        <i className="fa-md text-gray-600 fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <p className='text-gray-400 mt-1'>Alex, Egypt</p>
                                <h5 className='mt-3'><span>7000 </span>EGP</h5>
                            </div>

                            {/* Information */}
                            <div className='pb-5'>
                                <h3 className='mb-2'>Information</h3>
                                <ul className='list-disc px-6'>
                                    <li className='font-bold text-[14px] my-1'>Condition: <span className='font-light'>Used</span></li>
                                    <li className='font-bold text-[14px] my-1'>Brand: <span className='font-light'>Apple</span></li>
                                    <li className='font-bold text-[14px] my-1'>Model: <span className='font-light'>Mackbook Pro</span></li>
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className='flex gap-2 items-center'>
                                <Link href={'/Contact'} className='btn main-btn flex-1 flex items-center justify-center gap-2'>
                                    <i className="fa-solid fa-phone"></i> Call Now
                                </Link>
                                <button className='btn secondary-btn w-12 h-12 flex items-center justify-center'>
                                    <i className="fa-regular text-[#09537C] fa-comment-dots"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
