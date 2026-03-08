'use client'
import Image from 'next/image'
import React from 'react'
import user from '../../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'

export default function Messages() {
  const messages: { id: number; text: string; fromMe: boolean; time: string }[] = [
    { id: 1, text: 'Lorem ipsum dolor elit. Quis, laboriosam!', fromMe: false, time: '9:45 PM' },
    { id: 2, text: 'Aliquid sequi tenetur ab quos nulla doloremque voluptatem fugiat rem.', fromMe: true, time: '9:46 PM' },
    { id: 3, text: 'Lorem ipsum dolor elit. Quis, laboriosam!', fromMe: false, time: '9:47 PM' },
    { id: 4, text: 'Aliquid sequi tenetur ab quos nulla doloremque voluptatem fugiat rem.', fromMe: true, time: '9:48 PM' },
  ]

  return (
    <section className='p-4'>
      <div className='shadow-md p-6 rounded-lg bg-white overflow-hidden'>
        <div className='flex items-center border-b border-gray-300 pb-2'>
          <div className='w-10 h-10 me-3 rounded-full overflow-hidden bg-red-500'>
            <Image src={user} className='w-full h-full' alt="User avatar" />
          </div>
          <h6>Ahmed</h6>
        </div>

        {messages.map(msg => (
          <div
            key={msg.id}
            className={`grid grid-cols-10 items-baseline my-4 p-2 ${
              msg.fromMe ? 'justify-end' : ''
            }`}
          >
            {!msg.fromMe && (
              <div className='w-8 translate-y-3 col-span-1 h-8 rounded-full overflow-hidden bg-amber-500'>
                <Image src={user} className='w-full h-full' alt="User avatar" />
              </div>
            )}
            <div
              className={`p-2 col-span-9 rounded-md ${
                msg.fromMe ? 'rounded-br-none bg-[#f8f8f8] text-right' : 'rounded-bl-none bg-[#f8f8f8]'
              }`}
            >
              <p>{msg.text}</p>
              <p className='text-[#09537C] pt-3'>{msg.time}</p>
            </div>
            {msg.fromMe && (
              <div className='w-8 translate-y-3 col-span-1 ms-3 h-8 rounded-full overflow-hidden bg-gray-400'>
                <Image src={user} className='w-full h-full' alt="User avatar" />
              </div>
            )}
          </div>
        ))}

        <div className='flex justify-between items-center mt-3 p-4 border-2 rounded-md border-gray-100 bg-gray-100'>
          <div className='cursor-pointer h-8 w-8 rounded-full bg-[#1ca499]/15 flex items-center justify-center'>
            <i className="fa-solid fa-image text-[#09537C] "></i>
          </div>
          <input type="text" placeholder="Type your message here" className="input border-0 w-full shadow-sm p-2 rounded-md" />
          <div className='cursor-pointer h-10 w-10 rounded-full bg-[#09537C] flex items-center justify-center'>
            <i className="fa-solid fa-paper-plane text-white "></i>
          </div>
        </div>
      </div>
    </section>
  )
}
