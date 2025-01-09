import Link from "next/link"
const Logo = ({ setNav }) => {
	return (
		<Link
			onClick={() => setNav(false)}
			href={"/"}
			className="flex font-[teko] text-2xl lg:text-4xl uppercase font-semibold text-black md:text-white z-50 px-8"
		>
		GYM LOGO <span className="text-accent"></span>
		</Link>
	)
}

export default Logo
