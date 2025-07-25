"use client";

import * as React from "react";
import { Trophy, Target, Dumbbell, Calendar, Star, Crown, Users, DollarSign, X, ChevronRight, CreditCard, Bot, Volume2, VolumeX } from "lucide-react";
import MockSponsorPayment from '../payments/MockSponsorPayment';
import SponsorshipPDFGenerator, { type SponsorshipData } from '../pdf/SponsorshipPDFGenerator';

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
  color: "from-blue-900 to-blue-800",
  buttonColor: "bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700",
  progressColor: "from-blue-900 to-blue-800"
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
  color: "from-teal-700 to-teal-600",
  buttonColor: "bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500",
  progressColor: "from-teal-700 to-teal-600"
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
  color: "from-slate-600 to-slate-500",
  buttonColor: "bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400",
  progressColor: "from-slate-600 to-slate-500"
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
  color: "from-red-800 to-red-700",
  buttonColor: "bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600",
  progressColor: "from-red-800 to-red-700"
}] as any[];
export default function SponsorSection({
  className = ""
}: SponsorSectionProps) {
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(null);
  const [paymentPackage, setPaymentPackage] = React.useState<string | null>(null);
  const [showAIRecommendation, setShowAIRecommendation] = React.useState(false);
  const [aiRecommendation, setAIRecommendation] = React.useState<string | null>(null);
  const [videoKey, setVideoKey] = React.useState(0);
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [audioEnabled, setAudioEnabled] = React.useState(false);
  const [userHasInteracted, setUserHasInteracted] = React.useState(false);
  const [showAudioNotification, setShowAudioNotification] = React.useState(false);
  const [showPDFGenerator, setShowPDFGenerator] = React.useState(false);
  const [pdfData, setPDFData] = React.useState<SponsorshipData | null>(null);
  
  const sponsorVideo = {
    id: 'C663b1dAhtA',
    title: 'Turning Pro the Raw Way'
  };

  const selectedPkg = selectedPackage ? sponsorPackages.find(pkg => pkg.id === selectedPackage) : null;
  const paymentPkg = paymentPackage ? sponsorPackages.find(pkg => pkg.id === paymentPackage) : null;

  const handlePaymentSuccess = (paymentDetails: any) => {
    console.log('Payment successful:', paymentDetails);
    // Here you would typically update the backend, send confirmation emails, etc.
    setPaymentPackage(null);
    setSelectedPackage(null);
    // You could show a success message or update the UI to reflect the new sponsorship
  };

  // Add global click listener to detect user interaction
  React.useEffect(() => {
    const handleFirstInteraction = () => {
      if (!userHasInteracted) {
        setUserHasInteracted(true);
        setAudioEnabled(true);
        setShowAudioNotification(false);
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    if (!userHasInteracted) {
      setShowAudioNotification(true);
      document.addEventListener('click', handleFirstInteraction);
      document.addEventListener('touchstart', handleFirstInteraction);
    }

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [userHasInteracted]);

  // Reload video when audio state changes
  React.useEffect(() => {
    setVideoKey(prev => prev + 1);
  }, [audioEnabled]);

  // AI-powered sponsor matching
  const generateAIRecommendation = (companyType: string, budget: string, goals: string) => {
    const budgetNum = parseInt(budget.replace(/[$,]/g, '')) || 0;
    
    let recommendation = "";
    let recommendedPackage = sponsorPackages[0]; // Default to first package
    
    if (budgetNum <= 2000) {
      recommendation = `Based on your budget and ${companyType} business type, I recommend the **Equipment Partner** package ($1,500). This provides excellent brand visibility with product placement opportunities and training session highlights. It's perfect for ${companyType} companies looking to build authentic connections with boxing fans.`;
      recommendedPackage = sponsorPackages.find(pkg => pkg.id === 'equipment-sponsor') || sponsorPackages[2];
    } else if (budgetNum <= 3000) {
      recommendation = `Perfect fit! The **Training Camp Sponsor** package ($2,500) aligns with your ${companyType} business and budget. You'll get behind-the-scenes content, social media features, and direct association with Kumar's training dedication - ideal for building brand trust and engagement.`;
      recommendedPackage = sponsorPackages.find(pkg => pkg.id === 'training-camp') || sponsorPackages[0];
    } else if (budgetNum <= 6000) {
      recommendation = `Excellent choice for ${companyType}! The **Fight Night Sponsor** package ($5,000) offers maximum exposure with ringside seats, logo placement on fight shorts, and social media shout-outs. This high-visibility package delivers exceptional ROI for businesses targeting sports enthusiasts.`;
      recommendedPackage = sponsorPackages.find(pkg => pkg.id === 'fight-sponsor') || sponsorPackages[1];
    } else {
      recommendation = `For a ${companyType} business with your budget, the **Career Champion** package ($10,000) provides unmatched value. You'll get year-long brand partnership, exclusive content creation, and custom promotional campaigns. This comprehensive package builds lasting brand association with a rising boxing star.`;
      recommendedPackage = sponsorPackages.find(pkg => pkg.id === 'career-sponsor') || sponsorPackages[3];
    }

    if (goals.toLowerCase().includes('awareness')) {
      recommendation += "\n\n**AI Insight**: Your brand awareness goals align perfectly with boxing's passionate fanbase. Kumar's growing social media presence and fight coverage will amplify your brand message to engaged audiences.";
    }
    
    if (goals.toLowerCase().includes('local') || goals.toLowerCase().includes('oakland')) {
      recommendation += "\n\n**Local Focus**: As Kumar represents Oakland pride, your local business will benefit from strong community connection and hometown hero association.";
    }

    // Prepare PDF data
    const pdfSponsorshipData = {
      businessType: companyType,
      budget: budget,
      goals: goals,
      recommendedPackage: {
        title: recommendedPackage.title,
        price: recommendedPackage.price,
        description: recommendedPackage.description,
        benefits: recommendedPackage.benefits,
      },
      recommendation: recommendation,
    };

    setAIRecommendation(recommendation);
    setPDFData(pdfSponsorshipData);
    setShowAIRecommendation(true);
  };

  const handleEmailCapture = (email: string) => {
    console.log('Email captured for lead generation:', email);
    // Here you would typically send this to your CRM or email service
    // For now, we'll just log it
  };
  return <section className={`relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden ${className}`} id="sponsors">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Turning Pro the Raw Way Video */}
        <iframe 
          key={videoKey}
          className="absolute inset-0 w-full h-full object-cover" 
          src={`https://www.youtube.com/embed/${sponsorVideo.id}?autoplay=1&mute=${audioEnabled ? '0' : '1'}&loop=1&playlist=${sponsorVideo.id}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&start=0&enablejsapi=1&origin=${window.location.origin}&widget_referrer=${window.location.origin}&cc_load_policy=0&disablekb=1&fs=0`}
          title={sponsorVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
          allowFullScreen 
          style={{ 
            pointerEvents: 'none',
            border: 'none',
            outline: 'none'
          }}
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setVideoLoaded(true)}
        />
        
        {/* Audio Control and Notification */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-black/70 hover:bg-black/85 backdrop-blur-sm rounded-full text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
            aria-label={audioEnabled ? 'Mute video audio' : 'Enable video audio'}
          >
            {audioEnabled ? (
              <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
          
          {/* Audio status indicator */}
          <div className="absolute -bottom-8 right-0">
            <span className="text-xs font-medium text-white/80 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
              {audioEnabled ? 'Audio On' : 'Audio Off'}
            </span>
          </div>
        </div>

        {/* Audio notification for first interaction */}
        {showAudioNotification && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="bg-black/80 backdrop-blur-sm text-white px-6 py-4 rounded-lg border border-white/20 text-center max-w-sm">
              <Volume2 className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <p className="text-sm font-medium mb-1">Click anywhere to enable audio</p>
              <p className="text-xs text-white/70">Sponsor video will play with sound</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium bg-white/90 backdrop-blur-sm">
            Partnership Opportunities
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Sponsor Kumar "The Raw One"
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Join Kumar Prescod on his path to championship glory. Choose a sponsorship package 
            that aligns with your brand and supports a rising star in professional boxing.
          </p>
        </div>

        {/* Sponsor Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {sponsorPackages.map(pkg => {
          const IconComponent = pkg.icon;
          const progressPercentage = pkg.raised / pkg.goal * 100;
          const isCompleted = pkg.raised >= pkg.goal;
          return <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white/95 backdrop-blur-sm border-white/20 ${pkg.featured ? 'ring-2 ring-red-500 scale-105' : ''} ${selectedPackage === pkg.id ? 'ring-4 ring-blue-400 shadow-2xl scale-105 bg-blue-50/90' : ''}`} onClick={() => setSelectedPackage(pkg.id)}>
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
                      <div className={`h-2 rounded-full bg-gradient-to-r ${pkg.progressColor} transition-all duration-500 ${selectedPackage === pkg.id ? 'h-3 shadow-lg animate-pulse' : ''}`} style={{
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
                  
                  <div className="space-y-2">
                    <Button className={`w-full min-h-[44px] ${isCompleted ? 'bg-green-600 hover:bg-green-700' : pkg.buttonColor} text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm sm:text-base`} onClick={e => {
                e.stopPropagation();
                setSelectedPackage(pkg.id);
              }}>
                      {isCompleted ? 'View Details' : 'Learn More'}
                    </Button>
                    {!isCompleted && (
                      <Button 
                        className="w-full min-h-[44px] bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center text-sm sm:text-base"
                        onClick={e => {
                          e.stopPropagation();
                          setPaymentPackage(pkg.id);
                        }}
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Quick Sponsor
                      </Button>
                    )}
                  </div>
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
                        <div className={`h-3 rounded-full bg-gradient-to-r ${selectedPkg.progressColor} transition-all duration-500 shadow-lg animate-pulse`} style={{
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
                    <div className="mt-8 space-y-3">
                      {selectedPkg.raised >= selectedPkg.goal ? (
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg">
                          Package Fully Funded
                        </Button>
                      ) : (
                        <>
                          <Button 
                            className={`w-full ${selectedPkg.buttonColor} text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center`}
                            onClick={() => setPaymentPackage(selectedPkg.id)}
                          >
                            <CreditCard className="w-5 h-5 mr-2" />
                            Sponsor with Stripe
                          </Button>
                          <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300">
                            Contact for Custom Package
                          </Button>
                        </>
                      )}
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Secure payment processing • Tax-deductible receipts available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}

        {/* Mock Payment Modal */}
        {paymentPkg && (
          <MockSponsorPayment
            packageDetails={{
              id: paymentPkg.id,
              title: paymentPkg.title,
              price: paymentPkg.price,
              priceAmount: parseInt(paymentPkg.price.replace(/[$,]/g, '')),
              description: paymentPkg.description,
              buttonColor: paymentPkg.buttonColor
            }}
            onClose={() => setPaymentPackage(null)}
            onSuccess={handlePaymentSuccess}
          />
        )}

        {/* AI-Powered Recommendation Section */}
        <div className="mb-16 bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Bot className="w-6 h-6 mr-2" />
              AI Sponsor Matching
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Let our AI analyze your business and recommend the perfect sponsorship package tailored to your goals and budget.
            </p>
          </div>
          
          {!showAIRecommendation ? (
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Business Type</label>
                  <select id="businessType" className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40">
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Food & Beverage">Food & Beverage</option>
                    <option value="Financial Services">Financial Services</option>
                    <option value="Retail">Retail</option>
                    <option value="Local Business">Local Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Budget Range</label>
                  <select id="budget" className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40">
                    <option value="$1,000-$2,000">$1,000-$2,000</option>
                    <option value="$2,000-$5,000">$2,000-$5,000</option>
                    <option value="$5,000-$10,000">$5,000-$10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Primary Goal</label>
                  <select id="goals" className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40">
                    <option value="Brand Awareness">Brand Awareness</option>
                    <option value="Local Market">Local Market</option>
                    <option value="Sports Audience">Sports Audience</option>
                    <option value="Community Engagement">Community Engagement</option>
                    <option value="Product Launch">Product Launch</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => {
                  const businessType = (document.getElementById('businessType') as HTMLSelectElement).value;
                  const budget = (document.getElementById('budget') as HTMLSelectElement).value;
                  const goals = (document.getElementById('goals') as HTMLSelectElement).value;
                  generateAIRecommendation(businessType, budget, goals);
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Get AI Recommendation
              </button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  AI Recommendation
                </h4>
                <div className="text-blue-100 leading-relaxed whitespace-pre-line">
                  {aiRecommendation}
                </div>
              </div>
              <div className="space-y-4">
                {/* PDF Generator Section */}
                {pdfData && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Get Your Custom Sponsorship Deck
                    </h5>
                    <SponsorshipPDFGenerator 
                      sponsorshipData={pdfData} 
                      onEmailCapture={handleEmailCapture}
                    />
                  </div>
                )}
                
                <div className="text-center">
                  <button
                    onClick={() => setShowAIRecommendation(false)}
                    className="mr-4 bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => {
                      // Find recommended package and open it
                      const recommendation = aiRecommendation?.toLowerCase() || '';
                      let packageId = '';
                      if (recommendation.includes('equipment partner')) packageId = 'equipment-sponsor';
                      else if (recommendation.includes('training camp')) packageId = 'training-camp';
                      else if (recommendation.includes('fight night')) packageId = 'fight-sponsor';
                      else if (recommendation.includes('career champion')) packageId = 'career-sponsor';
                      
                      if (packageId) {
                        setSelectedPackage(packageId);
                        setShowAIRecommendation(false);
                      }
                    }}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
                  >
                    View Recommended Package
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

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
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => {
                // Create basic PDF data for general deck
                const generalPDFData = {
                  businessType: "Your Business",
                  budget: "$5,000",
                  goals: "Brand Awareness",
                  recommendedPackage: {
                    title: "Fight Night Sponsor",
                    price: "$5,000",
                    description: "Be part of Kumar's journey to championship glory",
                    benefits: [
                      "Ringside seats for sponsored fight",
                      "Logo on fight shorts and banner", 
                      "Pre-fight photo opportunity",
                      "Social media shout-outs",
                      "Post-fight celebration access"
                    ],
                  },
                  recommendation: "Professional boxing sponsorship offers exceptional brand visibility and authentic connection with passionate sports fans. Kumar Prescod represents the perfect opportunity to align your brand with a rising champion.",
                };
                setPDFData(generalPDFData);
                setShowPDFGenerator(true);
              }}
            >
              Download Sponsorship Deck
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Contact for Custom Package
            </Button>
          </div>
        </div>

        {/* General PDF Generator Modal */}
        {showPDFGenerator && pdfData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Download Sponsorship Deck</h3>
                <Button variant="outline" size="sm" onClick={() => setShowPDFGenerator(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Get a comprehensive sponsorship deck showcasing Kumar Prescod's professional boxing opportunities 
                  and partnership benefits for your brand.
                </p>
                <SponsorshipPDFGenerator 
                  sponsorshipData={pdfData} 
                  onEmailCapture={handleEmailCapture}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>;
}