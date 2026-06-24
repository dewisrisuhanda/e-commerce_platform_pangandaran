import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

import StorefrontLayout from '@/Layouts/StorefrontLayout';
import CartSection from '@/Components/Checkout/CartSection';
import ShippingSection from '@/Components/Checkout/ShippingSection';
import DeliverySection from '@/Components/Checkout/DeliverySection';
import PaymentSection from '@/Components/Checkout/PaymentSection';
import OrderSummary from '@/Components/Checkout/OrderSummary';

export default function Checkout() {
    const [cartItems] = useState([
        { id: 1, name: "Udang Besar", location: "Pangandaran - Parigi", price: 120000, qty: 1, img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=200" },
        { id: 2, name: "Ikan Kakap Merah", location: "Pangandaran - Cibenda", price: 85000, qty: 2, img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=200" },
    ]);
    const [deliveryMethod, setDeliveryMethod] = useState('coastal');
    const [paymentMethod, setPaymentMethod] = useState('card');

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
    const deliveryFee = deliveryMethod === 'coastal' ? 25000 : 15000;

    return (
        <StorefrontLayout>
            <Head title="Checkout - ParigiMart" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <div className="lg:col-span-8 space-y-6">
                        <CartSection items={cartItems} />
                        <ShippingSection />
                        <DeliverySection
                            selected={deliveryMethod}
                            onSelect={setDeliveryMethod}
                        />
                        <PaymentSection
                            selected={paymentMethod}
                            onSelect={setPaymentMethod}
                        />
                    </div>

                    <div className="lg:col-span-4">
                        <OrderSummary
                            subtotal={subtotal}
                            deliveryFee={deliveryFee}
                            totalItems={totalItems}
                        />
                    </div>

                </div>
            </div>
        </StorefrontLayout>
    );
}
