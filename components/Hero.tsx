"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper";
import { data } from "@/data/sliderImages";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className='w-full h-[75vh]'>
      <Swiper
        className='mySwiper w-full h-full'
        parallax={true}
        grabCursor={true}
        loop={true}
        navigation={true}
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay, Parallax]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='w-full h-full relative'>
              <Image
                src={item.src}
                alt={item.alt}
                width={1080}
                height={1920}
                priority
                className='w-full h-full object-cover'
              />

              <Overlay />

              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[2] space-y-3 lg:space-y-5 text-center'>
                <h1
                  data-swiper-parallax='-300%'
                  className='text-5xl lg:text-8xl font-semibold'
                >
                  {item.heading}
                </h1>
                <p data-swiper-parallax='-500%' className='text-lg'>
                  {item.paragraph}
                </p>
                <div data-swiper-parallax='-600%'>
                  <Link href='products' className='btn btn-accent'>
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
