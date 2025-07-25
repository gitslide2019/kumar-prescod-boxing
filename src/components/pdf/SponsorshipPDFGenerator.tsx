import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font, pdf } from '@react-pdf/renderer';
import { Download, FileText, Mail } from 'lucide-react';

// PDF Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f59e0b',
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    color: '#374151',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1f2937',
  },
  benefitItem: {
    fontSize: 11,
    marginBottom: 4,
    marginLeft: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statBox: {
    width: '23%',
    padding: 10,
    backgroundColor: '#f3f4f6',
    borderRadius: 5,
    textAlign: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  statLabel: {
    fontSize: 10,
    color: '#6b7280',
  },
  recommendationBox: {
    backgroundColor: '#fef3c7',
    padding: 15,
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    marginBottom: 15,
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: 8,
  },
  packageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 5,
  },
  packagePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#6b7280',
  },
});

export interface SponsorshipData {
  companyName?: string;
  businessType: string;
  budget: string;
  goals: string;
  recommendedPackage: {
    title: string;
    price: string;
    description: string;
    benefits: string[];
  };
  recommendation: string;
}

interface SponsorshipPDFProps {
  data: SponsorshipData;
}

// PDF Document Component
const SponsorshipPDFDocument: React.FC<SponsorshipPDFProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>KUMAR PRESCOD</Text>
        <Text style={styles.subtitle}>Professional Boxing Sponsorship Opportunities</Text>
        {data.companyName && <Text style={styles.subtitle}>Prepared for {data.companyName}</Text>}
      </View>

      {/* Fighter Stats */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fighter Statistics</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3-0</Text>
            <Text style={styles.statLabel}>Pro Record</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>KO Wins</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>9x</Text>
            <Text style={styles.statLabel}>National Champ</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>63-8</Text>
            <Text style={styles.statLabel}>Amateur Record</Text>
          </View>
        </View>
      </View>

      {/* AI Recommendation */}
      {data.recommendation && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI-Powered Recommendation</Text>
          <View style={styles.recommendationBox}>
            <Text style={styles.recommendationTitle}>Customized for {data.businessType} Business</Text>
            <Text style={styles.text}>{data.recommendation}</Text>
          </View>
        </View>
      )}

      {/* Recommended Package */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended Sponsorship Package</Text>
        <Text style={styles.packageTitle}>{data.recommendedPackage.title}</Text>
        <Text style={styles.packagePrice}>{data.recommendedPackage.price}</Text>
        <Text style={styles.text}>{data.recommendedPackage.description}</Text>
        
        <Text style={[styles.text, styles.boldText]}>Package Benefits:</Text>
        {data.recommendedPackage.benefits.map((benefit, index) => (
          <Text key={index} style={styles.benefitItem}>• {benefit}</Text>
        ))}
      </View>

      {/* About Kumar */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Kumar Prescod</Text>
        <Text style={styles.text}>
          From Oakland, CA, Kumar Prescod is a rising star in professional boxing. Starting at age 6, 
          he dominated amateur boxing with a 63-8 record and 9 National Championships. A 2x Team USA member, 
          Kumar turned professional at 17 and maintains a perfect 3-0 record with 100% knockout rate.
        </Text>
        <Text style={styles.text}>
          Kumar represents Oakland pride and determination, making him an ideal brand ambassador for 
          companies looking to connect with passionate, engaged audiences.
        </Text>
      </View>

      {/* Next Steps */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Next Steps</Text>
        <Text style={styles.text}>
          Ready to partner with Kumar Prescod? Contact us to discuss your sponsorship package and 
          customize the partnership to meet your specific marketing goals.
        </Text>
        <Text style={[styles.text, styles.boldText]}>Contact Information:</Text>
        <Text style={styles.text}>Email: sponsors@kumarprescod.com</Text>
        <Text style={styles.text}>Phone: (510) 123-4567</Text>
        <Text style={styles.text}>Website: www.kumarprescod.com</Text>
      </View>

      <Text style={styles.footer}>
        © 2024 Kumar Prescod Boxing. All rights reserved. | Generated on {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

// Main Component
interface SponsorshipPDFGeneratorProps {
  sponsorshipData: SponsorshipData;
  onEmailCapture?: (email: string) => void;
}

const SponsorshipPDFGenerator: React.FC<SponsorshipPDFGeneratorProps> = ({ 
  sponsorshipData, 
  onEmailCapture 
}) => {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [showEmailForm, setShowEmailForm] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const generateAndDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const doc = <SponsorshipPDFDocument data={sponsorshipData} />;
      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Kumar-Prescod-Sponsorship-${sponsorshipData.businessType}-${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onEmailCapture) {
      onEmailCapture(email);
    }
    await generateAndDownloadPDF();
    setShowEmailForm(false);
    setEmail('');
  };

  return (
    <div className="space-y-4">
      {/* PDF Generation Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Direct Download */}
        <button
          onClick={generateAndDownloadPDF}
          disabled={isGenerating}
          className="flex items-center justify-center w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Generating...
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              Download Custom Deck
            </>
          )}
        </button>

        {/* Email Option */}
        <button
          onClick={() => setShowEmailForm(true)}
          className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
        >
          <Mail className="w-5 h-5 mr-2" />
          Email Me the Deck
        </button>
      </div>

      {/* Email Form Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Get Your Custom Sponsorship Deck</h3>
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your@company.com"
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {isGenerating ? 'Sending...' : 'Send & Download'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PDF Preview Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-gray-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-gray-900">Custom Sponsorship Deck Includes:</h4>
            <ul className="text-sm text-gray-600 mt-1 space-y-1">
              <li>• Personalized AI recommendation for {sponsorshipData.businessType}</li>
              <li>• Detailed package breakdown and benefits</li>
              <li>• Kumar's achievements and professional record</li>
              <li>• ROI projections and next steps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPDFGenerator;