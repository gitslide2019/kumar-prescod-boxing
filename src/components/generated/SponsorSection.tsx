"use client";

import * as React from "react";
import { Trophy, Target, Dumbbell, Calendar, Star, Crown, Users, DollarSign, X, ChevronRight } from "lucide-react";

// Simple UI components to replace ShadCN imports
const Card = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`} {...props}>{children}</div>;
const CardHeader = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-6 py-6 ${className}`}>{children}</div>;
const CardTitle = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
const CardContent = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-6 pb-6 ${className}`}>{children}</div>;
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
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    default: "px-4 py-2",
    lg: "px-8 py-3 text-lg"
  };
  const variantClasses = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50"
  };
  return <button className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
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
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>;
};
export interface SponsorSectionProps {
  className?: string;
}
const sponsorPackages = [{
  id: "training-camp",
  title: "Training Camp Sponsor",
  price: "$2,500",
  raised: 1800,
  goal: 2500,
  icon: Dumbbell,
  description: "Support Kumar's intensive training camps and preparation",
  benefits: ["Logo on training gear and social media", "Behind-the-scenes training content", "Meet & greet at training facility", "Quarterly progress reports"],
  supporters: [{
    name: "Oakland Boxing Gym",
    amount: 500,
    public: true
  }, {
    name: "Mike Rodriguez",
    amount: 300,
    public: true
  }, {
    name: "Anonymous",
    amount: 1000,
    public: false
  }],
  featured: false,
  color: "from-blue-500 to-blue-600"
}, {
  id: "fight-sponsor",
  title: "Fight Night Sponsor",
  price: "$5,000",
  raised: 3200,
  goal: 5000,
  icon: Trophy,
  description: "Be part of Kumar's journey to championship glory",
  benefits: ["Ringside seats for sponsored fight", "Logo on fight shorts and banner", "Pre-fight photo opportunity", "Social media shout-outs", "Post-fight celebration access"],
  supporters: [{
    name: "Bay Area Sports",
    amount: 2000,
    public: true
  }, {
    name: "Champion Nutrition",
    amount: 800,
    public: true
  }, {
    name: "Anonymous",
    amount: 400,
    public: false
  }],
  featured: true,
  color: "from-red-500 to-red-600"
}, {
  id: "equipment-sponsor",
  title: "Equipment Partner",
  price: "$1,500",
  raised: 1500,
  goal: 1500,
  icon: Target,
  description: "Provide essential training equipment and gear",
  benefits: ["Brand visibility on equipment", "Training session highlights", "Product placement opportunities", "Equipment testimonials"],
  supporters: [{
    name: "Elite Boxing Gear",
    amount: 1000,
    public: true
  }, {
    name: "Sarah Chen",
    amount: 500,
    public: true
  }],
  featured: false,
  color: "from-green-500 to-green-600"
}, {
  id: "career-sponsor",
  title: "Career Champion",
  price: "$10,000",
  raised: 4500,
  goal: 10000,
  icon: Crown,
  description: "Long-term partnership for Kumar's professional journey",
  benefits: ["Year-long brand partnership", "All fight sponsorship benefits", "Exclusive content creation", "Personal appearances", "Championship celebration access", "Custom promotional campaigns"],
  supporters: [{
    name: "Golden State Investments",
    amount: 3000,
    public: true
  }, {
    name: "Anonymous",
    amount: 1500,
    public: false
  }],
  featured: true,
  color: "from-purple-500 to-purple-600"
}] as any[];
export default function SponsorSection({
  className = ""
}: SponsorSectionProps) {
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(null);
  const selectedPkg = selectedPackage ? sponsorPackages.find(pkg => pkg.id === selectedPackage) : null;
  return <section className={`relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden ${className}`} id="sponsors">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* First video - main background */}
        <iframe className="absolute inset-0 w-full h-full object-cover" src="https://www.youtube.com/embed/u7M08hC8dZk?autoplay=1&mute=0&loop=1&playlist=u7M08hC8dZk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media" allowFullScreen style={{
        pointerEvents: 'none'
      }} />
        
        {/* Second video - overlay blend */}
        <iframe className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://www.youtube.com/embed/mOd7RWzusAU?autoplay=1&mute=1&loop=1&playlist=mOd7RWzusAU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media" allowFullScreen style={{
        pointerEvents: 'none'
      }} />
        
        {/* Third video - subtle overlay */}
        <iframe className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-soft-light" src="https://www.youtube.com/embed/C6d7Q5Mal54?autoplay=1&mute=1&loop=1&playlist=C6d7Q5Mal54&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media" allowFullScreen style={{
        pointerEvents: 'none'
      }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium bg-white/90 backdrop-blur-sm">
            Partnership Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Sponsor Kumar's Journey
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Join Kumar Prescod on his path to championship glory. Choose a sponsorship package 
            that aligns with your brand and supports a rising star in professional boxing.
          </p>
        </div>

        {/* Sponsor Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sponsorPackages.map(pkg => {
          const IconComponent = pkg.icon;
          const progressPercentage = pkg.raised / pkg.goal * 100;
          const isCompleted = pkg.raised >= pkg.goal;
          return <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/95 backdrop-blur-sm border-white/20 ${pkg.featured ? 'ring-2 ring-red-500 scale-105' : ''}`} onClick={() => setSelectedPackage(pkg.id)}>
                {pkg.featured && <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold">
                    POPULAR
                  </div>}
                
                {isCompleted && <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 text-xs font-bold">
                    FUNDED
                  </div>}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        ${pkg.raised.toLocaleString()} raised
                      </span>
                      <span className="text-sm text-gray-500">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${pkg.color} transition-all duration-500`} style={{
                    width: `${Math.min(progressPercentage, 100)}%`
                  }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Goal: ${pkg.goal.toLocaleString()}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Click to learn more</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  {/* Public Supporters Preview */}
                  {pkg.supporters.filter(s => s.public).length > 0 && <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Users className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-sm font-medium text-gray-700">
                          {pkg.supporters.filter(s => s.public).length} Public Supporters
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {pkg.supporters.filter(s => s.public).slice(0, 2).map(s => s.name).join(", ")}
                        {pkg.supporters.filter(s => s.public).length > 2 && " & more"}
                      </div>
                    </div>}
                  
                  <Button className={`w-full ${isCompleted ? 'bg-green-600 hover:bg-green-700' : `bg-gradient-to-r ${pkg.color} hover:opacity-90`} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200`} onClick={e => {
                e.stopPropagation();
                setSelectedPackage(pkg.id);
              }}>
                    {isCompleted ? 'View Details' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Package Detail Modal */}
        {selectedPkg && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedPackage(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedPkg.color} flex items-center justify-center mr-4`}>
                    <selectedPkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedPkg.title}</h3>
                    <p className="text-gray-600">{selectedPkg.price}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => setSelectedPackage(null)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Package Details</h4>
                    <p className="text-gray-600 mb-6">{selectedPkg.description}</p>
                    
                    {/* Progress Section */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">
                          ${selectedPkg.raised.toLocaleString()} raised
                        </span>
                        <span className="text-gray-500">
                          {Math.round(selectedPkg.raised / selectedPkg.goal * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className={`h-3 rounded-full bg-gradient-to-r ${selectedPkg.color} transition-all duration-500`} style={{
                      width: `${Math.min(selectedPkg.raised / selectedPkg.goal * 100, 100)}%`
                    }}></div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Goal: ${selectedPkg.goal.toLocaleString()}
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Get</h4>
                    <ul className="space-y-3 mb-6">
                      {selectedPkg.benefits.map((benefit, index) => <li key={index} className="flex items-start text-gray-600">
                          <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>)}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Supporters</h4>
                    
                    {/* Public Supporters */}
                    {selectedPkg.supporters.filter(s => s.public).length > 0 && <div className="mb-6">
                        <h5 className="font-medium text-gray-700 mb-3 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Public Supporters
                        </h5>
                        <div className="space-y-3">
                          {selectedPkg.supporters.filter(s => s.public).map((supporter, index) => <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-800">{supporter.name}</span>
                              <span className="text-gray-600 font-semibold">${supporter.amount.toLocaleString()}</span>
                            </div>)}
                        </div>
                      </div>}

                    {/* Anonymous Supporters */}
                    {selectedPkg.supporters.filter(s => !s.public).length > 0 && <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">
                            {selectedPkg.supporters.filter(s => !s.public).length} Anonymous Supporter(s)
                          </span>
                          <span className="font-semibold text-gray-800">
                            ${selectedPkg.supporters.filter(s => !s.public).reduce((sum, s) => sum + s.amount, 0).toLocaleString()}
                          </span>
                        </div>
                      </div>}

                    {/* Call to Action */}
                    <div className="mt-8">
                      <Button className={`w-full ${selectedPkg.raised >= selectedPkg.goal ? 'bg-green-600 hover:bg-green-700' : `bg-gradient-to-r ${selectedPkg.color} hover:opacity-90`} text-white font-semibold py-3 px-6 rounded-lg text-lg`}>
                        {selectedPkg.raised >= selectedPkg.goal ? 'Package Fully Funded' : 'Choose This Package'}
                      </Button>
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Contact us to discuss this sponsorship opportunity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-12 text-white border border-white/10">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Partner with a Champion?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss custom sponsorship opportunities and how we can 
            create a partnership that delivers results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-gray-100">
              Download Sponsorship Deck
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Contact for Custom Package
            </Button>
          </div>
        </div>
      </div>
    </section>;
}