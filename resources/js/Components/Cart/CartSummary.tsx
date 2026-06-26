import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function CartSummary() {
    return (
        <div className="space-y-4 sticky top-32">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">Subtotal (4 items)</span>
                        <span className="text-gray-900 font-bold">Rp 885.000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">Delivery Fee</span>
                        <span className="text-gray-900 font-bold">Rp 25.000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">Cold-Chain Packaging</span>
                        <span className="text-gray-900 font-bold">Rp 15.000</span>
                    </div>
                </div>

                <div className="flex justify-between items-end mb-6">
                    <span className="text-sm font-medium text-slate-500">Total Payment</span>
                    <span className="text-xl font-bold text-[#245D56]">Rp 705.000</span>
                </div>

                <Link href={route('checkout')} className="w-full flex items-center justify-center bg-[#245D56] text-white font-bold py-3.5 rounded-2xl hover:bg-[#1a443f] transition shadow-lg shadow-[#245D56]/20 mb-4">
                    Checkout
                </Link>

                <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>100% Pembayaran aman</span>
                </div>
            </div>

            <Link href={route('shop')} className="w-full flex items-center justify-center gap-2 bg-[#245D56]/10 text-[#245D56] font-bold py-3.5 rounded-2xl hover:bg-[#245D56]/20 transition">
                <ArrowLeft className="w-4 h-4" />
                Back to shopping
            </Link>
        </div>
    );
}
