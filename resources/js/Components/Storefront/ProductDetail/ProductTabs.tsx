type ProductTabsProps = {
    activeTab: "details" | "reviews";
    onChangeTab: (tab: "details" | "reviews") => void;
};

export default function ProductTabs({
    activeTab,
    onChangeTab,
}: ProductTabsProps) {
    return (
        <div className="flex gap-8 border-b border-slate-200">
            <button
                type="button"
                onClick={() => onChangeTab("details")}
                className={`pb-3 text-base font-semibold transition ${activeTab === "details" ? "border-b-2 border-slate-900 text-slate-900" : "text-slate-400 hover:text-slate-900"}`}
            >
                Details
            </button>
            <button
                type="button"
                onClick={() => onChangeTab("reviews")}
                className={`pb-3 text-base font-semibold transition ${activeTab === "reviews" ? "border-b-2 border-slate-900 text-slate-900" : "text-slate-400 hover:text-slate-900"}`}
            >
                Reviews
            </button>
        </div>
    );
}
