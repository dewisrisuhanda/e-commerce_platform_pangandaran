<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\SocialiteController;

Route::redirect('/', '/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/shop', function () {
    return Inertia::render('Storefront/Shop');
})->name('shop');

Route::get('/product/{id}', function ($id) {
    // nanti di sini logic nge-fetch data dari database pake $id
    return Inertia::render('Storefront/ProductDetail', [
        'productId' => $id,
    ]);
})->name('product.detail');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile/photo', [ProfileController::class, 'updatePhoto'])->name('profile.photo.update');
    Route::get('/checkout', function () {
        return Inertia::render('Checkout/Checkout');
    })->name('checkout');

    Route::get('/cart', function () {
        return Inertia::render('Cart/Cart');
    })->name('cart');
});

Route::get('/auth/google/redirect', [SocialiteController::class, 'redirect'])->name('google.redirect');
Route::get('/auth/google/callback', [SocialiteController::class, 'callback'])->name('google.callback');

require __DIR__ . '/auth.php';
