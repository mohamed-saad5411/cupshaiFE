'use client'
import Image from 'next/image'
import React from 'react'
import user from '../../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'
import logo from '../../../../../public/assets/img/b505edfd2aeaa2ce29ce9d95091419170afd5c42.jpg'
import Link from 'next/link'

export default function FavAds() {
  const data: { id: number }[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 9 }]

  return (
    <section className='md:p-4'>
      <div className='md:shadow-md md:p-6 rounded-lg bg-white overflow-hidden'>
        <h4>Favorite Ads</h4>

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-4 text-start">
            {data.map((ele) => (
              <div key={ele.id} className="w-[290px] h-[320px] col-span-1 p-3 rounded-md">
                <div className='rounded-md overflow-hidden bg-white shadow-md'>
                  <Link href={'/Details'}>
                    <div className='relative w-full h-[180px] overflow-hidden'>
                      <Image
                        src={logo}
                        alt="Ad image"
                        fill
                        style={{ objectFit: 'cover' }}
                        className='rounded-t-md hover:scale-[1.1] transition-all duration-600'
                      />
                      <div className='flex items-center bottom-2 left-3 absolute'>
                        <div className='h-[2rem] w-[2rem] me-1.5'>
                          <Image
                            src={user}
                            alt="User avatar"
                            fill
                            style={{ objectFit: 'cover' }}
                            className='rounded-full'
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
                        <p className='text-gray-400'>Vehicles</p>
                        <p>BMW 5series GT car</p>
                        <h5>Price : <span>500</span>$</h5>
                      </div>
                      <div className='py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px]'>
                        <p className='p-sm text-gray-400'>
                          <i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt
                        </p>
                        <p className='p-sm text-gray-400'>
                          <i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button className='btn main-btn mt-6 w-full'>View More</button>
        </div>
      </div>
    </section>
  )
}
