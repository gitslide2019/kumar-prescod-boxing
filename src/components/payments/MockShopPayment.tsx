import React, { useState } from 'react';
import { Package, Truck, Lock, CreditCard, User, Mail, MapPin, X, CheckCircle, AlertCircle } from 'lucide-react';

interface ShopItem {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface CartItem extends ShopItem {
  quantity: number;
}

interface MockShopPaymentProps {
  items: CartItem[];
  onClose: () => void;
  onSuccess: (orderDetails: any) => void;
}

const MockShopPayment: React.FC<MockShopPaymentProps> = ({ items, onClose, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const subtotal = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[$,]/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const shipping = subtotal > 75 ? 0 : 15; // Free shipping over $75
  const tax = Math.round(subtotal * 0.0875); // Assuming 8.75% tax rate
  const total = subtotal + shipping + tax;

  const validateCardNumber = (number: string): boolean => {
    const cleaned = number.replace(/\s/g, '');
    return /^\d{16}$/.test(cleaned);
  };

  const validateExpiry = (expiry: string): boolean => {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
    const [month, year] = expiry.split('/').map(Number);
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (month < 1 || month > 12) return false;
    if (year < currentYear || (year === currentYear && month < currentMonth)) return false;
    return true;
  };

  const validateCVV = (cvv: string): boolean => {
    return /^\d{3,4}$/.test(cvv);
  };

  const formatCardNumber = (value: string): string => {
    const cleaned = value.replace(/\s/g, '');
    const match = cleaned.match(/.{1,4}/g);
    return match ? match.join(' ') : cleaned;
  };

  const formatExpiry = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    
    // Validation
    if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.address || !shippingInfo.city || !shippingInfo.state || !shippingInfo.zipCode) {
      setError('Please fill in all required shipping information');
      return;
    }
    
    if (!validateCardNumber(cardInfo.number)) {
      setError('Please enter a valid 16-digit card number');
      return;
    }
    
    if (!validateExpiry(cardInfo.expiry)) {
      setError('Please enter a valid expiry date (MM/YY)');
      return;
    }
    
    if (!validateCVV(cardInfo.cvv)) {
      setError('Please enter a valid CVV (3-4 digits)');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // 95% success rate simulation
      const isSuccess = Math.random() > 0.05;
      
      if (isSuccess) {
        const generatedOrderNumber = `KP${Date.now()}`;
        setOrderNumber(generatedOrderNumber);
        setSuccess(true);
        setIsProcessing(false);
        
        // Generate mock order details
        const orderDetails = {
          orderNumber: generatedOrderNumber,
          items,
          shippingInfo,
          amounts: {
            subtotal,
            shipping,
            tax,
            total
          },
          cardLast4: cardInfo.number.slice(-4),
          timestamp: new Date().toISOString(),
          estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          trackingNumber: `TRK${Date.now()}`,
          status: 'confirmed'
        };

        // Wait a moment to show success, then call onSuccess
        setTimeout(() => {
          onSuccess(orderDetails);
        }, 3000);
      } else {
        setError('Payment failed. Please try again with a different card.');
        setIsProcessing(false);
      }
    }, 2500);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for your order of ${total.toLocaleString()}
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-sm font-medium text-gray-900">Order Number</p>
            <p className="text-lg font-bold text-orange-600">{orderNumber}</p>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            You'll receive a confirmation email with tracking information shortly.
          </p>
          <div className="text-xs text-gray-400">
            <p>Estimated delivery: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Complete Your Order</h3>
            <p className="text-gray-600">Kumar Prescod Official Store</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Order Summary */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Order Summary
              </h4>
              
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900">{item.name}</h5>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                        <span className="font-semibold text-gray-900">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>${tax}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-2">
                  <span>Total:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {subtotal < 75 && (
                <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center text-orange-700">
                    <Truck className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      Add ${75 - subtotal} more for free shipping!
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Payment Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Shipping Information
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.name}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Street Address *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <input
                      type="text"
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP *</label>
                    <input
                      type="text"
                      value={shippingInfo.zipCode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
                  Payment Information
                </h4>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                    <input
                      type="text"
                      value={cardInfo.number}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        if (formatted.replace(/\s/g, '').length <= 16) {
                          setCardInfo({ ...cardInfo, number: formatted });
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        value={cardInfo.expiry}
                        onChange={(e) => {
                          const formatted = formatExpiry(e.target.value);
                          setCardInfo({ ...cardInfo, expiry: formatted });
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                      <input
                        type="text"
                        value={cardInfo.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 4) {
                            setCardInfo({ ...cardInfo, cvv: value });
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <Lock className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Your payment information is secure and encrypted. This is a demo payment system.</span>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    disabled={isProcessing}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold"
                  >
                    {isProcessing ? 'Processing...' : `Complete Order • $${total.toLocaleString()}`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MockShopPayment };
export type { CartItem, ShopItem };