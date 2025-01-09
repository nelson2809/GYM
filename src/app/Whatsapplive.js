"use client";
import { useEffect } from "react";
import React from "react";
import Image from "next/image";

const Whatsapplive = () => {
  const whatsappNumber = "6383532122";
  const baseUrl = "https://api.whatsapp.com/send/";
  const youtubeLink = "";
  const encodeMessage = `Hello , Checkout my Youtube Channel : ${youtubeLink} `;
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodeMessage}&type=phone_number&app_absent=0`;
  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visible");
      } else {
        whatsappLinkElement?.classList.remove("visible");
      }
    };
  
    const checkScrollVisibility = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
  
      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        document.body.classList.remove("no-scrollbar");
      } else {
        whatsappLinkElement?.classList.add("visible");
        document.body.classList.add("no-scrollbar");
      }
    };
  
    // Initial check
    checkScrollVisibility();
  
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div>
      <a
        className="whatsapp-link relative"
        href={whatsappLink} // Replace with your WhatsApp link
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="absolute left-[7px] top-[7px] z-[-1] w-10 h-10">
          <span className="flex w-full h-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75"></span>
        </span>
        <Image
          src="/assets/whatsapp.svg"
          alt="whatsapp" 
          width={30}
          height={30}
          className="whatsapp-icon z-10"
        />
      </a>
    </div>
  );
};

export default Whatsapplive;
