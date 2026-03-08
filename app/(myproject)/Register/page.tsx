'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import loginLogo from '../../../../public/assets/img/login logo.jpg'
import Link from 'next/link'
import { useFormik, FormikHelpers } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/navigation'

// 👇 Type for form values
export interface RegisterFormValues {
  name: string
  email: string
  password: string
}

// 👇 Type for API response
export interface RegisterResponse {
  success: boolean
  data?: Record<string, any>
  [key: string]: any
}

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // 👇 handle register
  async function handleRegister(
    values: RegisterFormValues,
    _formikHelpers?: FormikHelpers<RegisterFormValues>
  ) {
    setIsLoading(true)
    try {
      const { data } = await axios.post<RegisterResponse>(
        'https://website-production-279d.up.railway.app/api/v1/auth/register',
        values
      )
      if (data?.success) {
        router.push('/Login')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: handleRegister
  })

  return (
    <section className="my-18">
      <div className="container">
        <div className="grid lg:grid-cols-2 justify-center items-center">
          {/* Left side image */}
          <div className="col-span-1 hidden md:block">
            <div className="w-[90%] md:w-[80%] md:m-auto lg:m-0 lg:w-[580px] lg:rounded-tr-[7rem] rounded-br-lg rounded-tr-[4rem] bg-[#B4BABE80] h-[510px] relative">
              <Image
                src={loginLogo}
                alt="Login Logo"
                fill
                style={{ objectFit: 'cover' }}
                className="lg:rounded-tr-[7rem] rounded-tr-[4rem]"
              />
            </div>
          </div>

          {/* Form */}
          <div className="col-span-1 md:mt-14 lg:mt-0">
            <div className="container bg-white p-6 rounded-md shadow-md">
              <h6 className="head-24">Sign up</h6>

              {/* Social buttons */}
              <div className="w-full my-4 flex items-center justify-between">
                <button type="button" className="md:btn btn-res w-[48%] md:secondary-btn">
                  <div className="flex items-center justify-between">
                    <i className="fa-brands fa-google me-1"></i>
                    <p>Sign up with Google</p>
                  </div>
                </button>
                <button type="button" className="md:btn btn-res w-[48%] md:secondary-btn">
                  <div className="flex items-center justify-between">
                    <i className="fa-brands me-1 fa-square-facebook"></i>
                    <p>Sign up with Facebook</p>
                  </div>
                </button>
              </div>

              {/* Formik Form */}
              <form onSubmit={formik.handleSubmit} className="bg--300 w-full my-4">
                <div className="mb-4 w-full">
                  <label htmlFor="full_name" className="block mb-1 head-16 text-gray-900 dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Your Name ..."
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label htmlFor="email" className="block mb-1 head-16 text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="example@gmail.com"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label htmlFor="password" className="block mb-1 head-16 text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="**************"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-8 flex items-center w-full">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="block ms-1 text-sm font-medium text-gray-900 dark:text-white">
                    Keep me login
                  </label>
                </div>

                {isLoading ? (
                  <button type="button" className="btn main-btn w-full">
                    <i className="fa-solid fa-lg fa-circle-notch fa-spin"></i>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className="btn main-btn w-full"
                  >
                    Sign up
                  </button>
                )}
              </form>

              <div className="w-full mt-8">
                <p>Already have an account?</p>
                <Link href="/Login" className="btn mt-1 w-full secondary-btn">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
