import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface Props {
    subtotal: number;
    deliveryFee: number;
    totalItems: number;
}

export default function OrderSummary({ subtotal, deliveryFee, totalItems }: Props) {
    const adminFee = 2000;
    const grandTotal = subtotal + deliveryFee + adminFee;

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 top-32">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-slate-100">
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Subtotal ({totalItems} items)</span>
                    <span className="text-gray-900 font-bold">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Ongkir</span>
                    <span className="text-gray-900 font-bold">Rp {deliveryFee.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Biaya Admin</span>
                    <span className="text-gray-900 font-bold">Rp {adminFee.toLocaleString('id-ID')}</span>
                </div>
            </div>

            <div className="flex justify-between items-end mb-8">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-[#245D56]">Rp {grandTotal.toLocaleString('id-ID')}</span>
            </div>

            <button className="w-full bg-[#245D56] text-white font-bold py-4 rounded-2xl hover:bg-[#1a443f] transition shadow-lg shadow-[#245D56]/20 mb-4">
                Pay Now
            </button>

            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Transactions are 100% secure</span>
            </div>
        </div>
    );
}
