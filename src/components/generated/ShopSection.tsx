"use client";

import * as React from "react";
import { ShoppingCart, Star, Truck, Shield } from "lucide-react";

// Simple UI components to replace ShadCN imports
const Card = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`} data-magicpath-id="0" data-magicpath-path="ShopSection.tsx">{children}</div>;
const CardHeader = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-6 py-6 ${className}`} data-magicpath-id="1" data-magicpath-path="ShopSection.tsx">{children}</div>;
const CardTitle = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} data-magicpath-id="2" data-magicpath-path="ShopSection.tsx">{children}</h3>;
const CardContent = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-6 pb-6 ${className}`} data-magicpath-id="3" data-magicpath-path="ShopSection.tsx">{children}</div>;
const Button = ({
  children,
  className = "",
  size = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "default" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    default: "px-4 py-2",
    lg: "px-8 py-3 text-lg"
  };
  return <button className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${className}`} {...props} data-magicpath-id="4" data-magicpath-path="ShopSection.tsx">
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
  variant?: "default" | "outline";
}) => {
  const variantClasses = {
    default: "bg-gray-900 text-white",
    outline: "border border-gray-300 bg-transparent text-gray-900"
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`} data-magicpath-id="5" data-magicpath-path="ShopSection.tsx">
      {children}
    </span>;
};
export interface ShopSectionProps {
  className?: string;
  mpid?: string;
}
const merchandise = [{
  id: "signature-tee",
  name: "Kumar Prescod Signature Tee",
  price: "$35",
  originalPrice: "$45",
  image: "/api/placeholder/300/300",
  description: "Premium cotton t-shirt with Kumar's signature logo",
  rating: 4.9,
  reviews: 127,
  badge: "Best Seller",
  colors: ["Black", "White", "Red"],
  mpid: "16bc6ac1-e2e2-43e0-841c-b4865086ed8f"
}, {
  id: "training-hoodie",
  name: "Champion Training Hoodie",
  price: "$65",
  originalPrice: "$80",
  image: "/api/placeholder/300/300",
  description: "High-performance hoodie for training and casual wear",
  rating: 4.8,
  reviews: 89,
  badge: "New",
  colors: ["Black", "Gray", "Navy"],
  mpid: "4e61bf85-e021-47a8-84b7-860caa5e2ce5"
}, {
  id: "boxing-gloves",
  name: "KP Pro Boxing Gloves",
  price: "$120",
  originalPrice: "$150",
  image: "/api/placeholder/300/300",
  description: "Professional-grade boxing gloves used by Kumar",
  rating: 5.0,
  reviews: 45,
  badge: "Pro Grade",
  colors: ["Red", "Black", "White"],
  mpid: "40bd8f0d-5f44-4c14-bd8f-cb3d743cff7e"
}, {
  id: "gym-bag",
  name: "Champion Gym Bag",
  price: "$55",
  originalPrice: "$70",
  image: "/api/placeholder/300/300",
  description: "Durable gym bag with multiple compartments",
  rating: 4.7,
  reviews: 156,
  badge: "",
  colors: ["Black", "Red"],
  mpid: "2cb7ab41-1ceb-499a-a7c8-92fcfe5879f8"
}, {
  id: "fight-shorts",
  name: "Official Fight Shorts",
  price: "$45",
  originalPrice: "$60",
  image: "/api/placeholder/300/300",
  description: "Replica of Kumar's official fight shorts",
  rating: 4.9,
  reviews: 78,
  badge: "Limited Edition",
  colors: ["Black/Red", "White/Gold"],
  mpid: "5577e039-fbf9-48d4-a327-cc612a67621b"
}, {
  id: "water-bottle",
  name: "Hydration Champion Bottle",
  price: "$25",
  originalPrice: "$30",
  image: "/api/placeholder/300/300",
  description: "Insulated water bottle for peak performance",
  rating: 4.6,
  reviews: 203,
  badge: "",
  colors: ["Black", "Silver", "Red"],
  mpid: "491ca192-d322-47fd-825a-f357e4e7d61d"
}] as any[];
export default function ShopSection({
  className = ""
}: ShopSectionProps) {
  return <section className={`py-20 bg-white relative overflow-hidden ${className}`} id="shop" data-magicpath-id="6" data-magicpath-path="ShopSection.tsx">
      {/* Background Video */}
      <div className="absolute inset-0 z-0" data-magicpath-id="7" data-magicpath-path="ShopSection.tsx">
        <iframe src="https://www.youtube.com/embed/5VgsIdypBjk?autoplay=1&mute=1&loop=1&playlist=5VgsIdypBjk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=324" className="w-full h-full object-cover" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100vw',
        height: '100vh',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }} allow="autoplay; encrypted-media" allowFullScreen data-magicpath-id="8" data-magicpath-path="ShopSection.tsx" />
        <div className="absolute inset-0 bg-white/70" data-magicpath-id="9" data-magicpath-path="ShopSection.tsx" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="10" data-magicpath-path="ShopSection.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-magicpath-id="11" data-magicpath-path="ShopSection.tsx">
          <Badge variant="outline" className="mb-4 text-sm font-medium" data-magicpath-id="12" data-magicpath-path="ShopSection.tsx">
            Official Merchandise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-magicpath-id="13" data-magicpath-path="ShopSection.tsx">
            Champion's Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="14" data-magicpath-path="ShopSection.tsx">
            Gear up like a champion with Kumar Prescod's official merchandise. 
            From training essentials to fan favorites, every purchase supports Kumar's journey.
          </p>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-magicpath-id="15" data-magicpath-path="ShopSection.tsx">
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg" data-magicpath-id="16" data-magicpath-path="ShopSection.tsx">
            <Truck className="w-6 h-6 text-red-600 mr-3" data-magicpath-id="17" data-magicpath-path="ShopSection.tsx" />
            <span className="text-sm font-medium text-gray-700" data-magicpath-id="18" data-magicpath-path="ShopSection.tsx">Free shipping over $75</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg" data-magicpath-id="19" data-magicpath-path="ShopSection.tsx">
            <Shield className="w-6 h-6 text-red-600 mr-3" data-magicpath-id="20" data-magicpath-path="ShopSection.tsx" />
            <span className="text-sm font-medium text-gray-700" data-magicpath-id="21" data-magicpath-path="ShopSection.tsx">30-day return guarantee</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg" data-magicpath-id="22" data-magicpath-path="ShopSection.tsx">
            <Star className="w-6 h-6 text-red-600 mr-3" data-magicpath-id="23" data-magicpath-path="ShopSection.tsx" />
            <span className="text-sm font-medium text-gray-700" data-magicpath-id="24" data-magicpath-path="ShopSection.tsx">Authentic merchandise only</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="25" data-magicpath-path="ShopSection.tsx">
          {merchandise.map(item => <Card key={item.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="ShopSection.tsx">
              <div className="relative overflow-hidden" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="ShopSection.tsx">
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="28" data-magicpath-path="ShopSection.tsx" />
                {item.badge && <Badge className={`absolute top-3 left-3 ${item.badge === 'Best Seller' ? 'bg-red-600' : item.badge === 'New' ? 'bg-green-600' : item.badge === 'Pro Grade' ? 'bg-purple-600' : item.badge === 'Limited Edition' ? 'bg-orange-600' : 'bg-gray-600'}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="badge:unknown" data-magicpath-id="29" data-magicpath-path="ShopSection.tsx">
                    {item.badge}
                  </Badge>}
                <Button size="sm" className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-gray-100" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="ShopSection.tsx">
                  <ShoppingCart className="w-4 h-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="ShopSection.tsx" />
                </Button>
              </div>

              <CardHeader className="pb-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="ShopSection.tsx">
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="33" data-magicpath-path="ShopSection.tsx">
                  {item.name}
                </CardTitle>
                <div className="flex items-center space-x-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="ShopSection.tsx">
                  <div className="flex items-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="ShopSection.tsx">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="ShopSection.tsx" />)}
                  </div>
                  <span className="text-sm text-gray-600" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="rating:unknown,reviews:unknown" data-magicpath-id="37" data-magicpath-path="ShopSection.tsx">
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="ShopSection.tsx">
                <p className="text-sm text-gray-600 mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="39" data-magicpath-path="ShopSection.tsx">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="ShopSection.tsx">
                  <div className="flex items-center space-x-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="ShopSection.tsx">
                    <span className="text-2xl font-bold text-gray-900" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="42" data-magicpath-path="ShopSection.tsx">
                      {item.price}
                    </span>
                    {item.originalPrice && <span className="text-sm text-gray-500 line-through" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="originalPrice:unknown" data-magicpath-id="43" data-magicpath-path="ShopSection.tsx">
                        {item.originalPrice}
                      </span>}
                  </div>
                  <div className="flex space-x-1" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="ShopSection.tsx">
                    {item.colors.map((color, index) => <div key={index} className={`w-6 h-6 rounded-full border-2 border-gray-300 ${color.includes('Black') ? 'bg-black' : color.includes('White') ? 'bg-white' : color.includes('Red') ? 'bg-red-600' : color.includes('Gray') ? 'bg-gray-500' : color.includes('Navy') ? 'bg-blue-900' : color.includes('Silver') ? 'bg-gray-400' : color.includes('Gold') ? 'bg-yellow-500' : color.includes('Green') ? 'bg-green-600' : color.includes('Orange') ? 'bg-orange-600' : 'bg-purple-600'}`} title={color} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="ShopSection.tsx" />)}
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="ShopSection.tsx">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white text-center" data-magicpath-id="47" data-magicpath-path="ShopSection.tsx">
          <h3 className="text-3xl font-bold mb-4" data-magicpath-id="48" data-magicpath-path="ShopSection.tsx">
            Stay Updated on New Releases
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto" data-magicpath-id="49" data-magicpath-path="ShopSection.tsx">
            Be the first to know about new merchandise, exclusive drops, and special offers from Kumar's collection.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" data-magicpath-id="50" data-magicpath-path="ShopSection.tsx">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white" data-magicpath-id="51" data-magicpath-path="ShopSection.tsx" />
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8" data-magicpath-id="52" data-magicpath-path="ShopSection.tsx">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>;
}