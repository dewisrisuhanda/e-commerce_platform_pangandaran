import React from 'react';
import { Truck, ShieldCheck } from 'lucide-react';

interface Props {
    selected: string;
    onSelect: (val: string) => void;
}

export default function DeliverySection({ selected, onSelect }: Props) {
    return (
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
                <Truck className="w-6 h-6 text-[#245D56]" />
                <h2 className="text-xl font-bold text-gray-900">Delivery Method</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    onClick={() => onSelect('coastal')}
                    className={`relative p-5 rounded-2xl border-2 cursor-pointer transition ${selected === 'coastal' ? 'border-[#40E0D0] bg-[#40E0D0]/5' : 'border-slate-100 hover:border-slate-200'}`}
                >
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-gray-900">Coastal Express</span>
                            <span className="text-[10px] font-bold bg-[#40E0D0]/20 text-[#245D56] px-2 py-0.5 rounded-full">RECOMMENDED</span>
                        </div>
                        {selected === 'coastal' && <ShieldCheck className="w-5 h-5 text-[#40E0D0]" />}
                    </div>
                    <p className="text-xs text-slate-500 mb-3">Same-day fresh delivery</p>
                    <p className="font-bold text-sm text-[#245D56]">Rp 25.000</p>
                </div>

                <div
                    onClick={() => onSelect('standard')}
                    className={`relative p-5 rounded-2xl border-2 cursor-pointer transition ${selected === 'standard' ? 'border-[#40E0D0] bg-[#40E0D0]/5' : 'border-slate-100 hover:border-slate-200'}`}
                >
                    <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-sm text-gray-900">Standard Shipping</span>
                        {selected === 'standard' && <ShieldCheck className="w-5 h-5 text-[#40E0D0]" />}
                    </div>
                    <p className="text-xs text-slate-500 mb-3">2-3 Business Days</p>
                    <p className="font-bold text-sm text-[#245D56]">Rp 15.000</p>
                </div>
            </div>
        </section>
    );
}
