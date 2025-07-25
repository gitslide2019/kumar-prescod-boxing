import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Minimize2, 
  Maximize2, 
  User, 
  Bot,
  Trophy,
  ShoppingCart,
  Calendar,
  DollarSign,
  Info,
  Mic,
  MicOff,
  Volume2,
  VolumeX
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  category?: 'general' | 'boxing' | 'shop' | 'sponsor' | 'event';
}

interface AIChatAssistantProps {
  isMinimized?: boolean;
  onToggleMinimize?: () => void;
}

const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ 
  isMinimized = true, 
  onToggleMinimize 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [minimized, setMinimized] = useState(isMinimized);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Kumar's AI assistant. I can help you with information about Kumar Prescod, his fights, merchandise, sponsorship opportunities, and upcoming events. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
      category: 'general'
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Quick suggestion buttons
  const quickSuggestions = [
    { text: "Tell me about Kumar's boxing record", category: 'boxing', icon: Trophy },
    { text: "What merchandise is available?", category: 'shop', icon: ShoppingCart },
    { text: "How can I sponsor Kumar?", category: 'sponsor', icon: DollarSign },
    { text: "When is the next fight?", category: 'event', icon: Calendar },
    { text: "Kumar's training schedule", category: 'general', icon: Info }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Response System - Simulated intelligent responses
  const generateAIResponse = async (userMessage: string): Promise<string> => {
    const message = userMessage.toLowerCase();
    
    // Boxing-related responses
    if (message.includes('record') || message.includes('fight') || message.includes('boxing')) {
      return "Kumar Prescod has an impressive professional record of 3-0 with 3 knockouts - that's a 100% knockout rate! His amateur record was 63-8, and he's a 9-time National Champion. He turned pro at just 17 years old and has been on Team USA twice. His next fight is on August 16th at the Oakland Marriott City Center.";
    }
    
    // Shop-related responses
    if (message.includes('shop') || message.includes('merchandise') || message.includes('buy') || message.includes('store')) {
      return "Our official store has authentic Kumar Prescod merchandise! We have signature t-shirts ($35), Oakland Boxing hoodies ($65), professional boxing gloves ($150), and Oakland Champion caps ($30). You can add items to your cart and checkout securely with Stripe. Free shipping on orders over $75!";
    }
    
    // Sponsor-related responses
    if (message.includes('sponsor') || message.includes('partnership') || message.includes('support')) {
      return "We have several sponsorship packages available: Training Camp Sponsor ($2,500), Fight Night Sponsor ($5,000), Equipment Partner ($1,500), and Career Champion ($10,000). Each package includes unique benefits like logo placement, meet & greets, and social media features. You can sponsor directly through our secure Stripe payment system.";
    }
    
    // Event-related responses
    if (message.includes('event') || message.includes('when') || message.includes('next') || message.includes('august')) {
      return "Kumar's next fight is on August 16th, 2025 at the Oakland Marriott City Center (1001 Broadway, Oakland, CA). Doors open at 3PM and first fight starts at 4PM. You can get tickets through our website - it's going to be an amazing night of professional boxing!";
    }
    
    // Training-related responses
    if (message.includes('train') || message.includes('schedule') || message.includes('workout')) {
      return "Kumar trains intensively at Oakland boxing gyms, focusing on technique, conditioning, and sparring. His training includes daily workouts, strength conditioning, and technical drills. As a sponsor, you can get behind-the-scenes access to his training camps and see the dedication that makes him a champion.";
    }
    
    // Payment-related responses
    if (message.includes('payment') || message.includes('pay') || message.includes('stripe') || message.includes('checkout')) {
      return "We use Stripe for secure payment processing on both merchandise and sponsorships. All payments are encrypted and secure. For sponsorships, you can customize your amount and get tax-deductible receipts. For merchandise, we accept all major credit cards and offer free shipping on orders over $75.";
    }
    
    // Oakland/location responses
    if (message.includes('oakland') || message.includes('california') || message.includes('bay area')) {
      return "Kumar is straight outta Oakland, California! He represents Oakland boxing with pride and has been training there since he was 6 years old. The city has shaped his fighting spirit and determination. His upcoming fight on August 16th is right here in Oakland at the Marriott City Center.";
    }
    
    // Help responses
    if (message.includes('help') || message.includes('assistance') || message.includes('support')) {
      return "I'm here to help! I can provide information about Kumar's boxing career, upcoming fights, merchandise in our shop, sponsorship opportunities, and event details. I can also assist with payments and answer questions about training. What specific area would you like to know more about?";
    }
    
    // Default response
    return "That's a great question! Kumar Prescod is a rising star in professional boxing with a 3-0 record and 100% knockout rate. He's from Oakland, CA and has an amazing story. I can help you learn more about his fights, shop for merchandise, explore sponsorship opportunities, or get tickets to his next fight on August 16th. What interests you most?";
  };

  const sendMessage = async (text?: string) => {
    const messageText = text || currentMessage.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(async () => {
      const aiResponse = await generateAIResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
        category: 'general'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Text-to-speech if enabled
      if (voiceEnabled && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(aiResponse);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
      }
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Voice recognition (if supported)
  const toggleVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      if (!isListening) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setCurrentMessage(transcript);
          setIsListening(false);
        };
        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);

        recognition.start();
      } else {
        setIsListening(false);
      }
    }
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
    onToggleMinimize?.();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-2 -left-2 bg-green-500 w-4 h-4 rounded-full animate-pulse"></span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      minimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Kumar's AI Assistant</h3>
              <p className="text-xs opacity-90">Always ready to help</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              title={voiceEnabled ? 'Disable voice' : 'Enable voice'}
            >
              {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleMinimize}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              {minimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!minimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`rounded-2xl p-3 ${
                      message.isUser 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser ? 'text-orange-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.slice(0, 3).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => sendMessage(suggestion.text)}
                      className="flex items-center space-x-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                    >
                      <suggestion.icon className="w-3 h-3" />
                      <span>{suggestion.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Kumar..."
                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    disabled={isTyping}
                  />
                  {('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) && (
                    <button
                      onClick={toggleVoiceRecognition}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${
                        isListening 
                          ? 'bg-red-100 text-red-600' 
                          : 'hover:bg-gray-100 text-gray-400'
                      }`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                <button
                  onClick={() => sendMessage()}
                  disabled={!currentMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-300 disabled:to-gray-400 text-white p-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIChatAssistant;