import { PropsWithChildren } from "react";
import { usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

import loginBg from "@/assets/images/log_bg.jpeg";
import AuthBranding from "@/Components/AuthBranding";

export default function AuthLayout({ children }: PropsWithChildren) {
    const { url } = usePage();
    const isLogin = url === "/login";

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 overflow-hidden bg-gray-100">
            <img
                src={loginBg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                fetchPriority="high"
            />
            <div className="absolute inset-0 bg-black/10 z-0"></div>

            {/* glass container*/}
            <div className="relative z-10 w-full max-w-5xl bg-white/20 backdrop-blur-md border border-white/30 rounded-4xl shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-300">
                {/* logo */}
                <motion.div
                    layout="position"
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    className={`w-full md:flex-1 flex justify-center z-10 ${isLogin ? "order-1" : "order-2"}`}
                >
                    <AuthBranding type={isLogin ? "login" : "register"} />
                </motion.div>

                {/* form card */}
                <motion.div
                    layout="position"
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    className={`w-full md:flex-1 bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 z-20 flex flex-col overflow-hidden min-h-150 lg:min-h-162.5 p-8 md:p-10 ${isLogin ? "order-2" : "order-1"}`}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={url}
                            initial={{ opacity: 0, x: isLogin ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isLogin ? -20 : 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full flex flex-col"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
