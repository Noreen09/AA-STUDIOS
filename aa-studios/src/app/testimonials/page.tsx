"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Judith Black",
      role: "CEO of Workcation",
      quote:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
      img: "/", // Replace with real image URL
    },
    {
      id: 2,
      name: "John Doe",
      role: "Manager at Company",
      quote:
        "“This company has exceeded all my expectations. They delivered an amazing product!”",
      img: "/",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "CTO of Startup",
      quote:
        "“Professional, responsive, and highly skilled. I couldn’t have asked for a better partner!”",
      img: "/",
    },
  ];

  return (
    <>
    <div className="bg-[#111111] py-10">
      {/* Section Heading */}
      <div className="mx-auto max-w-2xl text-center mb-6">
        <h2 className="text-4xl font-semibold tracking-tight text-[#48CAE4] sm:text-5xl">
          Testimonials
        </h2>
        <p className="mt-2 text-lg text-white">
          Here are the reviews from our best clients on our featured work.
        </p>
      </div>

      {/* Swiper Slider */}
      <section className="relative px-6 py-12 sm:py-20 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="mx-auto max-w-2xl text-center">
                <Image
                  src="/"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="mx-auto h-12"
                />
                <figure className="mt-10">
                  <blockquote className="text-xl font-semibold text-white sm:text-2xl">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex flex-col items-center">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full size-14"
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base text-white">
                      <div className="font-semibold">{testimonial.name}</div>
                      <svg
                        width={3}
                        height={3}
                        viewBox="0 0 2 2"
                        aria-hidden="true"
                        className="fill-gray-400"
                      >
                        
                      </svg>
                      <div>{testimonial.role}</div>
                    </div><br/><br/><br/><br/>
                    <circle r={1} cx={1} cy={1} />
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
    </>
  );
};

export default Testimonials;
