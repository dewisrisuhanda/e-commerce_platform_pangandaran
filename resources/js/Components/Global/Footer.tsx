import React from "react";

import {
    Facebook,
    Youtube,
    Whatsapp,
    Instagram,
    Tiktok,
} from "@/Components/Icons/SocialIcons";

export default function Footer() {
    return (
        <footer className="w-full bg-[#215B63] text-white py-16 px-6 md:px-12 lg:px-20 font-sans">
            <div className="max-w-350 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
                    <div className="flex flex-col items-start lg:pr-10">
                        <div className="flex items-center text-4xl font-bold mb-8 select-none tracking-tight">
                            <span className="text-[#40E0D0]">Parigi</span>
                            <span className="text-white">Mart</span>
                        </div>

                        {/* icons */}
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="text-white hover:text-[#40E0D0] transition-colors hover:-translate-y-1 transform duration-300"
                            >
                                <Facebook size={28} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-[#40E0D0] transition-colors hover:-translate-y-1 transform duration-300"
                            >
                                <Youtube size={28} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-[#40E0D0] transition-colors hover:-translate-y-1 transform duration-300"
                            >
                                <Whatsapp size={28} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-[#40E0D0] transition-colors hover:-translate-y-1 transform duration-300"
                            >
                                <Instagram size={28} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-[#40E0D0] transition-colors hover:-translate-y-1 transform duration-300"
                            >
                                <Tiktok size={28} />
                            </a>
                        </div>
                    </div>

                    {/* parigimart */}
                    <div>
                        <h4 className="text-[17px] font-bold mb-6">
                            ParigiMart
                        </h4>
                        <ul className="space-y-3.5">
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                About us
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Conditions
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Market
                            </li>
                        </ul>
                    </div>

                    {/* quick liks */}
                    <div>
                        <h4 className="text-[17px] font-bold mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3.5">
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Offers
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Discount Coupons
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Stores
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Track Order
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Shop
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Info
                            </li>
                        </ul>
                    </div>

                    {/* KOLOM 4: CUSTOMER SERVICE */}
                    <div>
                        <h4 className="text-[17px] font-bold mb-6">
                            Customer Service
                        </h4>
                        <ul className="space-y-3.5">
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                FAQ
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Contact
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Privacy Policy
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Returns & Refunds
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Cookie Guidelines
                            </li>
                            <li className="flex items-center gap-2.5 text-[15px] hover:text-[#40E0D0] transition cursor-pointer font-medium">
                                <span className="w-1.25 h-1.25 bg-white rounded-full"></span>{" "}
                                Delivery Information
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT AREA */}
                <div className="pt-10 flex flex-col items-center border-t border-white/10">
                    <p className="text-[15px] text-white font-medium">
                        © {new Date().getFullYear()} ParigiMart. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
