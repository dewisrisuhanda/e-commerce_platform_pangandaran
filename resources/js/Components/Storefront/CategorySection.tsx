import { ArrowRight } from "lucide-react";

const categories = [
    // dummy categories buat sementara
    {
        id: 1,
        name: "Seafood",
        image: "https://images.unsplash.com/photo-1615141982883-c7da0e69f585?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 2,
        name: "Vegetable",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 3,
        name: "Kelapa",
        image: "https://images.unsplash.com/photo-1526424382096-74a93e105682?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 4,
        name: "Baju",
        image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 5,
        name: "Meat",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 6,
        name: "Cemilan",
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 7,
        name: "Fruits",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 8,
        name: "Kerajinan",
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 9,
        name: "Kerajinan",
        image: "https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 10,
        name: "Kain",
        image: "https://images.unsplash.com/photo-1584323869269-0eb6611488c5?auto=format&fit=crop&q=80&w=400",
    },
];

export default function CategorySection() {
    return (
        <section className="w-full bg-[#EAF6F6] py-12 md:py-16 mt-8 mb-16">
            <div className="max-w-350 mx-auto px-4 md:px-8">
                {/* header */}
                <div className="flex items-end justify-between mb-8">
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

                {/* category grid */}
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
