'use client';

import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Users, 
  Zap, 
  Shield, 
  Github, 
  ArrowRight, 
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: "Rich Discussions",
      description: "Create engaging topics and foster meaningful conversations with nested comment threads."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Build vibrant communities around shared interests and ideas with GitHub authentication."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Next.js and TypeScript for optimal performance and developer experience."
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50K+", label: "Discussions" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-[#1E1B2E] text-[#EDE9FE] overflow-hidden">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-2 bg-[#2A2438] border border-[#3F3C5B] rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-sm text-purple-200">Where Ideas Come to Life</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#DDD6FE] bg-clip-text text-transparent">
                  Discuss
                </span>
                <br />
                <span className="text-[#EDE9FE]">Everything</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Create engaging discussions, share your thoughts, and connect with like-minded individuals in a beautifully crafted platform.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group flex items-center space-x-2 bg-[#8B5CF6] hover:bg-[#7C3AED] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/50 hover:-translate-y-1">
                  <Link href="/home">Start Discussing</Link>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className='bg-[#3F3C5B]' />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Everything you need to create engaging discussions and build thriving communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-8 bg-[#2A2438] border border-[#3F3C5B] rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-[#8B5CF6]/20 hover:-translate-y-2 ${
                    activeFeature === index ? 'shadow-lg shadow-[#8B5CF6]/30 border-[#8B5CF6]/50' : ''
                  }`}
                >
                  <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#8B5CF6]/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-purple-200 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2A2438]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#8B5CF6]/50">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Sign Up with GitHub</h3>
              <p className="text-purple-200">Quick and secure authentication using your GitHub account.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#8B5CF6]/50">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Create Topics</h3>
              <p className="text-purple-200">Start discussions on topics you're passionate about.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#8B5CF6]/50">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Engage & Connect</h3>
              <p className="text-purple-200">Comment, reply, and build meaningful connections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#C084FC]/20 border border-[#8B5CF6]/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start <span className="bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] bg-clip-text text-transparent">Discussing?</span>
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already creating amazing discussions and building communities.
            </p>
            <button className="group flex items-center space-x-2 bg-[#8B5CF6] hover:bg-[#7C3AED] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/50 hover:-translate-y-1 mx-auto">
              <Github className="w-5 h-5" />
              <span>Get Started with GitHub</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#3F3C5B]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#DDD6FE] bg-clip-text text-transparent">
              Discuss
            </span>
          </div>
          <p className="text-purple-200">
            Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}