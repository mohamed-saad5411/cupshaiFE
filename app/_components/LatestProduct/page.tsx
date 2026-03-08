'use client';
import appLogo from '../../../../public/assets/img/b505edfd2aeaa2ce29ce9d95091419170afd5c42.jpg';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: number;
  name: { en: string };
  description: { en: string };
  image_url?: string;
}

export default function LatestProduct() {
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAllCategories() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        'https://website-production-279d.up.railway.app/api/v1/categories'
      );
      if (data.success) {
        setAllCategories(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <section className="my-8">
      <h2 className="text-center mb-3 h-main-item">Latest Product</h2>

      {isLoading ? (
        <div className="text-5xl my-30 text-center">
          <i className="fa-solid fa-spinner fa-spin"></i>
        </div>
      ) : (
        <div className="container text-center">
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
            {allCategories.map((category) => (
              <div key={category.id} className="col-span-1 p-3 rounded-md">
                <div className="rounded-md overflow-hidden bg-white shadow-md">
                  <Link href={'/Details'}>
                    <div className="relative w-full h-[12rem] overflow-hidden">
                      <Image
                        src={category.image_url || appLogo}
                        alt={category.name?.en || 'Category'}
                        fill
                        className="object-cover rounded-t-md hover:scale-[1.1] transition-all duration-600"
                      />
                      <div className="flex bg-white top-2 right-3 absolute rounded-full">
                        <div className="h-[3rem] flex items-center justify-center cursor-pointer w-[3rem]">
                          <i className="fa-regular fa-heart hover:text-[#09537C] text-gray-500 fa-xl"></i>
                        </div>
                      </div>
                    </div>

                    <div className="px-3 pt-3">
                      <div className="mb-2.5">
                        <p className="p-slider">
                          {(category.name?.en || 'Vehicles')
                            .split(' ')
                            .splice(0, 2)
                            .join(' ')}
                        </p>
                        <p className="p-product-card">
                          {(category.description?.en ||
                            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.')
                            .split(' ')
                            .splice(0, 5)
                            .join(' ')}
                          ...
                        </p>
                        <h5 className="h-slider">
                          Price : <span>500</span>$
                        </h5>
                      </div>
                      <div className="py-2.5 flex text-gray-500 text-[12px] justify-between border-t-gray-200 border-t-[0.5px]">
                        <p className="p-location-card">
                          <i className="fa-solid fa-sm me-1 fa-location-dot"></i>Alexandria, Egypt
                        </p>
                        <p className="p-location-card">
                          <i className="fa-solid fa-sm me-1 fa-clock"></i>Feb 18, 2023
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button className="btn main-btn mt-6">View More</button>
        </div>
      )}
    </section>
  );
}
