import { ShoppingCart } from "lucide-react";

export default function ProductActions() {
    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="bg-[#245D56] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#1a443f] transition shadow-md whitespace-nowrap">
                Buy Now
            </button>
            <button className="bg-white text-[#245D56] py-4 rounded-xl font-bold text-sm border-2 border-[#245D56] hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
        </div>
    );
}
