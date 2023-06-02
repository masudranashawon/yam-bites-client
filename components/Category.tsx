"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { data } from "@/data/categoryImages";
import SectionTitle from "./SectionTitle";
import CategorySliderItem from "./CategorySliderItem";
import "swiper/css";
import "swiper/css/pagination";

const Category = () => {
  return (
    <section className='py-20'>
      <SectionTitle
        subTitle='Categories'
        title='Explore Our Diverse Categories'
      />

      <div className='w-full h-[50vh]'>
        <Swiper
          loop={true}
          speed={750}
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper w-full h-full'
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CategorySliderItem
                image={item.src}
                alt={item.alt}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
