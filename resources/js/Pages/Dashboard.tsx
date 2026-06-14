import { Head } from "@inertiajs/react";
import StorefrontLayout from "@/Layouts/StorefrontLayout";
import HeroSection from "@/Components/Storefront/HeroSection";
import InfoBanner from "@/Components/Storefront/InfoBanner";
import CategorySection from "@/Components/Storefront/CategorySection";
import FeaturedProducts from "@/Components/Storefront/FeaturedProducts";

export default function Dashboard() {
    return (
        <StorefrontLayout>
            <Head title="Home - Parigi Mart" />

            <HeroSection />
            <InfoBanner />
            <CategorySection />
            <FeaturedProducts />
        </StorefrontLayout>
    );
}
