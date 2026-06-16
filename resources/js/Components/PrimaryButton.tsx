import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`w-full bg-[#215B63] hover:bg-[#1A4A50] text-white font-bold rounded-full px-6 py-3 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
}
