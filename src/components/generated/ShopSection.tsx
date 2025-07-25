"use client";

import * as React from "react";
import { Star, Truck, Shield, ShoppingCart, Plus, Minus, X } from "lucide-react";
import { MockShopPayment, type CartItem, type ShopItem } from '../payments/MockShopPayment';

export interface ShopSectionProps {
  className?: string;
}
const merchandise = [{
  id: "kumar-signature-tee",
  name: "Kumar Prescod Signature Tee",
  price: "$35",
  image: "/api/placeholder/400/400",
  description: "Official Kumar Prescod t-shirt with 'Straight Outta Oakland' design",
  shopifyUrl: "https://your-store.myshopify.com/products/kumar-signature-tee"
}, {
  id: "oakland-boxing-hoodie",
  name: "Oakland Boxing Hoodie",
  price: "$65",
  image: "/api/placeholder/400/400",
  description: "Premium hoodie celebrating Oakland boxing legacy",
  shopifyUrl: "https://your-store.myshopify.com/products/oakland-boxing-hoodie"
}, {
  id: "kumar-boxing-gloves",
  name: "Kumar Pro Boxing Gloves",
  price: "$150",
  image: "/api/placeholder/400/400",
  description: "Professional-grade boxing gloves as used by Kumar",
  shopifyUrl: "https://your-store.myshopify.com/products/kumar-boxing-gloves"
}, {
  id: "oakland-champion-cap",
  name: "Oakland Champion Cap",
  price: "$30",
  image: "/api/placeholder/400/400",
  description: "Snapback cap with Oakland boxing pride design",
  shopifyUrl: "https://your-store.myshopify.com/products/oakland-champion-cap"
}] as any[];
export default function ShopSection({
  className = ""
}: ShopSectionProps) {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [showCart, setShowCart] = React.useState(false);
  const [showCheckout, setShowCheckout] = React.useState(false);

  const addToCart = (item: ShopItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[$,]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleOrderSuccess = (orderDetails: any) => {
    console.log('Order successful:', orderDetails);
    setCart([]);
    setShowCheckout(false);
    setShowCart(false);
    // You could show a success message here
  };
  return <section className={`py-20 bg-black relative overflow-hidden ${className}`} id="shop">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            OFFICIAL <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text">SHOP</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get authentic Kumar Prescod merchandise and gear. Represent Oakland boxing pride with official championship collection.
          </p>
          
          {/* Cart Button */}
          <button
            onClick={() => setShowCart(true)}
            className="absolute top-0 right-0 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ShoppingCart className="w-6 h-6" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {getCartItemCount()}
              </span>
            )}
          </button>
        </header>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-center justify-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
            <Truck className="w-6 h-6 text-orange-500 mr-3" />
            <div>
              <h4 className="font-bold text-white text-base">Free Shipping</h4>
              <p className="text-gray-400 text-sm">On orders over $75</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
            <Shield className="w-6 h-6 text-orange-500 mr-3" />
            <div>
              <h4 className="font-bold text-white text-base">Authentic Gear</h4>
              <p className="text-gray-400 text-sm">Official merchandise</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
            <Star className="w-6 h-6 text-orange-500 mr-3" />
            <div>
              <h4 className="font-bold text-white text-base">Premium Quality</h4>
              <p className="text-gray-400 text-sm">Championship grade</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {merchandise.map(item => (
            <div key={item.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-500">
                    {item.price}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-12 text-center border border-gray-700 hover:border-orange-500/50 transition-colors">
          <h3 className="text-3xl font-bold text-white mb-4">
            JOIN THE <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text">CHAMPIONSHIP CIRCLE</span>
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new drops and special offers from Kumar Prescod's official store.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-orange-500 transition-colors" 
            />
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Shopping Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h3 className="text-2xl font-bold text-gray-900">Shopping Cart</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                    <button
                      onClick={() => setShowCart(false)}
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-gray-600">{item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-red-600 hover:bg-red-50 rounded"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center text-xl font-bold text-gray-900 mb-4">
                        <span>Total: ${getCartTotal().toLocaleString()}</span>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setShowCart(false)}
                          className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Continue Shopping
                        </button>
                        <button
                          onClick={() => {
                            setShowCart(false);
                            setShowCheckout(true);
                          }}
                          className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg transition-all duration-300 font-semibold"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mock Checkout */}
        {showCheckout && cart.length > 0 && (
          <MockShopPayment
            items={cart}
            onClose={() => setShowCheckout(false)}
            onSuccess={handleOrderSuccess}
          />
        )}
      </div>
    </section>;
}