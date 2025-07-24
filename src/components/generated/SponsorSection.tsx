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
} & React.HTMLAttributes<HTMLDivElement>) => <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`} {...props} data-magicpath-id="0" data-magicpath-path="SponsorSection.tsx">{children}</div>;
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
    mpid: "c59a439a-e8fa-4815-9fa8-0c658ed290af"
  }, {
    name: "Mike Rodriguez",
    amount: 300,
    public: true,
    mpid: "2441b535-9f4c-4479-8455-c40524ac0f35"
  }, {
    name: "Anonymous",
    amount: 1000,
    public: false,
    mpid: "6e26af98-b03f-417c-88e8-02d627605c45"
  }],
  featured: false,
  color: "from-blue-500 to-blue-600",
  mpid: "d4413945-1469-4454-86c3-6a32e44eeedc"
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
    mpid: "974ebece-58f8-417d-a18d-e039f5a808f1"
  }, {
    name: "Champion Nutrition",
    amount: 800,
    public: true,
    mpid: "3614805d-aa31-4edb-bb5e-795bd1ca72f1"
  }, {
    name: "Anonymous",
    amount: 400,
    public: false,
    mpid: "23b98a55-b194-4cb9-86f2-b00f2ac8a02e"
  }],
  featured: true,
  color: "from-red-500 to-red-600",
  mpid: "7394f95b-1868-4f0e-8a0c-67f28c11daa9"
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
    mpid: "5f156e97-61f3-4d7d-97c9-898b5d2a3a44"
  }, {
    name: "Sarah Chen",
    amount: 500,
    public: true,
    mpid: "1a77f57f-1dab-4003-b3a0-893590ac4df7"
  }],
  featured: false,
  color: "from-green-500 to-green-600",
  mpid: "80ddfc68-2739-47a4-b8fd-11ad60cabce7"
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
    mpid: "79abe097-eb70-424f-b1fe-39e8f5e370e2"
  }, {
    name: "Anonymous",
    amount: 1500,
    public: false,
    mpid: "c1f86110-c631-4cb1-a831-1c41a462ab40"
  }],
  featured: true,
  color: "from-purple-500 to-purple-600",
  mpid: "97230df7-ea59-43a3-b684-10de548a9f68"
}] as any[];
export default function SponsorSection({
  className = ""
}: SponsorSectionProps) {
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(null);
  const selectedPkg = selectedPackage ? sponsorPackages.find(pkg => pkg.id === selectedPackage) : null;
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
          return <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${pkg.featured ? 'ring-2 ring-red-500 scale-105' : ''}`} onClick={() => setSelectedPackage(pkg.id)} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SponsorSection.tsx">
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
                  <div className="flex items-center justify-between mb-4" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="SponsorSection.tsx">
                    <span className="text-sm text-gray-600" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="SponsorSection.tsx">Click to learn more</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="SponsorSection.tsx" />
                  </div>
                  
                  {/* Public Supporters Preview */}
                  {pkg.supporters.filter(s => s.public).length > 0 && <div className="mb-4 p-3 bg-gray-50 rounded-lg" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="SponsorSection.tsx">
                      <div className="flex items-center mb-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="SponsorSection.tsx">
                        <Users className="w-4 h-4 text-gray-600 mr-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="SponsorSection.tsx" />
                        <span className="text-sm font-medium text-gray-700" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="SponsorSection.tsx">
                          {pkg.supporters.filter(s => s.public).length} Public Supporters
                        </span>
                      </div>
                      <div className="text-xs text-gray-500" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="SponsorSection.tsx">
                        {pkg.supporters.filter(s => s.public).slice(0, 2).map(s => s.name).join(", ")}
                        {pkg.supporters.filter(s => s.public).length > 2 && " & more"}
                      </div>
                    </div>}
                  
                  <Button className={`w-full ${isCompleted ? 'bg-green-600 hover:bg-green-700' : `bg-gradient-to-r ${pkg.color} hover:opacity-90`} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200`} onClick={e => {
                e.stopPropagation();
                setSelectedPackage(pkg.id);
              }} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="SponsorSection.tsx">
                    {isCompleted ? 'View Details' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Package Detail Modal */}
        {selectedPkg && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedPackage(null)} data-magicpath-id="39" data-magicpath-path="SponsorSection.tsx">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()} data-magicpath-id="40" data-magicpath-path="SponsorSection.tsx">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between" data-magicpath-id="41" data-magicpath-path="SponsorSection.tsx">
                <div className="flex items-center" data-magicpath-id="42" data-magicpath-path="SponsorSection.tsx">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedPkg.color} flex items-center justify-center mr-4`} data-magicpath-id="43" data-magicpath-path="SponsorSection.tsx">
                    <selectedPkg.icon className="w-6 h-6 text-white" data-magicpath-id="44" data-magicpath-path="SponsorSection.tsx" />
                  </div>
                  <div data-magicpath-id="45" data-magicpath-path="SponsorSection.tsx">
                    <h3 className="text-2xl font-bold text-gray-900" data-magicpath-id="46" data-magicpath-path="SponsorSection.tsx">{selectedPkg.title}</h3>
                    <p className="text-gray-600" data-magicpath-id="47" data-magicpath-path="SponsorSection.tsx">{selectedPkg.price}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => setSelectedPackage(null)} data-magicpath-id="48" data-magicpath-path="SponsorSection.tsx">
                  <X className="w-4 h-4" data-magicpath-id="49" data-magicpath-path="SponsorSection.tsx" />
                </Button>
              </div>
              
              <div className="p-6" data-magicpath-id="50" data-magicpath-path="SponsorSection.tsx">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-magicpath-id="51" data-magicpath-path="SponsorSection.tsx">
                  {/* Left Column */}
                  <div data-magicpath-id="52" data-magicpath-path="SponsorSection.tsx">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4" data-magicpath-id="53" data-magicpath-path="SponsorSection.tsx">Package Details</h4>
                    <p className="text-gray-600 mb-6" data-magicpath-id="54" data-magicpath-path="SponsorSection.tsx">{selectedPkg.description}</p>
                    
                    {/* Progress Section */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg" data-magicpath-id="55" data-magicpath-path="SponsorSection.tsx">
                      <div className="flex justify-between items-center mb-2" data-magicpath-id="56" data-magicpath-path="SponsorSection.tsx">
                        <span className="font-medium text-gray-700" data-magicpath-id="57" data-magicpath-path="SponsorSection.tsx">
                          ${selectedPkg.raised.toLocaleString()} raised
                        </span>
                        <span className="text-gray-500" data-magicpath-id="58" data-magicpath-path="SponsorSection.tsx">
                          {Math.round(selectedPkg.raised / selectedPkg.goal * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2" data-magicpath-id="59" data-magicpath-path="SponsorSection.tsx">
                        <div className={`h-3 rounded-full bg-gradient-to-r ${selectedPkg.color} transition-all duration-500`} style={{
                      width: `${Math.min(selectedPkg.raised / selectedPkg.goal * 100, 100)}%`
                    }} data-magicpath-id="60" data-magicpath-path="SponsorSection.tsx"></div>
                      </div>
                      <div className="text-sm text-gray-500" data-magicpath-id="61" data-magicpath-path="SponsorSection.tsx">
                        Goal: ${selectedPkg.goal.toLocaleString()}
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4" data-magicpath-id="62" data-magicpath-path="SponsorSection.tsx">What You Get</h4>
                    <ul className="space-y-3 mb-6" data-magicpath-id="63" data-magicpath-path="SponsorSection.tsx">
                      {selectedPkg.benefits.map((benefit, index) => <li key={index} className="flex items-start text-gray-600" data-magicpath-id="64" data-magicpath-path="SponsorSection.tsx">
                          <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-magicpath-id="65" data-magicpath-path="SponsorSection.tsx" />
                          {benefit}
                        </li>)}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div data-magicpath-id="66" data-magicpath-path="SponsorSection.tsx">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4" data-magicpath-id="67" data-magicpath-path="SponsorSection.tsx">Our Supporters</h4>
                    
                    {/* Public Supporters */}
                    {selectedPkg.supporters.filter(s => s.public).length > 0 && <div className="mb-6" data-magicpath-id="68" data-magicpath-path="SponsorSection.tsx">
                        <h5 className="font-medium text-gray-700 mb-3 flex items-center" data-magicpath-id="69" data-magicpath-path="SponsorSection.tsx">
                          <Users className="w-4 h-4 mr-2" data-magicpath-id="70" data-magicpath-path="SponsorSection.tsx" />
                          Public Supporters
                        </h5>
                        <div className="space-y-3" data-magicpath-id="71" data-magicpath-path="SponsorSection.tsx">
                          {selectedPkg.supporters.filter(s => s.public).map((supporter, index) => <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg" data-magicpath-uuid={(supporter as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="SponsorSection.tsx">
                              <span className="font-medium text-gray-800" data-magicpath-uuid={(supporter as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="73" data-magicpath-path="SponsorSection.tsx">{supporter.name}</span>
                              <span className="text-gray-600 font-semibold" data-magicpath-uuid={(supporter as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="SponsorSection.tsx">${supporter.amount.toLocaleString()}</span>
                            </div>)}
                        </div>
                      </div>}

                    {/* Anonymous Supporters */}
                    {selectedPkg.supporters.filter(s => !s.public).length > 0 && <div className="mb-6 p-4 bg-gray-50 rounded-lg" data-magicpath-id="75" data-magicpath-path="SponsorSection.tsx">
                        <div className="flex items-center justify-between" data-magicpath-id="76" data-magicpath-path="SponsorSection.tsx">
                          <span className="text-gray-600" data-magicpath-id="77" data-magicpath-path="SponsorSection.tsx">
                            {selectedPkg.supporters.filter(s => !s.public).length} Anonymous Supporter(s)
                          </span>
                          <span className="font-semibold text-gray-800" data-magicpath-id="78" data-magicpath-path="SponsorSection.tsx">
                            ${selectedPkg.supporters.filter(s => !s.public).reduce((sum, s) => sum + s.amount, 0).toLocaleString()}
                          </span>
                        </div>
                      </div>}

                    {/* Call to Action */}
                    <div className="mt-8" data-magicpath-id="79" data-magicpath-path="SponsorSection.tsx">
                      <Button className={`w-full ${selectedPkg.raised >= selectedPkg.goal ? 'bg-green-600 hover:bg-green-700' : `bg-gradient-to-r ${selectedPkg.color} hover:opacity-90`} text-white font-semibold py-3 px-6 rounded-lg text-lg`} data-magicpath-id="80" data-magicpath-path="SponsorSection.tsx">
                        {selectedPkg.raised >= selectedPkg.goal ? 'Package Fully Funded' : 'Choose This Package'}
                      </Button>
                      <p className="text-sm text-gray-500 text-center mt-2" data-magicpath-id="81" data-magicpath-path="SponsorSection.tsx">
                        Contact us to discuss this sponsorship opportunity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-white" data-magicpath-id="82" data-magicpath-path="SponsorSection.tsx">
          <h3 className="text-3xl font-bold mb-4" data-magicpath-id="83" data-magicpath-path="SponsorSection.tsx">
            Ready to Partner with a Champion?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-magicpath-id="84" data-magicpath-path="SponsorSection.tsx">
            Contact us to discuss custom sponsorship opportunities and how we can 
            create a partnership that delivers results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="85" data-magicpath-path="SponsorSection.tsx">
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-gray-100" data-magicpath-id="86" data-magicpath-path="SponsorSection.tsx">
              Download Sponsorship Deck
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700" data-magicpath-id="87" data-magicpath-path="SponsorSection.tsx">
              Contact for Custom Package
            </Button>
          </div>
        </div>
      </div>
    </section>;
}