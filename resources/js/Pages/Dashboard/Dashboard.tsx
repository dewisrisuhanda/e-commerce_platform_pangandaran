import { Head } from "@inertiajs/react";
import StorefrontLayout from "@/Layouts/StorefrontLayout";
import HeroSection from "@/Components/Storefront/HeroSection";
import InfoBanner from "@/Components/Storefront/InfoBanner";
import CategorySection from "@/Components/Storefront/CategorySection";
import ProductCarousel from "@/Components/Storefront/ProductCarousel";
import StoreFeatures from "@/Components/Storefront/StoreFeatures";

// data dummy sementara
const dummyCategories = [
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

const dummyProducts = [
    {
        id: 1,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 2,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 3,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 4,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: 5,
        name: "Udang Besar (250g)",
        price: "Rp.50.000",
        rating: 5.0,
        sold: "10RB+",
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=400",
    },
];

export default function Dashboard() {
    return (
        <StorefrontLayout>
            <Head title="Home - Cibenda Mart" />

            <HeroSection />
            <InfoBanner />

            <CategorySection categories={dummyCategories} />
            <ProductCarousel
                title="Feature Products"
                products={dummyProducts}
            />

            <StoreFeatures />
        </StorefrontLayout>
    );
}
