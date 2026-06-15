import { Truck, Lock, ShieldCheck, Smartphone, Tag } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Free delivery",
        description: "Lorem ipsum bla bla blaa gitu deh",
        icon: Truck,
    },
    {
        id: 2,
        title: "100% secure payment",
        description: "Lorem ipsum bla bla blaa gitu deh",
        icon: Lock,
    },
    {
        id: 3,
        title: "Quality guarantee",
        description: "Lorem ipsum bla bla blaa gitu deh",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Guarantee Savings",
        description: "Lorem ipsum bla bla blaa gitu deh",
        icon: Smartphone,
    },
    {
        id: 5,
        title: "Daily Offers",
        description: "Lorem ipsum bla bla blaa gitu deh",
        icon: Tag,
    },
];

export default function StoreFeatures() {
    return (
        <section className="w-full py-16">
            <div className="max-w-400 mx-auto px-4 md:px-8 lg:px-12">
                {/* grid card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
                    {features.map((feature) => {
                        const IconComponent = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className="bg-white border border-gray-400 p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* icon */}
                                <div className="mb-4 text-black">
                                    <IconComponent
                                        className="w-8 h-8"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* title */}
                                <h3 className="font-bold text-black text-lg mb-3 leading-snug">
                                    {feature.title}
                                </h3>

                                {/* description */}
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
