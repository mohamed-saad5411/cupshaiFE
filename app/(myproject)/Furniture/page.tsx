'use client'
import Image from 'next/image'
import Link from 'next/link'
import appLogo from '../../../../public/assets/img/b505edfd2aeaa2ce29ce9d95091419170afd5c42.jpg'
import userLogo from '../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import Electronicss from '../../../../public/assets/img/laptop.png'
import sofa from '../../../../public/assets/img/sofa.png'
import clothes from '../../../../public/assets/img/clothes.png'
import watch from '../../../../public/assets/img/watch.png'
import automotive from '../../../../public/assets/img/automotive.png'
import job from '../../../../public/assets/img/job.jpg'

export default function Furniture() {
    const data = Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }))

    const slidedata = [
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

    return (
        <section className='my-8'>
            <div className='container grid lg:grid-cols-5 gap-4'>
                {/* Sidebar */}
                <aside className='lg:col-span-1 text-start'>
                    <div className='rounded-sm shadow-sm bg-white p-3'>
                        <div className='flex mb-5 items-center justify-between'>
                            <p className='parag-18 text-black'>Categories</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        {slidedata.map((item) => (
                            <div key={item.id} className="mb-4 ps-1">
                                <Link href={`/${item.name}`} className="flex items-center gap-2">
                                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200">
                                        <Image src={item.logo} alt={item.name} className='w-[70%]' />
                                    </div>
                                    <p className='text-gray-600'>{item.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Location */}
                    <div className='rounded-sm shadow-sm my-6 bg-white p-3 flex justify-between items-center'>
                        <p className='parag-18 text-black'>Location</p>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>

                    {/* Price Range */}
                    <div className='rounded-sm shadow-sm my-6 bg-white p-3 flex justify-between items-center'>
                        <p className='parag-18 text-black'>Price Range</p>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </aside>

                {/* Products */}
                <div className='lg:col-span-4'>
                    <div className="bg-gray-50 text-center p-4 rounded-md">
                        <h6 className='text-start mb-3 ps-3 h-main-item'>Latest Product</h6>
                        <div className="grid lg:grid-cols-3 gap-4 text-start">
                            {data.map((ele) => (
                                <div key={ele.id} className="rounded-md overflow-hidden bg-white shadow-md">
                                    <Link href={'/Details'}>
                                        <div className='relative overflow-hidden'>
                                            <Image
                                                src={appLogo}
                                                alt="Product"
                                                className='rounded-t-md hover:scale-[1.1] transition-all duration-600'
                                            />
                                            <div className='absolute top-2 right-3 flex rounded-full bg-white'>
                                                <div className='h-12 w-12 flex items-center justify-center cursor-pointer'>
                                                    <i className="fa-regular fa-heart hover:text-[#09537C] text-gray-500 fa-xl"></i>
                                                </div>
                                            </div>
                                            <div className='absolute bottom-2 left-3 flex items-center'>
                                                <div className='h-8 w-8 me-2'>
                                                    <Image src={userLogo} alt="User" className='rounded-full w-full h-full' />
                                                </div>
                                                <p className='text-white'>ahmed zaki</p>
                                            </div>
                                        </div>
                                        <div className='px-3 pt-3'>
                                            <p className='p-slider'>Furniture</p>
                                            <p className='p-product-card'>Modern Sofa Set</p>
                                            <h6 className='h-slider'>Price : <span>500</span>$</h6>
                                            <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t border-gray-200'>
                                                <p><i className="fa-solid fa-location-dot me-1"></i>Alexandria, Egypt</p>
                                                <p><i className="fa-solid fa-clock me-1"></i>Feb 18, 2023</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <button className='btn main-btn mt-6'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
