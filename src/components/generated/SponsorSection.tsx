"use client";

import * as React from "react";
import { Trophy, Target, Dumbbell, Calendar, Star, Crown, Users, DollarSign } from "lucide-react";

// Simple UI components to replace ShadCN imports
const Card = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`} data-magicpath-id="0" data-magicpath-path="SponsorSection.tsx">{children}</div>;
const CardHeader = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-6 py-6 ${className}`} data-magicpath-id="1" data-magicpath-path="SponsorSection.tsx">{children}</div>;
const CardTitle = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} data-magicpath-id="2" data-magicpath-path="SponsorSection.tsx">{children}</h3>;
const CardContent = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`px-6 pb-6 ${className}`} data-magicpath-id="3" data-magicpath-path="SponsorSection.tsx">{children}</div>;
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
  return <button className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props} data-magicpath-id="4" data-magicpath-path="SponsorSection.tsx">
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
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`} data-magicpath-id="5" data-magicpath-path="SponsorSection.tsx">
      {children}
    </span>;
};
export interface SponsorSectionProps {
  className?: string;
  mpid?: string;
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
    public: true,
    mpid: "a6f07dd0-e189-42a6-af34-a0c9f742d581"
  }, {
    name: "Mike Rodriguez",
    amount: 300,
    public: true,
    mpid: "5317bc47-3a59-4d5c-b5bb-cd5a13d8e2db"
  }, {
    name: "Anonymous",
    amount: 1000,
    public: false,
    mpid: "eab518ce-60e5-4e5e-bf09-fcb0daaa2a39"
  }],
  featured: false,
  color: "from-blue-500 to-blue-600",
  mpid: "02a61137-d72c-43b0-a79d-0eec4094eb22"
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
    public: true,
    mpid: "cdf849e5-9388-4e01-9b1b-0c52a911022a"
  }, {
    name: "Champion Nutrition",
    amount: 800,
    public: true,
    mpid: "9948da31-4031-4406-9bb8-f3f18ad4db75"
  }, {
    name: "Anonymous",
    amount: 400,
    public: false,
    mpid: "0948258f-13ec-47a1-bbac-cab31aff639e"
  }],
  featured: true,
  color: "from-red-500 to-red-600",
  mpid: "0ecc712a-f324-4298-a243-b26a90e6d637"
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
    public: true,
    mpid: "aa801c44-0608-4b4a-8dcb-fc031f972238"
  }, {
    name: "Sarah Chen",
    amount: 500,
    public: true,
    mpid: "8212a071-b912-4d8c-b14a-5f95cb291af6"
  }],
  featured: false,
  color: "from-green-500 to-green-600",
  mpid: "6ce04a04-260d-438a-9f4c-e174f909f014"
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
    public: true,
    mpid: "8f257338-0c12-4001-b4f7-78c5480073b6"
  }, {
    name: "Anonymous",
    amount: 1500,
    public: false,
    mpid: "19f418c9-8c50-4b88-a5b0-1cd6237365e1"
  }],
  featured: true,
  color: "from-purple-500 to-purple-600",
  mpid: "6bc60b30-9bea-41fa-aebe-aaec98ce8276"
}] as any[];
export default function SponsorSection({
  className = ""
}: SponsorSectionProps) {
  return <section className={`py-20 bg-gradient-to-br from-gray-50 to-white ${className}`} id="sponsors" data-magicpath-id="6" data-magicpath-path="SponsorSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="7" data-magicpath-path="SponsorSection.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-magicpath-id="8" data-magicpath-path="SponsorSection.tsx">
          <Badge variant="outline" className="mb-4 text-sm font-medium" data-magicpath-id="9" data-magicpath-path="SponsorSection.tsx">
            Partnership Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-magicpath-id="10" data-magicpath-path="SponsorSection.tsx">
            Sponsor Kumar's Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="11" data-magicpath-path="SponsorSection.tsx">
            Join Kumar Prescod on his path to championship glory. Choose a sponsorship package 
            that aligns with your brand and supports a rising star in professional boxing.
          </p>
        </div>

        {/* Sponsor Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" data-magicpath-id="12" data-magicpath-path="SponsorSection.tsx">
          {sponsorPackages.map(pkg => {
          const IconComponent = pkg.icon;
          const progressPercentage = pkg.raised / pkg.goal * 100;
          const isCompleted = pkg.raised >= pkg.goal;
          return <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${pkg.featured ? 'ring-2 ring-red-500 scale-105' : ''}`} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SponsorSection.tsx">
                {pkg.featured && <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="SponsorSection.tsx">
                    POPULAR
                  </div>}
                
                {isCompleted && <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 text-xs font-bold" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="SponsorSection.tsx">
                    FUNDED
                  </div>}
                
                <CardHeader className="text-center pb-4" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="SponsorSection.tsx">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="SponsorSection.tsx">
                    <IconComponent className="w-8 h-8 text-white" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="SponsorSection.tsx" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="19" data-magicpath-path="SponsorSection.tsx">
                    {pkg.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-gray-900 mb-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="20" data-magicpath-path="SponsorSection.tsx">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-600 mb-4" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="21" data-magicpath-path="SponsorSection.tsx">
                    {pkg.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="SponsorSection.tsx">
                    <div className="flex justify-between items-center mb-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="SponsorSection.tsx">
                      <span className="text-sm font-medium text-gray-700" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="SponsorSection.tsx">
                        ${pkg.raised.toLocaleString()} raised
                      </span>
                      <span className="text-sm text-gray-500" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="SponsorSection.tsx">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="SponsorSection.tsx">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${pkg.color} transition-all duration-500`} style={{
                    width: `${Math.min(progressPercentage, 100)}%`
                  }} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="SponsorSection.tsx"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="SponsorSection.tsx">
                      Goal: ${pkg.goal.toLocaleString()}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="SponsorSection.tsx">
                  <ul className="space-y-3 mb-6" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="SponsorSection.tsx">
                    {pkg.benefits.map((benefit, index) => <li key={index} className="flex items-start text-sm text-gray-600" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="SponsorSection.tsx">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="SponsorSection.tsx" />
                        {benefit}
                      </li>)}
                  </ul>
                  
                  {/* Public Supporters */}
                  {pkg.supporters.filter(s => s.public).length > 0 && <div className="mb-6 p-3 bg-gray-50 rounded-lg" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="SponsorSection.tsx">
                      <div className="flex items-center mb-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="SponsorSection.tsx">
                        <Users className="w-4 h-4 text-gray-600 mr-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="SponsorSection.tsx" />
                        <span className="text-sm font-medium text-gray-700" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="SponsorSection.tsx">Public Supporters</span>
                      </div>
                      <div className="space-y-1" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="SponsorSection.tsx">
                        {pkg.supporters.filter(s => s.public).map((supporter, index) => <div key={index} className="flex justify-between items-center text-xs" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="SponsorSection.tsx">
                            <span className="text-gray-600" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="SponsorSection.tsx">{supporter.name}</span>
                            <span className="font-medium text-gray-800" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="SponsorSection.tsx">${supporter.amount}</span>
                          </div>)}
                        {pkg.supporters.filter(s => !s.public).length > 0 && <div className="text-xs text-gray-500 italic" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="SponsorSection.tsx">
                            + {pkg.supporters.filter(s => !s.public).length} anonymous supporter(s)
                          </div>}
                      </div>
                    </div>}
                  
                  <Button className={`w-full ${isCompleted ? 'bg-green-600 hover:bg-green-700' : `bg-gradient-to-r ${pkg.color} hover:opacity-90`} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200`} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="SponsorSection.tsx">
                    {isCompleted ? 'Fully Funded' : 'Choose Package'}
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-white" data-magicpath-id="43" data-magicpath-path="SponsorSection.tsx">
          <h3 className="text-3xl font-bold mb-4" data-magicpath-id="44" data-magicpath-path="SponsorSection.tsx">
            Ready to Partner with a Champion?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-magicpath-id="45" data-magicpath-path="SponsorSection.tsx">
            Contact us to discuss custom sponsorship opportunities and how we can 
            create a partnership that delivers results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="46" data-magicpath-path="SponsorSection.tsx">
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-gray-100" data-magicpath-id="47" data-magicpath-path="SponsorSection.tsx">
              Download Sponsorship Deck
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700" data-magicpath-id="48" data-magicpath-path="SponsorSection.tsx">
              Contact for Custom Package
            </Button>
          </div>
        </div>
      </div>
    </section>;
}