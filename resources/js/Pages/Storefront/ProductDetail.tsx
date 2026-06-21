import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import StorefrontLayout from "@/Layouts/StorefrontLayout";
import mainImage from "@/assets/images/kakap.png";

import ProductActions from "@/Components/Storefront/ProductDetail/ProductActions";
import DeliveryBanner from "@/Components/Storefront/ProductDetail/DeliveryBanner";
import PreparationOptions from "@/Components/Storefront/ProductDetail/PreparationOptions";
import ProductDetailsCard from "@/Components/Storefront/ProductDetail/ProductDetailsCard";
import ProductGallery from "@/Components/Storefront/ProductDetail/ProductGallery";
import ProductSummary from "@/Components/Storefront/ProductDetail/ProductSummary";
import ProductTabs from "@/Components/Storefront/ProductDetail/ProductTabs";
import QuantitySelector from "@/Components/Storefront/ProductDetail/QuantitySelector";
import ShippingGuaranteeCard from "@/Components/Storefront/ProductDetail/ShippingGuaranteeCard";
import ProductReviewsCard from "@/Components/Storefront/ProductDetail/ProductReviewsCard";
import { ProductDetailData } from "@/Components/Storefront/ProductDetail/types";

const productData: ProductDetailData = {
    id: 1,
    name: "Ikan Kakap Besar – (250 gr)",
    price: 125000,
    unit: "kg",
    location: "Pangandaran - East Beach",
    availableStock: 42,
    description:
        "Our Red Snapper is caught daily by local artisanal fishermen using traditional, sustainable line-and-hook methods off the coast of Pangandaran. Known for its firm texture and sweet, nutty flavor, it is perfect for grilling, baking, or pan-searing.",
    images: [
        {
            src: mainImage,
            alt: "Ikan kakap besar tampil utama",
            objectPosition: "center center",
        },
        {
            src: mainImage,
            alt: "Ikan kakap besar tampilan kedua",
            objectPosition: "center 28%",
        },
        {
            src: mainImage,
            alt: "Ikan kakap besar tampilan ketiga",
            objectPosition: "center 72%",
        },
    ],
    preparationOptions: [
        {
            id: "whole",
            label: "Whole",
            description: "Cleaned & Scaled",
        },
        {
            id: "fillet",
            label: "Fillet",
            description: "Boneless (approx 600g)",
        },
    ],
    nutrition: [
        { label: "Calories", value: "100 kcal" },
        { label: "Protein", value: "20g" },
        { label: "Fat", value: "1.3g" },
        { label: "Rich in Omega-3 fatty acids and Vitamin B12" },
    ],
    guarantees: [
        {
            title: "Cold Chain Integrity",
            description:
                "Shipped in insulated boxes with gel packs to guarantee freshness.",
            icon: "snowflake",
            tone: "blue",
        },
        {
            title: "Delivery Time",
            description: "Next day delivery for orders placed before 14:00.",
            icon: "clock",
            tone: "blue",
        },
        {
            title: "Buyer Protection",
            description:
                "Full refund if quality does not meet our premium standards.",
            icon: "shield",
            tone: "green",
        },
    ],
};

export default function ProductDetail({ productId }: { productId: string }) {
    void productId;

    const [quantity, setQuantity] = useState(1);
    const [prepOption, setPrepOption] = useState("whole");
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<"details" | "reviews">(
        "details",
    );

    return (
        <StorefrontLayout>
            <Head title={`${productData.name} - Cibenda Mart`} />

            <div className="min-h-screen bg-[#EAF7F7] px-4 pb-8 pt-28 font-sans md:px-8 md:pb-10 md:pt-36">
                <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-white/90 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8 lg:p-10">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12">
                        <ProductGallery
                            images={productData.images}
                            selectedImageIndex={selectedImageIndex}
                            onSelectImage={setSelectedImageIndex}
                        />

                        <div className="flex flex-col gap-4 lg:pt-1">
                            <ProductSummary
                                location={productData.location}
                                name={productData.name}
                                price={productData.price}
                                unit={productData.unit}
                            />

                            <PreparationOptions
                                options={productData.preparationOptions}
                                value={prepOption}
                                onChange={setPrepOption}
                            />

                            <QuantitySelector
                                quantity={quantity}
                                availableStock={productData.availableStock}
                                unit={productData.unit}
                                onDecrease={() =>
                                    setQuantity((current) =>
                                        Math.max(1, current - 1),
                                    )
                                }
                                onIncrease={() =>
                                    setQuantity((current) => current + 1)
                                }
                            />

                            <ProductActions />

                            <DeliveryBanner
                                title="Express Cold Delivery available"
                                description="Order within 2 hrs for same-day delivery in coastal areas."
                            />
                        </div>
                    </div>

                    <div className="mt-10 space-y-6 border-t border-slate-100 pt-8 md:mt-12">
                        <ProductTabs
                            activeTab={activeTab}
                            onChangeTab={setActiveTab}
                        />

                        {activeTab === "details" ? (
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                                <ProductDetailsCard
                                    description={productData.description}
                                    nutrition={productData.nutrition}
                                />
                                <ShippingGuaranteeCard
                                    items={productData.guarantees}
                                />
                            </div>
                        ) : (
                            <ProductReviewsCard />
                        )}
                    </div>
                </div>
            </div>
        </StorefrontLayout>
    );
}
