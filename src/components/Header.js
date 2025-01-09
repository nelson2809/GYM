"use client"
import { useState, useEffect } from "react"
import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
	const [scrollY, setScrollY] = useState(0)
	const [nav, setNav] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [scrollY])

	return (
		<header
			className={`flex items-center justify-between w-full fixed top-0 h-16 py-4 z-[20] mx-auto bg-white ${
				scrollY === 0 ? "md:bg-transparent" : "md:bg-black"
			}`}
			style={{ transition: "background-color 0.4s ease" }}
		>
			<div className="flex items-center ml-4">
				<Logo setNav={setNav} />
			</div>
			<Nav
				nav={nav}
				setNav={setNav}
			/>
		</header>
	)
}

export default Header
