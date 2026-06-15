import { ArrowRight } from "lucide-react";

// tipe data untuk kategori
export interface Category {
    id: number | string;
    name: string;
    image: string;
}

interface CategorySectionProps {
    categories: Category[];
}

// ambil props categories dan tampilkan grid kategori
export default function CategorySection({ categories }: CategorySectionProps) {
    return (
        <section className="w-full bg-[#EAF6F6] py-12 md:py-16 mt-8 mb-16">
            <div className="max-w-350 mx-auto px-4 md:px-8">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-tight">
                            Shop by Category
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base">
                            Browse our top categories
                        </p>
                    </div>
                    <button className="flex items-center gap-2 font-bold text-sm md:text-base text-black hover:text-[#40E0D0] transition-colors group">
                        View All
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* categories grid hasil mapping dari props {categories} */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={`/category/${category.id}`}
                            className="relative group rounded-2xl md:rounded-[20px] overflow-hidden block aspect-4/5 shadow-sm cursor-pointer"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />

                            <div className="absolute bottom-4 left-0 w-full flex justify-center px-4">
                                <span className="bg-white text-gray-900 px-6 py-2 rounded-xl font-bold text-sm shadow-md transition-colors group-hover:text-[#40E0D0]">
                                    {category.name}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
