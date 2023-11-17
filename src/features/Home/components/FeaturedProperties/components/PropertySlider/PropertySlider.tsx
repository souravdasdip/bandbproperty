"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useIsDesktop } from "@/features/common/Hooks/useIsDesktop";
import PropertyCard from "@/features/common/modules/PropertyCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertySlider: React.FC<{ featuredProperties: Array<any> }> = ({
  featuredProperties,
}) => {
  const { isDesktop } = useIsDesktop();

  return (
    <Swiper
      slidesPerView={isDesktop ? 3 : 1}
      spaceBetween={10}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      pagination={{ dynamicBullets: true }}
      className="mySwiper"
    >
      {featuredProperties?.map((property) => (
        <SwiperSlide key={property.id}>
          <PropertyCard {...property} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PropertySlider;
