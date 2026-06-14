import { RefreshCw, Leaf, Truck } from "lucide-react";
import infoBg from "@/assets/images/info_bg.jpeg";

export default function InfoBanner() {
    return (
        <div className="max-w-6xl mx-auto mt-24 px-4">
            {/* main container */}
            <div className="relative rounded-4xl p-8 md:p-10 flex flex-col md:flex-row gap-6 shadow-lg overflow-hidden">
                {/* background image & overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={infoBg}
                        alt="Info Background"
                        className="w-full h-full object-cover"
                    />
                    {/* overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#48D1CC]/85 to-[#20B2AA]/85"></div>
                </div>

                {/* card 1 */}
                <div className="relative z-10 flex-1 bg-white/90 backdrop-blur rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:-translate-y-1 transition transform duration-300">
                    <RefreshCw
                        className="w-8 h-8 text-gray-700 shrink-0"
                        strokeWidth={1.5}
                    />
                    <div>
                        <p className="font-bold text-gray-900 text-sm mb-1">
                            Fresh from Ocean
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Tangkapan laut yang segar langsung dari nelayan
                            untuk masyarakat pangandaran
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="relative z-10 flex-1 bg-white/90 backdrop-blur rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:-translate-y-1 transition transform duration-300">
                    <Leaf
                        className="w-8 h-8 text-gray-700 shrink-0"
                        strokeWidth={1.5}
                    />
                    <div>
                        <p className="font-bold text-gray-900 text-sm mb-1">
                            100% Organic
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Sayuran dan buah - buahan yang langsung dari petani
                            lokal untuk masyarakat pangandaran
                        </p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="relative z-10 flex-1 bg-white/90 backdrop-blur rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:-translate-y-1 transition transform duration-300">
                    <Truck
                        className="w-8 h-8 text-gray-700 shrink-0"
                        strokeWidth={1.5}
                    />
                    <div>
                        <p className="font-bold text-gray-900 text-sm mb-1">
                            Free Delivery
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Gratis pengiriman untuk warga pangandaran di hari
                            yang sama.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
