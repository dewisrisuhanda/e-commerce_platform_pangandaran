import React from "react";
import { Link } from "@inertiajs/react";
import {
    User,
    MapPin,
    CreditCard,
    Bell,
    ShieldCheck,
    LogOut,
} from "lucide-react";

export default function SettingsSidebar() {
    const menus = [
        {
            name: "Biodata Diri",
            icon: User,
            active: true,
            href: route("profile.edit"),
        },
        { name: "Alamat", icon: MapPin, active: false, href: "#" },
        { name: "Payment", icon: CreditCard, active: false, href: "#" },
        { name: "Notifikasi", icon: Bell, active: false, href: "#" },
        { name: "Keamanan", icon: ShieldCheck, active: false, href: "#" },
    ];

    return (
        <div className="w-full lg:w-64 flex flex-col gap-2.5">
            {menus.map((menu, i) => (
                <Link
                    key={i}
                    href={menu.href}
                    className={`flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition duration-200 ${
                        menu.active
                            ? "bg-[#E3EFFF] text-[#1e293b] shadow-sm"
                            : "text-slate-500 hover:bg-white hover:shadow-sm"
                    }`}
                >
                    <menu.icon
                        className={`w-5 h-5 ${menu.active ? "text-[#0066CC]" : ""}`}
                    />
                    <span className="text-sm">{menu.name}</span>
                </Link>
            ))}

            {/* logout button */}
            <div className="pt-4 mt-4 border-t border-slate-200/60">
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="flex w-full items-center gap-4 px-6 py-4 rounded-xl font-bold text-red-500 hover:bg-red-50 hover:text-red-600 transition duration-200"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm">Keluar</span>
                </Link>
            </div>
        </div>
    );
}
