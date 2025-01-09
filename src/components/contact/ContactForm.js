import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 w-full font-normal text-[#313646]">
      <label htmlFor="firstName" className="sr-only">
        First name
      </label>
      <input
        type="text"
        placeholder="First Name"
        id="firstName"
        required
        aria-required
        className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
      />
      <label htmlFor="lastName" className="sr-only">
        Last name
      </label>
      <input
        type="text"
        placeholder="Last Name"
        id="lastName"
        required
        aria-required
        className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
      />
      <label htmlFor="phone" className="sr-only">
        Phone number
      </label>
      <input
        type="tel"
        placeholder="Phone"
        id="phone"
        required
        aria-required
        className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
      />
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        id="email"
        required
        aria-required
        className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
      />
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        placeholder="Message"
        rows={6}
        id="message"
        required
        aria-required
        className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
      ></textarea>

      {/* Send Message Button with Animation */}
      <button className="relative inline-block overflow-hidden bg-white border-2 border-[#de3a3a] text-[#ff3f3f] font-semibold text-sm py-3 px-5 w-full sm:w-[160px] uppercase cursor-pointer group">
        <span className="relative z-10 transition-colors duration-600 ease-in-out group-hover:text-white">
          Send Message
        </span>
        <span className="absolute inset-0 bg-red-500 transition-all duration-500 ease-in-out transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 z-0 opacity-0 group-hover:opacity-100"></span>

        <span className="absolute inset-0 bg-red-500 transform origin-bottom scale-y-0 skew-y-9.3 transition-transform duration-600 ease-in-out z-50"></span>
      </button>
    </form>
  );
};

export default ContactForm;
