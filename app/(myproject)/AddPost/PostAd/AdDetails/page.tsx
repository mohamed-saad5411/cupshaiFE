'use client'
import React from 'react'
import Link from 'next/link'

export default function AdDetails() {
  return (
    <div className='w-full my-5'>
      <div className='flex items-center justify-between'>
        <form className='bg--300 w-full'>
          <div className='mb-4 w-full'>
            <label htmlFor="adPrice" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              <h4>Add Price*</h4>
            </label>
            <input type="number" id="adPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Price" required />
          </div>

          <div className='mb-4 w-full'>
            <label htmlFor="PriceType" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              <h4>Price Type*</h4>
            </label>
            <input type="text" id="PriceType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select An Option" required />
          </div>

          <div className='mb-4 w-full'>
            <label htmlFor="currency" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              <h4>Select Currency*</h4>
            </label>
            <input type="text" id="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Currency" required />
          </div>

          <div className='mb-4 w-full'>
            <label htmlFor="adDesc" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              <h4>Ad Description*</h4>
            </label>
            <textarea rows={4} id="adDesc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input A Description" required></textarea>
          </div>

          <div className='mb-4 w-full'>
            <label htmlFor="itemCondition" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              <h4>Item Condition*</h4>
            </label>
            <input type="text" id="itemCondition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select An Option" required />
          </div>

          <div className="flex justify-between">
            <Link href='/AddPost/PostAd/AdInfo'>
              <button type="button" className="btn mt-3 secondary-btn me-2">Previous Step</button>
            </Link>
            <Link href='/AddPost/PostAd/UserInfo'>
              <button type="button" className="btn mt-3 main-btn">Next Step</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
