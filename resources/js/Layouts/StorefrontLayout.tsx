import { PropsWithChildren } from "react";
import Navbar from "@/Components/Navbar";

export default function StorefrontLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans overflow-x-hidden">
            <Navbar />
            <main className="w-full">{children}</main>
        </div>
    );
}
