import React, { useState } from 'react';
import { DollarSign, Lock, CreditCard, User, Mail, Building, X, CheckCircle, AlertCircle } from 'lucide-react';

interface PaymentFormProps {
  packageDetails: {
    id: string;
    title: string;
    price: string;
    priceAmount: number;
    description: string;
    buttonColor: string;
  };
  onClose: () => void;
  onSuccess: (paymentDetails: any) => void;
}

const MockSponsorPayment: React.FC<PaymentFormProps> = ({ packageDetails, onClose, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [customAmount, setCustomAmount] = useState<number>(packageDetails.priceAmount);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

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
    if (!customerInfo.name || !customerInfo.email) {
      setError('Please fill in all required fields');
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
        setSuccess(true);
        setIsProcessing(false);
        
        // Generate mock transaction details
        const transactionId = `TXN${Date.now()}`;
        const paymentDetails = {
          transactionId,
          amount: customAmount,
          customerInfo,
          packageId: packageDetails.id,
          packageTitle: packageDetails.title,
          cardLast4: cardInfo.number.slice(-4),
          timestamp: new Date().toISOString(),
          receiptNumber: `RCP${Date.now()}`,
          status: 'completed'
        };

        // Wait a moment to show success, then call onSuccess
        setTimeout(() => {
          onSuccess(paymentDetails);
        }, 2000);
      } else {
        setError('Payment failed. Please try again with a different card.');
        setIsProcessing(false);
      }
    }, 2000);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for sponsoring Kumar Prescod with ${customAmount.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            You'll receive a confirmation email shortly with your sponsorship details.
          </p>
          <div className="text-xs text-gray-400 bg-gray-50 p-3 rounded-lg">
            Transaction ID: TXN{Date.now()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Sponsor Payment</h3>
            <p className="text-gray-600">{packageDetails.title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Package Summary */}
          <div className={`p-4 rounded-lg bg-gradient-to-r ${packageDetails.buttonColor.replace('bg-gradient-to-r ', '').replace(' hover:from-blue-800 hover:to-blue-700', '')} text-white`}>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{packageDetails.title}</h4>
                <p className="text-sm opacity-90">{packageDetails.description}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">${customAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-2" />
              Sponsorship Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(Math.max(0, parseInt(e.target.value) || 0))}
                min={packageDetails.priceAmount}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter amount"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Minimum: ${packageDetails.priceAmount.toLocaleString()}
            </p>
          </div>

          {/* Customer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Company/Organization (Optional)
            </label>
            <input
              type="text"
              value={customerInfo.company}
              onChange={(e) => setCustomerInfo({ ...customerInfo, company: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Message (Optional)
            </label>
            <textarea
              value={customerInfo.message}
              onChange={(e) => setCustomerInfo({ ...customerInfo, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any special requests or messages..."
              rows={3}
            />
          </div>

          {/* Payment Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Information
            </h4>
            
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <div className="flex gap-4">
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
              disabled={isProcessing || !customerInfo.name || !customerInfo.email}
              className={`flex-1 py-3 px-6 ${packageDetails.buttonColor} text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold`}
            >
              {isProcessing ? 'Processing...' : `Pay $${customAmount.toLocaleString()}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MockSponsorPayment;