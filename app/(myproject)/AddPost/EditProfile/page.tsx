'use client'
import Image from 'next/image'
import React from 'react'
import user from '../../../../../public/assets/img/a7aadc446db7e2dd06ad98f52b7f40b9c32faa43.jpg'

export default function EditProfile() {
  return (
    <section className='md:p-4'>
      <div className='md:shadow-md md:p-6 rounded-lg bg-white overflow-hidden'>
        <h4>Profile</h4>
        <div className='w-[9.7rem] h-[12rem] my-6 rounded-md overflow-hidden bg-red-500 relative'>
          <Image
            src={user}
            alt="User profile"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className='w-full'>
          <form className='bg--300 w-full'>
            <div className='mb-4 w-full'>
              <label htmlFor="full_name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Full Name*
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Name ..."
                required
              />
            </div>

            <div className='mb-4 w-full'>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className='mb-4 w-full'>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Password*
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="**************"
                required
              />
            </div>

            <div className='mb-4 w-full'>
              <label htmlFor="aboutUser" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                About You
              </label>
              <textarea
                id="aboutUser"
                name="aboutUser"
                rows={4}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write something about yourself..."
              />
            </div>

            <button type="submit" className="mt-4 btn main-btn w-full">Update Profile</button>
          </form>
        </div>
      </div>
    </section>
  )
}
