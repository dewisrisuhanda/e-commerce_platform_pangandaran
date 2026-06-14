import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { ShoppingCart, User } from "lucide-react";
import logoParigi from "@/assets/images/parigi_logo.png";

export default function Navbar() {
    const user = usePage().props.auth.user;

    const [isVisible, setIsVisible] = useState(true);

    // scroll effect
    useEffect(() => {
        let scrollTimeout: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            setIsVisible(false);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsVisible(true);
            }, 250);
        };

        // listener buat semua browser
        window.addEventListener("scroll", handleScroll);

        // clear listener pas komponen unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <div
            className={`fixed top-6 w-full flex justify-center z-50 px-4 md:px-8 transition-transform duration-300 ease-in-out ${
                isVisible ? "translate-y-0" : "translate-y-[-150%]"
            }`}
        >
            <nav className="w-full max-w-350 bg-linear-to-r from-[#389f9f]/50 via-[#74bcbc]/30 to-[#f0f4f8]/70 backdrop-blur-xl shadow-md rounded-full px-6 py-3 flex items-center justify-between border border-white/40">
                {/*nav logo*/}
                <Link href="/" className="flex items-center">
                    <img
                        src={logoParigi}
                        alt="Parigi Mart Logo"
                        className="h-12 object-contain drop-shadow-md"
                    />
                </Link>

                {/* navlinks */}
                <div className="hidden lg:flex items-center justify-between gap-2 bg-white/40 backdrop-blur-md rounded-full p-2 px-6 xl:px-8 shadow-inner border border-white/50 min-w-125 xl:min-w-162.5">
                    <Link
                        href="#"
                        className="bg-white text-gray-900 py-2.5 rounded-full font-bold shadow-sm text-sm text-center flex-1"
                    >
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="text-[#4A5568] hover:text-gray-900 hover:bg-white/40 py-2.5 rounded-full font-bold text-sm transition-all text-center flex-1"
                    >
                        Shop
                    </Link>
                    <Link
                        href="#"
                        className="text-[#4A5568] hover:text-gray-900 hover:bg-white/40 py-2.5 rounded-full font-bold text-sm transition-all text-center flex-1"
                    >
                        Order
                    </Link>
                    <Link
                        href="#"
                        className="text-[#4A5568] hover:text-gray-900 hover:bg-white/40 py-2.5 rounded-full font-bold text-sm transition-all text-center flex-1"
                    >
                        Delivery
                    </Link>
                </div>

                {/* profile icon */}
                <div className="flex items-center gap-3">
                    <button className="w-13 h-13 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition shadow-sm border border-gray-100">
                        <ShoppingCart
                            className="w-6 h-6 text-gray-800"
                            strokeWidth={2}
                        />
                    </button>

                    {user ? (
                        <Link
                            href={route("profile.edit")}
                            className="flex items-center gap-3 bg-white/90 hover:bg-white pl-6 pr-2 py-2 rounded-full transition shadow-sm border border-gray-100"
                        >
                            <span className="font-bold text-sm text-gray-800">
                                {user.name.split(" ")[0]}
                            </span>
                            <div className="w-9 h-9 bg-[#344054] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                        </Link>
                    ) : (
                        <Link
                            href={route("login")}
                            className="flex items-center gap-3 bg-white/90 hover:bg-white pl-6 pr-2 py-2 rounded-full transition shadow-sm border border-gray-100"
                        >
                            <span className="font-bold text-gray-800 text-base">
                                Login
                            </span>
                            <div className="w-9 h-9 bg-[#344054] text-white rounded-full flex items-center justify-center">
                                <User className="w-5 h-5" />
                            </div>
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
}
