import React from "react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const PricingPlans = () => {
    const pricingPlans = [
        {
            membership: "3+1 Month Plan",
            price: "2,999",
            benefits: {
                1: "Access to premium content",
                2: "Priority customer support",
                3: "Exclusive member discounts"
            },
            star: false
        },
        {
            membership: "6+2 Month Plan",
            price: "4,999",
            benefits: {
                1: "Access to all features",
                2: "Free workshop invitations",
                3: "Extended support hours"
            },
            star: true
        },
        {
            membership: "12+3 Month Plan",
            price: "7,500",
            benefits: {
                1: "Unlimited access to resources",
                2: "Dedicated account manager",
                3: "Complimentary webinars"
            },
            star: false
        }
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {pricingPlans.map((plan) => (
                <div
                    key={plan.membership}
                    className="relative bg-[#29282d] text-center text-white uppercase max-w-[500px]"
                >
                    <div className="p-10">
                        <h3 className="tracking-wide text-4xl">{plan.membership}</h3>
                        <h4 className="text-4xl pt-4">
                            <span className="text-3xl mr-1">₹</span>
                            {plan.price} <span className="text-2xl text-accent">INR</span>
                        </h4>
                    </div>
                    <ul className="tracking-widest text-xs font-normal">
                        <li className="py-6">{plan.benefits[1]}</li>
                        <li className="py-6">{plan.benefits[2]}</li>
                        <li className="py-6">{plan.benefits[3]}</li>
                    </ul>
                    <div className="mt-10 pb-12">
                        <Link
                            href={"/pricing"}
                            className="bg-accent py-4 px-8 text-white hover:bg-red-600 uppercase font-bold tracking-widest text-sm"
                        >
                            Learn more
                        </Link>
                    </div>
                    {plan.star && (
                        <>
                            <div className="absolute top-0 right-0 border-solid border-t-0 border-r-[60px] border-b-[60px] border-l-0 border-[transparent_#f34e3a_transparent_transparent]" />
                            <AiFillStar
                                size={20}
                                className="absolute top-2 right-2"
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PricingPlans;
