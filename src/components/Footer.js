import Link from "next/link"
import React from "react"
import { BsTelephoneInbound, BsClock } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="flex flex-col justify-center items-center h-full bg-[#252525]">
			<div className="max-w-[1440px] mx-auto py-20 px-6 sm:px-10 2xl:px-0">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					<div>
						<h3 className="text-white text-3xl uppercase">
							Power <span className="text-accent">力</span>
						</h3>
						<p className="text-[B1B2B2] py-7 w-[80%]">
						For inquiries or assistance, feel free to reach us through any of the following methods
						Let me know if you'd like to adjust any details!
						</p>
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-4">
								<BsTelephoneInbound
									size={20}
									className="hover:text-accent cursor-pointer duration-300"
								/>
								12345 678910
							</div>
							<div className="flex items-center gap-4">
								<CiLocationOn
									size={22}
									className="hover:text-accent cursor-pointer duration-300"
								/>
								<p>160 Main Street</p>
							</div>
							<div className="flex items-center gap-4">
								<BsClock
									size={20}
									className="hover:text-accent cursor-pointer duration-300"
								/>
								<p>Mon - Sun 08:00 - 22:00</p>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-white text-3xl uppercase">Latest news</h3>
						<ul className="flex flex-col gap-4">
							<li className="mt-7">
								<h4 className="text-[#717274] text-[20px] uppercase tracking-wide hover:text-white cursor-pointer duration-300">
									Fitness classes for you
								</h4>
								<p className="uppercase text-sm font-normal pb-4 border-b border-[#717274] tracking-widest">
									January 15, 2025
								</p>
							</li>
							<li>
								<h4 className="text-[#717274] text-[20px] uppercase tracking-wide hover:text-white cursor-pointer duration-300">
									The top compound lifts to grow muscle
								</h4>
								<p className="uppercase text-sm font-normal pb-4 border-b border-[#717274] tracking-widest">
								January 15, 2025
								</p>
							</li>
							<li>
								<h4 className="text-[#717274] text-[20px] uppercase tracking-wide hover:text-white cursor-pointer duration-300">
									Diet to boost performance
								</h4>
								<p className="uppercase text-sm font-normal pb-4 border-b border-[#717274] tracking-widest">
								January 15, 2025
								</p>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white text-3xl uppercase">Useful links</h3>
						<ul className="flex flex-col gap-6 mt-7">
							<li>
								<Link
									href={"/"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href={"/about"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									href={"/about#team"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									Meet the team
								</Link>
							</li>
							<li>
								<Link
									href={"/pricing"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href={"/contact"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white text-3xl uppercase">Contact</h3>
						<form className="flex flex-col gap-2 py-8">
	<label htmlFor="name" className="sr-only">
		Name
	</label>
	<input
		type="text"
		placeholder="Name"
		id="name"
		className="bg-[#1f1e1e] p-3 outline-none w-[400px] -ml-[130px]" // Negative margin to increase width to the left
		aria-required
		required
	/>
	<label htmlFor="email" className="sr-only">
		Email
	</label>
	<input
		type="email"
		id="email"
		placeholder="E-mail"
		className="bg-[#1f1e1e] p-3 outline-none w-[400px] -ml-[130px]" // Negative margin to increase width to the left
		aria-required
		required
	/>
	<label htmlFor="message" className="sr-only">
		Message
	</label>
	<textarea
		placeholder="Message"
		rows={4}
		id="message"
		className="bg-[#1f1e1e] p-3 outline-none w-[400px] -ml-[130px]" // Negative margin to increase width to the left
		aria-required
		required
	></textarea>
	<button className="relative inline-block overflow-hidden bg-back border-2 border-[#de3a3a] text-white font-semibold text-sm py-3 px-5 w-full sm:w-[160px]  w-[140px] -ml-[130px] uppercase cursor-pointer group">
        <span className="relative z-10 transition-colors duration-600 ease-in-out group-hover:text-white">
          Send Message
        </span>
        <span className="absolute inset-0 bg-red-500 transition-all duration-500 ease-in-out transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 z-0 opacity-0 group-hover:opacity-100"></span>

        <span className="absolute inset-0 bg-red-500 transform origin-bottom scale-y-0 skew-y-9.3 transition-transform duration-600 ease-in-out z-50"></span>
      </button>
</form>

					</div>
				</div>
			</div>

			<div className="bg-[#202020] py-8 px-10 w-full text-center">
				<p>
					 &copy; <span>{currentYear}</span> All rights reserved |
					{" "}
					<a
						href={"https://www.codework.ai/"}
						target="_blank"
						className="font-bold text-[#6581b9] hover:text-white duration-300"
					>
						CODEWORK <span className="sr-only">Opens in a new tab</span>
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
