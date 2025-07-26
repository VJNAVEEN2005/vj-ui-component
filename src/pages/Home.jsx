import React from 'react';
import { 
  IconBrandReact, IconDownload, IconBook, IconCode, 
  IconComponents, IconPalette, IconSettings, IconRocket,
  IconCheck, IconStar, IconArrowRight,
  IconBrandGithub
} from '@tabler/icons-react';

const Home = ({ theme }) => {
  // Function to determine if a color is light or dark
  const isLightColor = (color) => {
    if (!color) return true; // Default to light if no color
    
    // Remove # if present
    const hex = color.replace('#', '');
    
    // Convert to RGB
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5;
  };

  // Determine text colors based on background
  const isLight = isLightColor(theme?.backgroundColor);
  const primaryTextColor = isLight ? '#111827' : '#f1f5f9';
  const secondaryTextColor = isLight ? '#4b5563' : '#cbd5e1';
  const tertiaryTextColor = isLight ? '#374151' : '#94a3b8';

  const features = [
    {
      icon: <IconComponents size={32} />,
      title: "Smart Navigation",
      description: "Switch between sidebar and top layouts on the fly. Built for real apps with real routing needs—not just demos.",
      highlights: ["Zero configuration setup", "Mobile-first responsive", "Smooth layout transitions", "Works with React Router"]
    },
    {
      icon: <IconPalette size={32} />,
      title: "Input That Actually Works", 
      description: "Form inputs that handle edge cases you forgot about. Validation states, password toggles, and icons that don't break your layout.",
      highlights: ["Built-in validation styling", "Accessibility first", "Password visibility toggle", "Icon positioning that works"]
    }
  ];

  const stats = [
    { label: "Components", value: "2", color: "text-blue-600" },
    { label: "Happy Devs", value: "50+", color: "text-green-600" },
    { label: "TypeScript", value: "100%", color: "text-purple-600" },
    { label: "Bundle Size", value: "< 50KB", color: "text-orange-600" }
  ];

  return (
    <div 
      className="h-screen overflow-y-auto w-full " 
      style={{ backgroundColor: theme?.backgroundColor || '#f8fafc' }}
    >
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <IconBrandReact size={64} className="text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6" style={{ color: primaryTextColor }}>
            VJ UI Components
          </h1>
          
          <p className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{ color: secondaryTextColor }}>
            Build faster with hand-crafted React components. No bloat, no complexity—just clean, 
            customizable UI elements that work exactly how you'd expect them to.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <button
            onClick={() => window.location.href = 'https://www.npmjs.com/package/vj-ui-components'}
            className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              <IconDownload size={24} />
              Get Started
            </button>
            <button onClick={() => window.location.href = 'https://github.com/VJNAVEEN2005/ui-reactpackages#readme'} className="bg-white border-2 cursor-pointer border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl" style={{ color: tertiaryTextColor }}>
              <IconBook size={24} />
              Documentation
            </button>
          </div>

          {/* Quick Install */}
          <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl mx-auto mb-6">
            <div className="text-gray-400 text-sm mb-2">Quick Install</div>
            <code className="text-green-400 text-xl font-mono">npm install vj-ui-components</code>
          </div>

          {/* Search Hint */}
          <div className="flex items-center justify-center gap-3 text-sm" style={{ color: secondaryTextColor }}>
            <span>💡 Quick tip: Press</span>
            <kbd className="px-2 py-1 bg-white/20 rounded font-mono text-xs border border-white/30">Ctrl</kbd>
            <span>+</span>
            <kbd className="px-2 py-1 bg-white/20 rounded font-mono text-xs border border-white/30">K</kbd>
            <span>to search all pages instantly</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="font-medium" >{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: primaryTextColor }}>
            Built by a Developer, for Developers
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto" style={{ color: secondaryTextColor }}>
            Tired of components that look great in demos but break in production? These are battle-tested in real projects.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold" >{feature.title}</h3>
                </div>

                <p className="mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <IconCheck size={20} className="text-green-500" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                  Learn More
                  <IconArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: primaryTextColor }}>
            The Honest Truth About These Components
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-blue-100 rounded-2xl w-fit mx-auto mb-4">
                <IconRocket size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Actually Fast</h3>
              <p>Under 50KB total. No jQuery dependencies hiding in the shadows. Your lighthouse score will thank you.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-green-100 rounded-2xl w-fit mx-auto mb-4">
                <IconCode size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">TypeScript Native</h3>
              <p>Written in TypeScript from day one. IntelliSense that actually works without weird type gymnastics.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-purple-100 rounded-2xl w-fit mx-auto mb-4">
                <IconSettings size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reasonable Defaults</h3>
              <p>Works great out of the box. Customize when you need to, not because you have to.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-orange-100 rounded-2xl w-fit mx-auto mb-4">
                <IconPalette size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Actually Modern</h3>
              <p>Glassmorphism effects that don't tank performance. CSS that makes sense in 2025.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-red-100 rounded-2xl w-fit mx-auto mb-4">
                <IconCheck size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Production Ready</h3>
              <p>Used in real apps handling real traffic. Edge cases handled before you hit them.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-indigo-100 rounded-2xl w-fit mx-auto mb-4">
                <IconStar size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Vendor Lock-in</h3>
              <p>MIT licensed. Copy the code. Modify it. Make it yours. No credit card required.</p>
            </div>
          </div>
        </div>

        {/* Code Preview */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: primaryTextColor }}>
            No Magic, Just Good Code
          </h2>
          
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 text-sm">App.jsx</span>
              </div>
            </div>
            <pre className="p-6 text-gray-300 text-sm overflow-x-auto">
              <code>{`import React from 'react';
import { Navbar, Input } from 'vj-ui-components';
import { IconHome, IconSettings, IconUser } from '@tabler/icons-react';

function App() {
  return (
    <div>
      <Navbar
        layout="side"
        heading="My App"
        topdata={[
          { icon: <IconHome />, text: "Home", path: "/" }
        ]}
        bottomdata={[
          { icon: <IconSettings />, text: "Settings", path: "/settings" }
        ]}
      />
      
      <Input
        label="Username"
        placeholder="Enter your username"
        leftIcon={<IconUser size={18} />}
        variant="glassmorphism"
      />
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        

        
      </div>
    </div>
  );
};

export default Home;