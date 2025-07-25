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
      title: "Navbar Component",
      description: "Versatile navigation with dual layout support - sidebar and top navigation with seamless switching.",
      highlights: ["Dual layouts", "Mobile responsive", "Glassmorphism design", "Dropdown support"]
    },
    {
      icon: <IconPalette size={32} />,
      title: "Input Component", 
      description: "Feature-rich input fields with extensive customization options and multiple variants.",
      highlights: ["Multiple variants", "Icon support", "Validation states", "Password toggle"]
    }
  ];

  const stats = [
    { label: "Components", value: "2", color: "text-blue-600" },
    { label: "Variants", value: "12+", color: "text-green-600" },
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
            A collection of beautiful, customizable React UI components including versatile navigation 
            with dual layout support and stylish input fields with extensive customization options.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <button
            onClick={() => window.location.href = 'https://www.npmjs.com/package/vj-ui-components'}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              <IconDownload size={24} />
              Get Started
            </button>
            <button className="bg-white border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl" style={{ color: tertiaryTextColor }}>
              <IconBook size={24} />
              Documentation
            </button>
          </div>

          {/* Quick Install */}
          <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-gray-400 text-sm mb-2">Quick Install</div>
            <code className="text-green-400 text-xl font-mono">npm install vj-ui-components</code>
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
            Powerful Components
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto" style={{ color: secondaryTextColor }}>
            Each component is carefully crafted with attention to detail, performance, and developer experience.
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
            Why Choose VJ UI Components?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-blue-100 rounded-2xl w-fit mx-auto mb-4">
                <IconRocket size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimized</h3>
              <p>Lightweight and optimized for production with minimal bundle impact.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-green-100 rounded-2xl w-fit mx-auto mb-4">
                <IconCode size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">TypeScript Ready</h3>
              <p>Full TypeScript support with comprehensive type definitions included.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-purple-100 rounded-2xl w-fit mx-auto mb-4">
                <IconSettings size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Highly Customizable</h3>
              <p>Extensive theming options and props for complete customization control.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-orange-100 rounded-2xl w-fit mx-auto mb-4">
                <IconPalette size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p>Beautiful glassmorphism effects and modern design patterns.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-red-100 rounded-2xl w-fit mx-auto mb-4">
                <IconCheck size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Production Ready</h3>
              <p>Battle-tested components ready for production applications.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
              <div className="p-4 bg-indigo-100 rounded-2xl w-fit mx-auto mb-4">
                <IconStar size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
              <p>Intuitive APIs and comprehensive documentation for smooth development.</p>
            </div>
          </div>
        </div>

        {/* Code Preview */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: primaryTextColor }}>
            Simple to Use
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