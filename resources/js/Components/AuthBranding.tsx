import logoParigi from "@/assets/images/parigi_logo.png";
import { motion } from "framer-motion";

interface Props {
    type?: "login" | "register";
}

export default function AuthBranding({ type = "login" }: Props) {
    return (
        <div className="w-full flex flex-col items-center justify-center p-4 md:p-8 h-full">
            <div className="w-full flex flex-col items-center shrink-0">
                <img
                    src={logoParigi}
                    alt="ParigiMart Logo"
                    loading="lazy"
                    className="w-32 sm:w-48 md:w-64 drop-shadow-xl transition-transform duration-500 ease-out mb-4 md:mb-8 select-none shrink-0"
                />
                <h1
                    className="text-center font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight select-none relative z-10 shrink-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                    <span className="text-[#4FD1C5]">CIBENDA</span>
                    <span className="text-white">MART</span>
                </h1>

                {type === "register" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-8 text-center space-y-3 relative z-10 w-full max-w-sm"
                    >
                        <p className="text-gray-800 font-bold text-lg drop-shadow-md">
                            Belanja Kebutuhan Harian Lebih Untung!
                        </p>
                        <div className="flex flex-col gap-2 text-sm font-semibold text-gray-700 bg-white/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/50 shadow-sm">
                            <p>gatau isi apa weh</p>
                            <p>iya sama gua juga bingung</p>
                            <p>iya lagi bener juga lau, gua ge bingung</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
