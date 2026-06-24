import React from 'react';
import { MapPin } from 'lucide-react';

export default function ShippingSection() {
    return (
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-[#245D56]" />
                <h2 className="text-xl font-bold text-gray-900">Shipping Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-xs font-bold text-slate-500 mb-2 block">Full Name</label>
                    <input type="text" defaultValue="Caesar" className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-[#40E0D0] focus:border-[#40E0D0] text-sm font-medium" />
                </div>
                <div>
                    <label className="text-xs font-bold text-slate-500 mb-2 block">Phone Number</label>
                    <input type="text" defaultValue="+62 812..." className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-[#40E0D0] focus:border-[#40E0D0] text-sm font-medium" />
                </div>
                <div className="md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 mb-2 block">Full Address</label>
                    <textarea rows={3} placeholder="Street name, building, house number..." className="w-full px-4 py-3 rounded-xl border-slate-200 focus:ring-[#40E0D0] focus:border-[#40E0D0] text-sm font-medium resize-none"></textarea>
                </div>
            </div>
        </section>
    );
}
