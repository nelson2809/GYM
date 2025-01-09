import React from "react";

const Location = () => {
	return (
		<div className="flex flex-col w-full max-w-[600px]">
			{/* Google Maps Embed */}
			<iframe
				title="Gym Location"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.7598127762674!2d80.22737624487065!3d12.811145394751493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbcd3c52017%3A0x814b2945b1f18007!2sTCARE%20(P)%20LTD!5e0!3m2!1sen!2sin!4v1736265450767!5m2!1sen!2sin"
				width="100%"
				height="450"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="rounded-lg"
			></iframe>

			<div className="mt-7">
				<h4 className="text-[#29282D] text-xl uppercase tracking-wide">
					Address
				</h4>
				<p className="text-black">CODEWORK (P) LTD, Your Address Here</p>
			</div>
			<div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center mt-5">
				<div>
					<h4 className="text-[#29282D] text-xl uppercase tracking-wide">
						Phone
					</h4>
					<p className="text-black">0203 3333 3333</p>
				</div>
				<div>
					<h4 className="text-[#29282D] text-xl uppercase tracking-wide">
						Email
					</h4>
					<p className="text-accent">power@powergym.com</p>
				</div>
			</div>
		</div>
	);
};

export default Location;
