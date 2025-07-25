"use client";

import * as React from "react";
import { ShoppingCart, Star, Truck, Shield, Heart } from "lucide-react";

// Premium UI components
const Card = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <article className={`bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-gray-200 ${className}`}>
    {children}
  </article>;
const CardHeader = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <header className={`px-8 py-6 ${className}`}>{children}</header>;
const CardTitle = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <h3 className={`text-xl font-bold leading-tight tracking-tight ${className}`}>{children}</h3>;
const CardContent = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-8 pb-8 ${className}`}>{children}</div>;
const Button = ({
  children,
  className = "",
  size = "default",
  variant = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const sizeClasses = {
    sm: "px-4 py-2.5 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const variantClasses = {
    default: "bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-800 shadow-lg hover:shadow-xl",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
    ghost: "text-gray-900 hover:bg-gray-100"
  };
  return <button className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-900/20 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 active:scale-95 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>;
};
const Badge = ({
  children,
  className = "",
  variant = "default"
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "premium";
}) => {
  const variantClasses = {
    default: "bg-gradient-to-r from-gray-900 to-black text-white",
    outline: "border-2 border-gray-900 bg-white text-gray-900",
    premium: "bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold"
  };
  return <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${variantClasses[variant]} ${className}`}>
      {children}
    </span>;
};
export interface ShopSectionProps {
  className?: string;
}
const merchandise = [{
  id: "raw-one-signature-tee",
  name: "The Raw One Signature Tee",
  brand: "The Raw One",
  price: "$45",
  originalPrice: "$65",
  image: "/api/placeholder/400/400",
  description: "Premium heavyweight cotton tee featuring The Raw One's iconic logo with Oakland pride",
  rating: 4.9,
  reviews: 247,
  badge: "Best Seller",
  colors: ["Black", "White", "Oakland Gold"],
  category: "Apparel",
  isLimited: false
}, {
  id: "straight-outta-oakland-hoodie",
  name: "Straight Outta Oakland Championship Hoodie",
  brand: "Straight Outta Oakland",
  price: "$85",
  originalPrice: "$120",
  image: "/api/placeholder/400/400",
  description: "Luxury fleece hoodie celebrating Oakland's boxing legacy with premium embroidered details",
  rating: 5.0,
  reviews: 156,
  badge: "Premium",
  colors: ["Black", "Oakland Gold", "Champion Red"],
  category: "Apparel",
  isLimited: true
}, {
  id: "raw-one-boxing-gloves",
  name: "The Raw One Pro Boxing Gloves",
  brand: "The Raw One",
  price: "$180",
  originalPrice: "$250",
  image: "/api/placeholder/400/400",
  description: "Professional-grade leather boxing gloves used by Kumar Prescod in championship fights",
  rating: 5.0,
  reviews: 89,
  badge: "Pro Grade",
  colors: ["Championship Black", "Oakland Gold", "Raw Red"],
  category: "Equipment",
  isLimited: false
}, {
  id: "oakland-champion-shorts",
  name: "Straight Outta Oakland Fight Shorts",
  brand: "Straight Outta Oakland",
  price: "$65",
  originalPrice: "$90",
  image: "/api/placeholder/400/400",
  description: "Replica championship fight shorts with authentic Oakland-inspired design and premium materials",
  rating: 4.8,
  reviews: 134,
  badge: "Authentic",
  colors: ["Black/Gold", "White/Black", "Champion Edition"],
  category: "Apparel",
  isLimited: true
}, {
  id: "raw-one-training-tank",
  name: "The Raw One Training Tank",
  brand: "The Raw One",
  price: "$35",
  originalPrice: "$50",
  image: "/api/placeholder/400/400",
  description: "Moisture-wicking performance tank for intense training sessions with signature Raw One branding",
  rating: 4.7,
  reviews: 203,
  badge: "Training",
  colors: ["Black", "White", "Charcoal"],
  category: "Apparel",
  isLimited: false
}, {
  id: "oakland-champion-cap",
  name: "Straight Outta Oakland Champion Cap",
  brand: "Straight Outta Oakland",
  price: "$40",
  originalPrice: "$55",
  image: "/api/placeholder/400/400",
  description: "Premium snapback cap celebrating Oakland's boxing heritage with embroidered championship details",
  rating: 4.9,
  reviews: 178,
  badge: "Heritage",
  colors: ["Black/Gold", "All Black", "Oakland Classic"],
  category: "Accessories",
  isLimited: false
}] as any[];
export default function ShopSection({
  className = ""
}: ShopSectionProps) {
  const [favorites, setFavorites] = React.useState<Set<string>>(new Set());
  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };
  return <section className={`py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden ${className}`} id="shop">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Premium Header */}
        <header className="text-center mb-20">
          <Badge variant="outline" className="mb-6 text-sm font-bold">
            Official Championship Collection
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Champion's
            <span className="block bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Authentic merchandise from <strong>The Raw One</strong> and <strong>Straight Outta Oakland</strong> collections. 
            Premium quality gear that represents championship excellence and Oakland pride.
          </p>
        </header>

        {/* Premium Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <Truck className="w-8 h-8 text-amber-500 mr-4" />
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Free Premium Shipping</h4>
              <p className="text-gray-600 text-sm">On orders over $100</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <Shield className="w-8 h-8 text-amber-500 mr-4" />
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Authenticity Guarantee</h4>
              <p className="text-gray-600 text-sm">100% official merchandise</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <Star className="w-8 h-8 text-amber-500 mr-4" />
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Championship Quality</h4>
              <p className="text-gray-600 text-sm">Premium materials only</p>
            </div>
          </div>
        </div>

        {/* Premium Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {merchandise.map(item => <Card key={item.id} className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={item.image} alt={`${item.name} - ${item.brand} official merchandise`} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Premium Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.badge && <Badge variant={item.badge === 'Premium' || item.badge === 'Pro Grade' ? 'premium' : 'default'} className={`
                        ${item.badge === 'Best Seller' ? 'bg-gradient-to-r from-red-600 to-red-700' : ''}
                        ${item.badge === 'Premium' ? 'bg-gradient-to-r from-purple-600 to-purple-700' : ''}
                        ${item.badge === 'Pro Grade' ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black' : ''}
                        ${item.badge === 'Authentic' ? 'bg-gradient-to-r from-green-600 to-green-700' : ''}
                        ${item.badge === 'Training' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : ''}
                        ${item.badge === 'Heritage' ? 'bg-gradient-to-r from-orange-600 to-orange-700' : ''}
                      `}>
                      {item.badge}
                    </Badge>}
                  {item.isLimited && <Badge variant="premium" className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black">
                      Limited Edition
                    </Badge>}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" variant="ghost" className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white w-12 h-12 p-0" onClick={() => toggleFavorite(item.id)}>
                    <Heart className={`w-5 h-5 transition-colors ${favorites.has(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white w-12 h-12 p-0">
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                </div>

                {/* Brand Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-white text-gray-900 font-bold">
                    {item.brand}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-xl font-black text-gray-900 group-hover:text-amber-600 transition-colors leading-tight">
                    {item.name}
                  </CardTitle>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />)}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Color Options */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-semibold text-gray-700">Colors:</span>
                  <div className="flex gap-2">
                    {item.colors.map((color, index) => <div key={index} className={`w-8 h-8 rounded-full border-3 border-gray-200 hover:border-gray-400 transition-colors cursor-pointer ${color.includes('Black') || color === 'All Black' ? 'bg-black' : color.includes('White') ? 'bg-white border-gray-300' : color.includes('Gold') || color.includes('Oakland Gold') ? 'bg-gradient-to-br from-amber-400 to-yellow-500' : color.includes('Red') || color === 'Raw Red' ? 'bg-red-600' : color.includes('Charcoal') ? 'bg-gray-600' : color === 'Champion Edition' ? 'bg-gradient-to-br from-purple-600 to-blue-600' : color === 'Oakland Classic' ? 'bg-gradient-to-br from-blue-800 to-yellow-500' : 'bg-gray-400'}`} title={color} />)}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-gray-900">
                      {item.price}
                    </span>
                    {item.originalPrice && <span className="text-lg text-gray-500 line-through font-medium">
                        {item.originalPrice}
                      </span>}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>

                <Button className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white font-bold text-lg py-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Premium Newsletter Section */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Join the Championship Circle
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get exclusive access to limited drops, championship updates, and special offers from 
              <strong className="text-amber-400"> The Raw One</strong> and 
              <strong className="text-amber-400"> Straight Outta Oakland</strong> collections.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input type="email" placeholder="Enter your email for exclusive access" className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-amber-500/50 font-medium" />
              <Button variant="default" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-yellow-500 hover:to-amber-500 text-black font-bold px-8">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}