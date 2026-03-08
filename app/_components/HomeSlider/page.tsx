'use client';
import React, { useEffect, useState } from "react";
import Electronics from '../../../../public/assets/img/laptop.png';
import sofa from '../../../../public/assets/img/sofa.png';
import clothes from '../../../../public/assets/img/clothes.png';
import watch from '../../../../public/assets/img/watch.png';
import automotive from '../../../../public/assets/img/automotive.png';
import job from '../../../../public/assets/img/job.jpg';
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface SliderItem {
  id: number;
  name: string;
  logo: StaticImageData; // Next.js image type
}

export default function HomeSlider() {
  const [display, setDisplay] = useState(true); // ممكن تحذف setDisplay لو مش مستخدم
  const [noOfSli, setNoOfSli] = useState(2);

  const data: SliderItem[] = [
    { id: 1, name: 'Electronics', logo: Electronics },
    { id: 2, name: 'Vehicle', logo: automotive },
    { id: 3, name: 'Watches', logo: watch },
    { id: 4, name: 'Jobs', logo: job },
    { id: 5, name: 'Watches', logo: watch },
    { id: 6, name: 'Clothes', logo: clothes },
    { id: 7, name: 'Furniture', logo: sofa },
    { id: 8, name: 'Clothes', logo: clothes },
    { id: 9, name: 'Watches', logo: watch }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: noOfSli,
    slidesToScroll: 1
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setNoOfSli(noOfSlides());
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setNoOfSli(noOfSlides());
  };

  function noOfSlides() {
    if (window.innerWidth > 600 && window.innerWidth < 900) return 2;
    if (window.innerWidth > 900 && window.innerWidth < 1200) return 4;
    if (window.innerWidth > 1200) return 7;
    return 2;
  }

  return (
    <section className="bg-red- px-2 py-8">
      <div className="slider-container bg-gray-100 text-center">
        <div
          className="bg- w-[85%] m-auto p-3"
          style={{ display: display ? "block" : "none" }}
        >
          <Slider {...settings} className="text-start">
            {data.map((item) => (
              <div key={item.id} className="p-1">
                <Link
                  href={`/${item.name}`}
                  className="bg-white m-auto transition-all duration-400 slide-item hover:bg-[#1CA49926] shadow-md h-[10rem] md:h-[11.3rem] w-[7rem] md:w-[9rem] flex items-center justify-center p-3 text-center rounded-md"
                >
                  <div className="flex items-center justify-center flex-col">
                    <div className="md:h-[5rem] h-[4rem] w-[4rem] md:w-[5rem] transition-all slide-icon duration-400 hover:bg-white mb-3 bg-[#1CA49926] rounded-full flex items-center justify-center">
                      <Image
                        src={item.logo}
                        className="w-[70%]"
                        alt={item.name}
                      />
                    </div>
                    <h4 className="h-slider">{item.name}</h4>
                    <p className="p-slider">200 Ads</p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
