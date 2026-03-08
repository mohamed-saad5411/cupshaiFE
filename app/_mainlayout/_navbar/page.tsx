'use client'

import Link from 'next/link'
import usaFlagLogo from '../../../../public/assets/img/Flag_of_the_United_States.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { id: 1, name: 'Home', href: '/', current: true },
  { id: 2, name: 'Electronics', href: '/Electronics', current: false },
  { id: 3, name: 'Watches', href: '/Watches', current: false },
  { id: 4, name: 'Furniture', href: '/Furniture', current: false },
  { id: 5, name: 'Jobs', href: '/Jobs', current: false },
  { id: 6, name: 'Clothes', href: '/Clothes', current: false },
  { id: 7, name: 'All Categories', href: '/', current: false },
  { id: 8, name: 'About Us', href: '/About', current: false },
  { id: 9, name: 'Contact Us', href: '/Contact', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {



  return <>
  <nav className='bg-red-700 flex items-center justify-center'>
    <h1>navbar</h1>
  </nav>
  </>

}



