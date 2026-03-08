'use client'
import Image from 'next/image'
import React from 'react'
import user from '../../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'

export default function MyAds() {
  // لو عايزين نضيف أكثر من اعلان في المستقبل
  const myAds: { id: number; title: string; img: string | any}[] = [
    { id: 1, title: 'Sample Ad 1', img: user },
    { id: 2, title: 'Sample Ad 2', img: user },
  ]

  return (
    <section className='p-4'>
      <div className='shadow-md p-6 rounded-lg bg-white overflow-hidden'>
        <h4>My Ads</h4>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          {myAds.map(ad => (
            <div key={ad.id} className='w-full h-[12rem] rounded-md overflow-hidden bg-red-500'>
              <Image
                src={ad.img}
                alt={ad.title}
                className='w-full h-full object-cover'
                // object-cover عشان الصورة تملى العنصر بدون تشويه
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
