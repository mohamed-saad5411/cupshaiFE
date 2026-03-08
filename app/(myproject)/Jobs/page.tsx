'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import appLogo from '../../../../public/assets/img/b505edfd2aeaa2ce29ce9d95091419170afd5c42.jpg'
import userLogo from '../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import Electronicss from '../../../../public/assets/img/laptop.png'
import sofa from '../../../../public/assets/img/sofa.png'
import clothes from '../../../../public/assets/img/clothes.png'
import watch from '../../../../public/assets/img/watch.png'
import automotive from '../../../../public/assets/img/automotive.png'
import job from '../../../../public/assets/img/job.jpg'

export default function Jobs() {

    const data: { id: number }[] = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
        { id: 5 }, { id: 6 }, { id: 7 }, { id: 9 }
    ]

    const [noOfSli, setnoOfSli] = useState(2);

    const slidedata: { id: number, name: string, logo: StaticImageData }[] = [
        { id: 1, name: 'Electronics', logo: Electronicss },
        { id: 2, name: 'Vehicle', logo: automotive },
        { id: 3, name: 'Watches', logo: watch },
        { id: 4, name: 'Jobs', logo: job },
        { id: 5, name: 'Watches', logo: watch },
        { id: 6, name: 'Clothes', logo: clothes },
        { id: 7, name: 'Furniture', logo: sofa },
        { id: 8, name: 'Clothes', logo: clothes },
        { id: 9, name: 'Watches', logo: watch },
    ]

    useEffect(() => {
        setnoOfSli(noOfSlides())
    }, [])

    function noOfSlides() {
        if (window?.innerWidth > 600 && window?.innerWidth < 900) return 2
        if (window?.innerWidth > 900 && window?.innerWidth < 1200) return 4
        if (window?.innerWidth > 1200) return 7
        return 2
    }

    return <>
        <section className='my-8'>
            <div className='container grid lg:grid-cols-5'>

                {/* Sidebar */}
                <aside>
                    <div className='lg:col-span-1 text-start'>
                        {/* Categories */}
                        <div className='rounded-sm shadow-sm bg-white p-3'>
                            <div className='flex mb-5 items-center justify-between'>
                                <p className='parag-18 text-[#000000]'>Categories</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            {slidedata.map((item) =>
                                <div key={item.id} className="mb-4 ps-1">
                                    <Link href={`/${item.name}`} className="slide-item flex items-center justify-start">
                                        <div className="flex items-center justify-start">
                                            <div className="md:h-[2rem] me-2 h-[2rem] w-[2rem] md:w-[2rem] transition-all slide-icon duration-400 text-[#666666] hover:bg-black rounded-full flex items-center justify-center">
                                                <Image
                                                    src={item.logo}
                                                    className='w-[70%]'
                                                    alt={item.name}
                                                />
                                            </div>
                                            <p className="p-slider text-[#666666] transition-all duration-400 hover:text-black">{item.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Location */}
                        <div className='rounded-sm shadow-sm my-6 bg-white p-3'>
                            <div className='flex items-center justify-between'>
                                <p className='parag-18 text-black'>Location</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className='rounded-sm shadow-sm my-6 bg-white p-3'>
                            <div className='flex items-center justify-between'>
                                <p className='parag-18 text-black'>price range</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Products */}
                <div className='lg:col-span-4'>
                    <div className="container bg--300 text-center">
                        <h6 className='text-start mb-3 ps-3 h-main-item'>Latest Product</h6>
                        <div className="grid lg:grid-cols-3 text-start justify-center bg-green-">
                            {data.map((ele) =>
                                <div key={ele.id} className="col-span-1 p-3 bg-amber- rounded-md">
                                    <div className='rounded-md overflow-hidden bg-white shadow-md'>
                                        <Link href={'/Details'}>
                                            <div className='relative overflow-hidden'>
                                                <Image
                                                    src={appLogo}
                                                    className='rounded-t-md hover:scale-[1.1] transition-all duration-600'
                                                    alt="Product Image"
                                                />
                                                <div className='flex items-center bottom-2 left-3 absolute'>
                                                    <div className='h-[2rem] me-1.5 w-[2rem]'>
                                                        <Image
                                                            src={userLogo}
                                                            className='rounded-full w-full h-full'
                                                            alt="User Avatar"
                                                        />
                                                    </div>
                                                    <p className='text-white'>ahmed zaki</p>
                                                </div>
                                                <div className='flex bg-white top-2 right-3 absolute rounded-full'>
                                                    <div className='h-[3rem] flex items-center justify-center cursor-pointer w-[3rem]'>
                                                        <i className="fa-regular fa-heart hover:text-[#09537C] text-gray-500 fa-xl"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='px-3 pt-3'>
                                                <div className='mb-2.5'>
                                                    <p className='p-slider'>Vehicles</p>
                                                    <p className='p-product-card'>BMW 5series GT car</p>
                                                    <h6 className='h-slider'>Price : <span>500</span>$</h6>
                                                </div>
                                                <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px]'>
                                                    <p className='p-sm p-location-card'><i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt</p>
                                                    <p className='p-sm p-location-card'><i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className='btn main-btn mt-6'>View More</button>
                    </div>
                </div>

            </div>
        </section>
    </>
}
