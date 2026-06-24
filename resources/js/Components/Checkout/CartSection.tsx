import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

interface CartItem {
    id: number;
    name: string;
    location: string;
    price: number;
    qty: number;
    img: string;
}

export default function CartSection({ items }: { items: CartItem[] }) {
    return (
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-6 h-6 text-[#245D56]" />
                <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
            </div>

            <div className="space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                        <img src={item.img} alt={item.name} className="w-20 h-20 rounded-2xl object-cover bg-slate-100" />
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-sm md:text-base">{item.name}</h3>
                            <p className="text-xs text-slate-500 mt-1">{item.location}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-[#245D56] text-sm md:text-base mb-3">
                                Rp {item.price.toLocaleString('id-ID')}
                            </p>
                            <div className="flex items-center justify-end gap-3 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 w-fit ml-auto">
                                <button className="text-slate-400 hover:text-gray-900"><Minus className="w-3.5 h-3.5" /></button>
                                <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                                <button className="text-slate-400 hover:text-gray-900"><Plus className="w-3.5 h-3.5" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
