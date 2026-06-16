interface Option {
    id: string;
    label: string;
    description: string;
}

interface Props {
    options: Option[];
    value: string;
    onChange: (val: string) => void;
}

export default function PreparationOptions({
    options,
    value,
    onChange,
}: Props) {
    return (
        <div className="mb-6 border-t border-gray-100 pt-6">
            <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide">
                Preparation Option
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onChange(option.id)}
                        className={`flex flex-col items-center justify-center py-4 px-4 rounded-xl border-2 transition ${
                            value === option.id
                                ? "border-[#40E0D0] bg-[#F0FDFD] text-[#1a443f]"
                                : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                    >
                        <span className="font-bold text-sm">
                            {option.label}
                        </span>
                        <span className="text-xs mt-1 text-gray-500">
                            {option.description}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
