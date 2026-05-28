import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
    required?: boolean;
}

export default function FormInput({
    label,
    errorMessage,
    required,
    className = "",
    ...props
}: FormInputProps) {
    return (
        <div className={className}>
            <label className="block text-sm font-semibold text-gray-700 mb-2 pl-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                {...props}
                required={required}
                className="w-full bg-white/90 border-0 rounded-full px-6 py-3 text-gray-700 shadow-inner focus:ring-2 focus:ring-[#4a7c47] focus:outline-none transition-all duration-300"
            />
            {errorMessage && (
                <p className="text-red-500 text-xs mt-2 pl-2">{errorMessage}</p>
            )}
        </div>
    );
}
