import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Fish, Leaf, Truck } from "lucide-react";

import heroBg from "@/assets/images/hero_bg.png";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <Head title="Dashboard" />

            {/* hero banner section*/}
            <div className="relative rounded-4xl p-10 md:p-14 flex items-center overflow-hidden shadow-sm min-h-87.5 bg-[#EAEAEA]">
                <img
                    src={heroBg}
                    alt="Promo Groceries dan Sayuran Segar Parigi"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover object-right z-0 select-none pointer-events-none"
                />

                <div className="relative z-10 max-w-xl">
                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
                        Best of Parigi,
                        <br />
                        Delivered to You
                    </h1>
                    <p className="text-gray-600 mb-8 text-lg font-medium">
                        Mendukung UMKM lokal Parigi dan memenuhi kebutuhan
                        kalian dengan produk terbaik setiap harinya!
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-[#F58C00] hover:bg-[#d97c00] text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all">
                            START SHOPPING
                        </button>
                        <button className="bg-[#2a5a27] hover:bg-[#1f421d] text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all">
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* info floating banner */}
            <div className="relative -mt-8 max-w-4xl mx-auto flex rounded-xl overflow-hidden shadow-lg z-20 text-white text-sm">
                <div className="flex-1 bg-[#367533] p-4 flex items-center gap-4">
                    <Fish className="w-8 h-8 text-white/90" strokeWidth={1.5} />
                    <div>
                        <p className="font-bold text-base">Fresh from Ocean</p>
                        <p className="text-xs text-white/80">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-[#2a5a27] p-4 flex items-center gap-4">
                    <Leaf className="w-8 h-8 text-white/90" strokeWidth={1.5} />
                    <div>
                        <p className="font-bold text-base">100% Organic</p>
                        <p className="text-xs text-white/80">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-[#F58C00] p-4 flex items-center gap-4">
                    <Truck
                        className="w-8 h-8 text-white/90"
                        strokeWidth={1.5}
                    />
                    <div>
                        <p className="font-bold text-base">Free Delivery</p>
                        <p className="text-xs text-white/80">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>

            {/* categories section*/}
            <div className="mt-16">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Categories
                    </h2>
                    <button className="bg-gray-200 px-6 py-2 rounded-full font-semibold text-gray-700 hover:bg-gray-300 transition-colors">
                        View All
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
