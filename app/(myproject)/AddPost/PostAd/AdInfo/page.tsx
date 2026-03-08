'use client'
import React from 'react'
import Link from 'next/link'

export default function AdInfo() {
  return (
    <div className='w-full my-5'>
      <div className='flex items-center justify-between'>
        <form className='bg--300 w-full'>
          <div className='mb-4 w-full'>
            <label htmlFor="adTitle" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              <h4>Add Title*</h4>
            </label>
            <input type="text" id="adTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Title" required />
          </div>

          <div className='mb-4 w-full'>
            <label htmlFor="category" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              <h4>Category*</h4>
            </label>
            <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Category" required />
          </div>

          <Link href='/AddPost/PostAd/AdDetails'>
            <button type="button" className="btn mt-3 main-btn w-full">Next Step</button>
          </Link>
        </form>
      </div>
    </div>
  )
}
