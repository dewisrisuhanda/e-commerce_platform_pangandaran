import { NutritionItem } from "./types";

type ProductDetailsCardProps = {
    description: string;
    nutrition: NutritionItem[];
};

export default function ProductDetailsCard({
    description,
    nutrition,
}: ProductDetailsCardProps) {
    return (
        <div className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">
            <div className="space-y-6">
                <div>
                    <h3 className="mb-3 text-lg font-bold text-slate-950">
                        Product Details
                    </h3>
                    <p className="text-sm leading-7 text-slate-500">{description}</p>
                </div>

                <div>
                    <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
                        Nutritional Information (per 100g)
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        {nutrition.map((item) => (
                            <li key={item.label} className="flex items-center justify-between gap-4">
                                <span>{item.label}</span>
                                {item.value ? (
                                    <span className="font-bold text-slate-950">
                                        {item.value}
                                    </span>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
