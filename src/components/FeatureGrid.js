"use client";

import React, { useState, useEffect } from "react";
import { CiDumbbell } from "react-icons/ci";
import { BsHeartPulse, BsWater } from "react-icons/bs";
import { LuApple } from "react-icons/lu";
import { motion } from "framer-motion";

const FeatureGrid = ({ textColour, hoverColour, iconColour }) => {
	const textColourVariants = {
		black: "text-black",
		white: "text-white",
	};

	// State to track the scroll position and previous scroll position
	const [scrollPosition, setScrollPosition] = useState(0);
	const [prevScrollPosition, setPrevScrollPosition] = useState(0);

	// Effect to handle scroll and set scroll position
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPosition = window.scrollY; // Get current scroll position
			setScrollPosition(currentScrollPosition);
			setPrevScrollPosition(scrollPosition); // Store previous scroll position
		};

		window.addEventListener("scroll", handleScroll);

		// Clean up event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPosition]);

	// Determine horizontal movement based on scroll direction
	const scrollBasedAnimation = {
		hidden: { x: 0 },
		visible: {
			// If scrolling down, move the cards to the right, if scrolling up, move to the left
			x: scrollPosition > prevScrollPosition ? 50 : scrollPosition < prevScrollPosition ? -50 : 0,
			transition: { duration: 0.3, ease: "easeInOut" },
		},
	};

	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
			{/* Quality Equipment */}
			<motion.div
				className="flex flex-col justify-center items-center"
				variants={scrollBasedAnimation}
				initial="hidden"
				animate="visible"
			>
				<CiDumbbell
					size={60}
					role="presentation"
					className={`text-white hover:text-${hoverColour} transition duration-300 ease-in-out`}
				/>
				<h3
					className={`${textColourVariants[textColour]} uppercase text-xl py-4 tracking-wide hover:text-${hoverColour} duration-300 cursor-pointer`}
				>
					Quality equipment
				</h3>
				<p className="w-[70%] leading-7">
					Our equipment is maintained to the highest standards, ensuring safety and durability for every workout.
				</p>
			</motion.div>

			{/* Customised Nutrition Plans */}
			<motion.div
				className="flex flex-col justify-center items-center"
				variants={scrollBasedAnimation}
				initial="hidden"
				animate="visible"
			>
				<LuApple
					size={60}
					role="presentation"
					className={`text-white hover:text-${hoverColour} transition duration-300 ease-in-out`}
				/>
				<h3
					className={`text-${textColour} uppercase text-xl py-4 tracking-wide hover:text-${hoverColour} duration-300 cursor-pointer`}
				>
					Customised nutrition plans
				</h3>
				<p className="w-[70%] leading-7">
					Whether you're aiming to build muscle, lose weight, or stay healthy, we provide expert guidance to achieve your goals.
				</p>
			</motion.div>

			{/* Shower Service */}
			<motion.div
				className="flex flex-col justify-center items-center"
				variants={scrollBasedAnimation}
				initial="hidden"
				animate="visible"
			>
				<BsWater
					size={60}
					role="presentation"
					className={`text-white hover:text-${hoverColour} transition duration-300 ease-in-out`}
				/>
				<h3
					className={`text-${textColour} uppercase text-xl py-4 tracking-wide hover:text-${hoverColour} duration-300 cursor-pointer`}
				>
					Shower service
				</h3>
				<p className="w-[70%] leading-7">
				Our showers are maintained daily to ensure a hygienic and comfortable environment.
				</p>
			</motion.div>

			{/* Unique to Your Needs */}
			<motion.div
				className="flex flex-col justify-center items-center"
				variants={scrollBasedAnimation}
				initial="hidden"
				animate="visible"
			>
				<BsHeartPulse
					size={60}
					role="presentation"
					className={`text-white hover:text-${hoverColour} transition duration-300 ease-in-out`}
				/>
				<h3
					className={`text-${textColour} uppercase text-xl py-4 tracking-wide hover:text-${hoverColour} duration-300 cursor-pointer`}
				>
					Unique to your needs
				</h3>
				<p className="w-[70%] leading-7">
				At our gym, your experience is customized to help you achieve success in a way that suits you best.				</p>
			</motion.div>
		</div>
	);
};

export default FeatureGrid;
