import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

// DUMMY DATA
const products = [
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
        <section className="w-full bg-[#EAF6F6] py-16 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto relative">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                        Feature Products
                    </h2>
                    <button className="bg-white px-6 py-2 rounded-full font-bold text-sm shadow-sm hover:bg-gray-50 transition">
                        View All
                    </button>
                </div>

                {/* CONTAINER CARD */}
                <div className="relative">
                    {/* Tombol Panah Kiri (Nanti buat carousel) */}
                    <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition">
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Grid Produk */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-300 relative group"
                            >
                                {/* Badge Star Seller */}
                                <div className="absolute top-6 left-6 bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-orange-600" />{" "}
                                    Star Seller
                                </div>

                                {/* Image Placeholder */}
                                <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=400"
                                        alt="Shrimp"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                                    />
                                </div>

                                {/* Info Produk */}
                                <h3 className="font-bold text-gray-900 text-sm mb-2">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span>({product.rating})</span>
                                    <span>•</span>
                                    <span>{product.sold} Terjual</span>
                                </div>
                                <p className="text-[#245D56] font-black text-lg">
                                    {product.price}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Tombol Panah Kanan */}
                    <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
