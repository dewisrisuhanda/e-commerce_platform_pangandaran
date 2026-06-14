import { Search, SlidersHorizontal } from "lucide-react";
import heroBeach from "@/assets/images/hero_bg.jpeg";

export default function HeroSection() {
    return (
        <div className="relative w-full h-150 md:h-195 flex flex-col items-center justify-center mb-16">
            <div className="absolute inset-0 w-full h-full rounded-b-[2.5rem] md:rounded-b-[3.5rem] overflow-hidden shadow-lg z-0">
                <div className="absolute top-0 left-0 w-full h-[60%]">
                    <img
                        src={heroBeach}
                        alt="Parigi Mart Beach"
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-linear-to-b from-[#40E0D0] to-[#E0F8F8]"></div>
            </div>

            <div className="absolute bottom-[40%] w-full flex flex-col items-center pointer-events-none z-10">
                <h1 className="text-[90px] md:text-[170px] font-bold tracking-widest leading-[0.8] text-[#40E0D0] drop-shadow-md -mb-6 md:-mb-12">
                    PARIGI
                </h1>
                <h1 className="text-[90px] md:text-[170px] font-bold tracking-widest leading-[0.8] text-white drop-shadow-md translate-y-1/2">
                    MART
                </h1>
            </div>

            {/* search bar */}
            <div className="absolute bottom-10 md:bottom-16 w-full max-w-5xl px-2 z-20 pointer-events-auto">
                <div className="bg-white rounded-full p-2.5 md:p-2 flex flex-col md:flex-row items-center justify-between gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100">
                    <div className="flex items-center gap-4 pl-3 pr-5 h-14 w-full md:w-auto justify-center md:justify-start">
                        <button className="bg-[#F0F2F5] text-[#334155] px-8 py-3 rounded-full font-bold text-sm sm:text-base transition hover:bg-gray-200 h-full flex items-center">
                            Category
                        </button>
                        <button className="text-[#475569] hover:text-gray-900 font-bold text-sm sm:text-base px-3 transition h-full flex items-center">
                            Buy
                        </button>
                    </div>

                    <div className="hidden md:block w-[1.5px] h-10 bg-gray-200 mx-2"></div>

                    {/* input search */}
                    <div className="flex-1 flex items-center px-6 py-2 border border-gray-300 rounded-full h-14 w-full group focus-within:border-[#40E0D0] focus-within:ring-1 focus-within:ring-[#40E0D0] transition-all bg-white">
                        <Search className="w-6 h-6 text-gray-400 mr-3 group-focus-within:text-[#40E0D0] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search products"
                            className="w-full border-none bg-transparent focus:ring-0 text-gray-700 p-0 text-base outline-none placeholder:text-gray-400"
                        />
                    </div>

                    {/* search button */}
                    <div className="flex items-center gap-4 pr-1 w-full md:w-auto justify-between md:justify-end mt-2 md:mt-0">
                        <button className="text-gray-500 hover:text-gray-800 p-3 transition">
                            <SlidersHorizontal
                                className="w-7 h-7"
                                strokeWidth={1.5}
                            />
                        </button>
                        <button className="bg-[#245D56] hover:bg-[#1a443f] text-white px-10 rounded-full font-bold text-sm sm:text-base transition shadow-md whitespace-nowrap h-14 flex items-center justify-center">
                            Search Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
