import { Head, Link, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Dashboard" />

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard Parigi Mart
                    </h2>
                </div>
            </header>

            {/* Konten Utama */}
            <main className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-3xl border border-gray-100 p-8 md:p-12 flex flex-col items-center text-center">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#367533] mb-4">
                            Selamat datang, {user.name}!
                        </h3>

                        <p className="text-lg text-gray-600 mb-8">
                            using email:{" "}
                            <span className="font-semibold text-gray-800">
                                {user.email}
                            </span>
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all"
                            >
                                Keluar / Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
