"use client";

import * as React from "react";
import { Trophy, Target, Dumbbell, Calendar, Star, Crown } from "lucide-react";

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
  icon: Dumbbell,
  description: "Support Kumar's intensive training camps and preparation",
  benefits: ["Logo on training gear and social media", "Behind-the-scenes training content", "Meet & greet at training facility", "Quarterly progress reports"],
  featured: false,
  color: "from-blue-500 to-blue-600",
  mpid: "f6a992ac-a65b-4668-b107-e934c84bead2"
}, {
  id: "fight-sponsor",
  title: "Fight Night Sponsor",
  price: "$5,000",
  icon: Trophy,
  description: "Be part of Kumar's journey to championship glory",
  benefits: ["Ringside seats for sponsored fight", "Logo on fight shorts and banner", "Pre-fight photo opportunity", "Social media shout-outs", "Post-fight celebration access"],
  featured: true,
  color: "from-red-500 to-red-600",
  mpid: "9079fc3d-e144-4ac1-87d3-93c8a8a75000"
}, {
  id: "equipment-sponsor",
  title: "Equipment Partner",
  price: "$1,500",
  icon: Target,
  description: "Provide essential training equipment and gear",
  benefits: ["Brand visibility on equipment", "Training session highlights", "Product placement opportunities", "Equipment testimonials"],
  featured: false,
  color: "from-green-500 to-green-600",
  mpid: "9b1223e3-078f-4283-b563-7cec0cd6aecd"
}, {
  id: "career-sponsor",
  title: "Career Champion",
  price: "$10,000",
  icon: Crown,
  description: "Long-term partnership for Kumar's professional journey",
  benefits: ["Year-long brand partnership", "All fight sponsorship benefits", "Exclusive content creation", "Personal appearances", "Championship celebration access", "Custom promotional campaigns"],
  featured: true,
  color: "from-purple-500 to-purple-600",
  mpid: "ecc9ed32-4f5f-4aee-a918-bb2a88aee416"
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
          return <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${pkg.featured ? 'ring-2 ring-red-500 scale-105' : ''}`} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SponsorSection.tsx">
                {pkg.featured && <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="SponsorSection.tsx">
                    POPULAR
                  </div>}
                
                <CardHeader className="text-center pb-4" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="SponsorSection.tsx">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="SponsorSection.tsx">
                    <IconComponent className="w-8 h-8 text-white" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="SponsorSection.tsx" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="18" data-magicpath-path="SponsorSection.tsx">
                    {pkg.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-gray-900 mb-2" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:string" data-magicpath-id="19" data-magicpath-path="SponsorSection.tsx">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-600" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="20" data-magicpath-path="SponsorSection.tsx">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="SponsorSection.tsx">
                  <ul className="space-y-3 mb-6" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="SponsorSection.tsx">
                    {pkg.benefits.map((benefit, index) => <li key={index} className="flex items-start text-sm text-gray-600" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="SponsorSection.tsx">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="SponsorSection.tsx" />
                        {benefit}
                      </li>)}
                  </ul>
                  
                  <Button className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200`} data-magicpath-uuid={(pkg as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="SponsorSection.tsx">
                    Choose Package
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-white" data-magicpath-id="26" data-magicpath-path="SponsorSection.tsx">
          <h3 className="text-3xl font-bold mb-4" data-magicpath-id="27" data-magicpath-path="SponsorSection.tsx">
            Ready to Partner with a Champion?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-magicpath-id="28" data-magicpath-path="SponsorSection.tsx">
            Contact us to discuss custom sponsorship opportunities and how we can 
            create a partnership that delivers results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="29" data-magicpath-path="SponsorSection.tsx">
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-gray-100" data-magicpath-id="30" data-magicpath-path="SponsorSection.tsx">
              Download Sponsorship Deck
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700" data-magicpath-id="31" data-magicpath-path="SponsorSection.tsx">
              Contact for Custom Package
            </Button>
          </div>
        </div>
      </div>
    </section>;
}