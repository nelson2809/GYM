"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxDotFilled } from "react-icons/rx";

const Banner = () => {
  const sponsors = [
    "Next Sport",
    "Fit Club",
	"Flex Fitness",
    "Max Core",
    "Zenflex",
	
  ];

  const [scrollDirection, setScrollDirection] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection(1); // Scrolling down
      } else {
        setScrollDirection(-1); // Scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (sliderRef) {
      if (scrollDirection === 1) {
        sliderRef.slickNext(); // Move right
      } else if (scrollDirection === -1) {
        sliderRef.slickPrev(); // Move left
      }
    }
  }, [scrollDirection, sliderRef]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Auto-scroll interval in ms
    cssEase: "linear",
    customPaging: () => (
      <div className={`text-white text-2xl`}>
        <RxDotFilled className="mt-8" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-accent flex justify-center items-center h-[200px] w-full">
      <Slider
        ref={(slider) => setSliderRef(slider)}
        {...settings}
        className="text-center cursor-grab w-[80%]"
      >
        {sponsors.map((sponsor) => (
          <ul key={sponsor}>
            <li>
              <p className="font-[teko] font-semibold text-white uppercase text-5xl">
                {sponsor}
              </p>
            </li>
          </ul>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
