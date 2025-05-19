"use client";
import { useState, useEffect } from 'react';
import { MessageSquare, Users, PenTool, BookOpen, ChevronRight, Star } from 'lucide-react';

// Animated background bubble component
type AnimatedBubbleProps = {
  size: string;
  delay: number;
  duration: number;
  top: number;
  left: number;
};

const AnimatedBubble = ({ size, delay, duration, top, left }: AnimatedBubbleProps) => {
  return (
    <div 
      className={`absolute rounded-full opacity-30 animate-float`}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: '#FFB4A2',
        top: `${top}%`, 
        left: `${left}%`, 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

// Feature card component
type FeatureCardProps = {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-1">
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 rounded-full bg-purple-100">
          <Icon className="text-purple-700" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Testimonial component
type TestimonialProps = {
  name: string;
  role: string;
  content: string;
};

const Testimonial = ({ name, role, content }: TestimonialProps) => {
  return (
    <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="italic text-gray-600 mb-4">"{content}"</p>
      <div className="font-medium text-gray-800">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  );
};

export default function Home() {
  // Create animated cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden" style={{ backgroundColor: '#EAEAEA' }}>
      {/* Background animation bubbles */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <AnimatedBubble size="200px" delay={0} duration={15} top={10} left={5} />
        <AnimatedBubble size="150px" delay={2} duration={12} top={70} left={80} />
        <AnimatedBubble size="120px" delay={1} duration={20} top={40} left={25} />
        <AnimatedBubble size="180px" delay={3} duration={18} top={60} left={15} />
        <AnimatedBubble size="100px" delay={2} duration={10} top={25} left={75} />
        <AnimatedBubble size="250px" delay={4} duration={25} top={80} left={55} />
      </div>

      {/* Custom cursor effect */}
      {isVisible && (
        <div 
          className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out" 
          style={{ 
            left: `${mousePosition.x}px`, 
            top: `${mousePosition.y}px`, 
            backgroundColor: '#FFC6FF',
            transform: 'translate(-50%, -50%) scale(1.2)',
          }} 
        />
      )}

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-sm bg-white bg-opacity-70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold" style={{ color: '#6D6875' }}>Discuss</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-100 transition-colors" style={{ color: '#4A4E69' }}>Features</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-100 transition-colors" style={{ color: '#4A4E69' }}>Community</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-100 transition-colors" style={{ color: '#4A4E69' }}>Blog</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-100 transition-colors" style={{ color: '#4A4E69' }}>Pricing</a>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm font-medium rounded-md transition-colors" style={{ color: '#6D6875' }}>
                Log in
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white rounded-md transition-colors" style={{ backgroundColor: '#6D6875' }}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto text-center md:text-left">
              <div className="pr-12">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: '#6D6875' }}>
                  Discuss. Connect. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Share ideas.</span>
                </h1>
                <p className="mt-4 text-lg leading-relaxed opacity-80 mb-8" style={{ color: '#4A4E69' }}>
                  Join our growing community where discussions flourish, ideas spread,
                  and connections are made through meaningful conversations.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button 
                    className="px-8 py-3 rounded-lg font-medium text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg" 
                    style={{ backgroundColor: '#6D6875' }}
                  >
                    Get Started <ChevronRight className="ml-2" size={18} />
                  </button>
                  <button 
                    className="px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 border border-gray-300 hover:bg-white hover:bg-opacity-50" 
                    style={{ color: '#4A4E69' }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-12 md:mt-0">
              <div className="relative">
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                      <span className="font-medium text-sm text-purple-700">JD</span>
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: '#4A4E69' }}>Jane Doe</div>
                      <div className="text-xs text-gray-500">Posted 2 hours ago in Design</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-3" style={{ color: '#4A4E69' }}>
                    Rethinking Design Systems in 2025
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    With the rise of AI-assisted tools, how are you adapting your design system workflows? I've been experimenting with...
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <MessageSquare size={14} className="mr-1" />
                      <span>24 comments</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      <span>128 participants</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full" style={{ backgroundColor: '#FFB4A2', opacity: 0.6 }}></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full" style={{ backgroundColor: '#FFC6FF', opacity: 0.6 }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white bg-opacity-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#6D6875' }}>Why Choose Discuss</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A4E69' }}>
              Our platform is designed to facilitate meaningful conversations and community building
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={MessageSquare}
              title="Threaded Discussions"
              description="Organize conversations with nested comments that make it easy to follow and engage in meaningful dialogue."
            />
            <FeatureCard
              icon={Users}
              title="Vibrant Community"
              description="Connect with like-minded individuals in a supportive environment focused on knowledge sharing."
            />
            <FeatureCard
              icon={PenTool}
              title="Rich Content Creation"
              description="Craft beautiful posts with our intuitive editor, supporting markdown, media embeds, and more."
            />
            <FeatureCard
              icon={BookOpen}
              title="Topic Organization"
              description="Easily discover content that matters to you with our well-organized topic system."
            />
            <FeatureCard
              icon={Star}
              title="Personalized Experience"
              description="Customize your feed to see the discussions and topics that interest you most."
            />
            <FeatureCard
              icon={ChevronRight}
              title="Seamless Authentication"
              description="Quick and secure sign-in options with multiple authentication providers."
            />
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#6D6875' }}>What Our Users Say</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A4E69' }}>
              Join thousands of satisfied users who've found their community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              name="Alex Johnson"
              role="Designer"
              content="The nested comment system is a game-changer. I can finally have meaningful discussions without losing track of the conversation."
            />
            <Testimonial
              name="Sarah Williams"
              role="Content Creator"
              content="I've built an incredible community around my technical tutorials. The topic organization makes it so easy for my readers to find related discussions."
            />
            <Testimonial
              name="Michael Chen"
              role="Community Manager"
              content="As someone who manages multiple communities, I can confidently say this platform offers the best tools for fostering engagement."
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: '#FFC6FF', opacity: 0.2 }}></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#6D6875' }}>Ready to join the conversation?</h2>
          <p className="text-lg mb-8" style={{ color: '#4A4E69' }}>
            Sign up now and become part of our growing community of thinkers, creators, and problem-solvers.
          </p>
          <button 
            className="px-8 py-3 rounded-lg font-medium text-white shadow-md flex items-center justify-center mx-auto transition-all duration-300 hover:shadow-lg" 
            style={{ backgroundColor: '#6D6875' }}
          >
            Create Your Account <ChevronRight className="ml-2" size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white bg-opacity-70 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-4" style={{ color: '#6D6875' }}>Discuss</h4>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: '#4A4E69' }}>
                A modern platform for conversations that matter. Build connections and share ideas in a supportive community.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm" style={{ color: '#4A4E69' }}>© 2025 Discuss. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add global styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
}