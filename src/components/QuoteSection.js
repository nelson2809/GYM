"use client"

import React, { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../app/styles/slick.css"
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"
import { BiSolidQuoteLeft } from "react-icons/bi"
import { RxDotFilled } from "react-icons/rx"
import runner from "../../public/assets/runner.jpg"
import fitness from "../../public/assets/fitness.jpg" // example new image
import transformation from "../../public/assets/transformation.jpg" // example new image

const QuoteSection = () => {
	const pathname = usePathname()
	const [currentSlide, setCurrentSlide] = useState(0)

	// Define images for each quote
	const images = [runner, fitness, transformation]

	const CustomPrevArrow = ({ onClick }) => (
		<button
			onClick={onClick}
			className="hidden md:block custom-prev-arrow"
			aria-label="Previous"
		>
			<SlArrowLeft
				size={50}
				className="text-white"
			/>
		</button>
	)

	const CustomNextArrow = ({ onClick }) => (
		<button
			onClick={onClick}
			className="hidden md:block custom-next-arrow"
			aria-label="Next"
		>
			<SlArrowRight
				size={50}
				className="text-white"
			/>
		</button>
	)

	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1350,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 1800,
		initialSlide: 0,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		customPaging: () => (
			<div className={`text-white text-2xl`}>
				<RxDotFilled className="mt-8" />
			</div>
		),
		beforeChange: (oldIndex, newIndex) => {
			setCurrentSlide(newIndex)
		},
		responsive: [
			{
				breakpoint: 765,
				settings: {
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: true
				}
			}
		]
	}

	return (
		<section className="relative w-full">
			{pathname === "/" ? (
				<Image
					alt="Close-up of running shoes with water droplets, capturing a person running on a damp pavement with water spray in motion."
					src={images[currentSlide]} // Display the image for the current slide
					quality={80}
					style={{ objectFit: "cover" }}
					className="relative h-[600px] w-full"
				/>
			) : (
				<div className="relative bg-accent w-full h-[600px]" />
			)}

			<div className="absolute top-0 left-[50%] translate-x-[-50%] flex justify-center items-center h-full w-full">
				<Slider
					{...settings}
					className="cursor-grab z-[100] max-w-[100%]"
				>
					<div className="text-center mx-auto w-full px-5 xs:px-10">
						<BiSolidQuoteLeft
							size={40}
							aria-hidden="true"
							className="text-white flex justify-center w-full mb-12"
						/>
						<blockquote>
							<p className="font-[teko] font-semibold text-white text-2xl md:text-4xl uppercase tracking-wide text-center w-full lg:w-[60%] mx-auto leading-snug">
								Reaching an age where prioritizing fitness and health matters
								most. Our bodies rely on us! Initiate self-care for your body,
								and it reciprocates. Embrace a clean diet and intense exercise.
							</p>
							<cite className="block text-white uppercase tracking-widest mt-12 font-normal">
								John Smith, Nutritionist
							</cite>
						</blockquote>
					</div>

					<div className="text-center mx-auto w-full px-5 xs:px-10">
						<BiSolidQuoteLeft
							size={40}
							aria-hidden="true"
							className="text-white flex justify-center w-full mb-12"
						/>
						<blockquote>
							<p className="font-[teko] font-semibold text-white text-2xl md:text-4xl uppercase tracking-wide text-center w-full lg:w-[60%] mx-auto leading-snug">
								Fitness is not a destination; it’s a journey. Push your limits, 
								embrace challenges, and witness transformation.
							</p>
							<cite className="block text-white uppercase tracking-widest mt-12 font-normal">
								Jane Doe, Fitness Coach
							</cite>
						</blockquote>
					</div>

					<div className="text-center mx-auto w-full px-5 xs:px-10">
						<BiSolidQuoteLeft
							size={40}
							aria-hidden="true"
							className="text-white flex justify-center w-full mb-12"
						/>
						<blockquote>
							<p className="font-[teko] font-semibold text-white text-2xl md:text-4xl uppercase tracking-wide text-center w-full lg:w-[60%] mx-auto leading-snug">
								Consistency is the key to success in fitness and life. Every step counts, no matter how small.
							</p>
							<cite className="block text-white uppercase tracking-widest mt-12 font-normal">
								Michael Lee, Personal Trainer
							</cite>
						</blockquote>
					</div>
				</Slider>
			</div>
		</section>
	)
}

export default QuoteSection
