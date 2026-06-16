import React from "react";
import { Star } from "lucide-react";

export default function ProductReviewsCard() {
    // data dummy untuk 1 review
    const review = {
        id: 1,
        avatarInitials: "BW",
        name: "Budi W.",
        date: "2 days ago",
        rating: 5,
        text: "Incredibly fresh! The flesh was firm and sweet. I ordered the whole fish option and it came perfectly cleaned. Grilled it with some local spices and it was fantastic. Highly recommend supporting these local fishermen.",
    };

    return (
        <div className="rounded-[1.75rem] border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
            {/* header */}
            <div className="flex items-start justify-between gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="space-y-1.5">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-950 tracking-tight">
                        Customer Reviews
                    </h3>
                    <div className="flex items-center gap-2">
                        {/* rating */}
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-slate-300"}`}
                                    strokeWidth={1.5}
                                />
                            ))}
                        </div>
                        <span className="font-bold text-gray-950 text-base">
                            4.8
                        </span>
                        <span className="text-sm text-slate-500 font-medium">
                            (124 reviews)
                        </span>
                    </div>
                </div>
                <a
                    href="#"
                    className="text-sm font-bold text-[#0066CC] hover:text-[#1a443f] transition whitespace-nowrap"
                >
                    See all
                </a>
            </div>

            {/* reviewer */}
            <div className="pt-2">
                <div className="flex items-start justify-between gap-4 mb-5">
                    {/* user info */}
                    <div className="flex gap-4">
                        {/* avatar */}
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-lg border border-blue-200">
                            {review.avatarInitials}
                        </div>
                        {/* name & date */}
                        <div className="flex flex-col">
                            <h4 className="font-bold text-gray-950 text-base">
                                {review.name}
                            </h4>
                            <span className="text-xs text-slate-500 mt-1">
                                {review.date}
                            </span>
                        </div>
                    </div>
                    {/* review star rating */}
                    <div className="flex gap-0.5 pt-1.5">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                strokeWidth={1.5}
                            />
                        ))}
                    </div>
                </div>
                {/* review text */}
                <p className="text-sm text-slate-600 leading-relaxed">
                    {review.text}
                </p>
            </div>
        </div>
    );
}
