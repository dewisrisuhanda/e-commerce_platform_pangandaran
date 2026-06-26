import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import StorefrontLayout from '@/Layouts/StorefrontLayout';

import CartStoreGroup from '@/Components/Cart/CartStoreGroup';
import CartSummary from '@/Components/Cart/CartSummary';
import ProductRecommendations from '@/Components/Cart/ProductRecommendations';

export default function Cart() {
    // Data dummy 100% ngikutin gambar desain lu
    const [cartData] = useState([
        {
            id: 1,
            storeName: "Toko Ikan Pak Agus",
            items: [
                { id: 101, name: "Ikan Kakap Merah", weight: "500g", price: 185000, qty: 2, stock: null, img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=200" },
                { id: 102, name: "Udang Jumbo", weight: "500g", price: 185000, qty: 2, stock: 3, img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=200" }
            ]
        },
        {
            id: 2,
            storeName: "Warung Ikan Mantap",
            items: [
                { id: 103, name: "Ikan Kakap Merah", weight: "500g", price: 185000, qty: 2, stock: null, img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=200" },
                { id: 104, name: "Udang Jumbo", weight: "500g", price: 185000, qty: 2, stock: 3, img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=200" }
            ]
        }
    ]);

    return (
        <StorefrontLayout>
            <Head title="Keranjang - ParigiMart" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-24">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Keranjang</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* BAGIAN KIRI */}
                    <div className="lg:col-span-8">

                        {/* Checkbox Pilih Semua */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-6">
                            <label className="flex items-center gap-3 cursor-pointer w-fit">
                                <input type="checkbox" className="w-5 h-5 rounded text-[#245D56] focus:ring-[#245D56] border-slate-300" />
                                <span className="font-bold text-gray-900 text-sm">Pilih semua Product</span>
                            </label>
                        </div>

                        {/* Looping Toko */}
                        {cartData.map((store) => (
                            <CartStoreGroup key={store.id} store={store} />
                        ))}
                    </div>

                    {/* BAGIAN KANAN */}
                    <div className="lg:col-span-4">
                        <CartSummary />
                    </div>
                </div>

                <ProductRecommendations />
            </div>
        </StorefrontLayout>
    );
}
