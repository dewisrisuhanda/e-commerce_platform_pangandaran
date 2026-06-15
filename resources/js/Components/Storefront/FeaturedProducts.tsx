import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
    // data dummy
    {
        id: 1,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
    },
    {
        id: 2,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
    },
    {
        id: 3,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
    },
    {
        id: 4,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
    },
    {
        id: 5,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
    },
];

export default function FeaturedProducts() {
    return (
        <div className="w-full px-4 md:px-8 lg:px-12 mb-24">
            <div className="w-full max-w-400 mx-auto bg-linear-to-b from-[#F0FDFD] to-[#A3EFEF] rounded-[2.5rem] md:rounded-[3rem] py-10 md:py-14 shadow-sm flex flex-col relative">
                {/* header */}
                <div className="flex items-center justify-between mb-8 md:mb-10 px-6 md:px-12 lg:px-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                        Feature Products
                    </h2>
                    <button className="bg-white px-8 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-gray-50 transition">
                        View All
                    </button>
                </div>

                {/* carousel */}
                <div className="relative w-full">
                    <button className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-7 bg-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-20 hover:scale-105 transition">
                        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
                    </button>

                    {/* product grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 px-6 md:px-12 lg:px-16">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-md transition duration-300 relative group border border-gray-100 flex flex-col h-full"
                            >
                                {/* badge */}
                                <div className="absolute top-4 left-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1 z-10">
                                    <Star className="w-3 h-3 fill-orange-600 text-orange-600" />{" "}
                                    Star Seller
                                </div>

                                {/* image placeholder */}
                                <div className="aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-gray-50">
                                    <img
                                        src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=400"
                                        alt="Shrimp"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                                    />
                                </div>

                                {/* info products */}
                                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-gray-500 mb-4 mt-auto">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold text-gray-600">
                                        ({product.rating})
                                    </span>
                                    <span className="mx-0.5">•</span>
                                    <span>{product.sold} Terjual</span>
                                </div>

                                {/* Harga */}
                                <p className="text-[#245D56] font-black text-lg md:text-xl">
                                    {product.price}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-7 bg-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-20 hover:scale-105 transition">
                        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
                    </button>
                </div>
            </div>
        </div>
    );
}
