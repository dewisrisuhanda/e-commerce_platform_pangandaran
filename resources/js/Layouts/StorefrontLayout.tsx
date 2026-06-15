import { PropsWithChildren } from "react";
import Navbar from "@/Components/Global/Navbar";
import Footer from "@/Components/Global/Footer";

export default function StorefrontLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans overflow-x-hidden">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    );
}
