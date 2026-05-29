import { PropsWithChildren } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    Grid,
    ShoppingCart,
    Package,
    Truck,
    Settings,
    LogOut,
    Search,
    Bell,
    MessageSquare,
} from "lucide-react";

export default function DashboardLayout({ children }: PropsWithChildren) {
    const { url } = usePage();
    const user = usePage().props.auth.user;

    return (
        <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
            {/* SIDEBAR */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-20 flex flex-col">
                <div className="h-20 flex items-center justify-center border-b border-gray-100">
                    <h1 className="text-3xl font-bold tracking-tight">
                        <span className="text-[#367533]">Parigi</span>
                        <span className="text-[#F58C00]">Mart</span>
                    </h1>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    <Link
                        href={route("dashboard")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${url.startsWith("/dashboard") ? "bg-[#367533] text-white" : "text-gray-600 hover:bg-gray-50 hover:text-[#367533]"}`}
                    >
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#367533] transition-colors"
                    >
                        <Grid className="w-5 h-5" /> Categories
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#367533] transition-colors"
                    >
                        <ShoppingCart className="w-5 h-5" /> Keranjang
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#367533] transition-colors"
                    >
                        <Package className="w-5 h-5" /> Orders
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#367533] transition-colors"
                    >
                        <Truck className="w-5 h-5" /> Pengiriman
                    </Link>

                    <div className="pt-8 mt-8 border-t border-gray-100">
                        <Link
                            href="#"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#367533] transition-colors"
                        >
                            <Settings className="w-5 h-5" /> Settings
                        </Link>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-500 hover:bg-red-50 transition-colors"
                        >
                            <LogOut className="w-5 h-5" /> Logout
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* main content */}
            <div className="ml-64 flex-1 flex flex-col min-h-screen">
                {/* topbar */}
                <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
                    <div className="w-96 relative">
                        <input
                            type="text"
                            placeholder="Search.."
                            className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-5 pr-10 focus:ring-2 focus:ring-[#367533]/20 text-sm"
                        />
                        <Search className="absolute right-4 top-2.5 text-gray-400 w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="text-gray-500 hover:text-[#367533] transition-colors">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="text-gray-500 hover:text-[#367533] transition-colors">
                            <MessageSquare className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                            <div className="w-10 h-10 bg-[#367533] text-white rounded-full flex items-center justify-center font-bold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-8 flex-1 overflow-x-hidden">{children}</main>
            </div>
        </div>
    );
}
