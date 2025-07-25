import React from 'react';
import { 
  IconBook, IconComponents, IconPalette, IconCode, 
  IconDownload, IconBrandReact, IconBrandNpm,
  IconCheck, IconStar, IconHeart, IconRocket
} from '@tabler/icons-react';

const Documentation = ({ theme }) => {
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
      icon: <IconComponents size={24} />,
      title: "Dual Layout Support",
      description: "Switch between sidebar and top navigation layouts"
    },
    {
      icon: <IconPalette size={24} />,
      title: "Glassmorphism Design",
      description: "Modern frosted glass effect with backdrop blur"
    },
    {
      icon: <IconCode size={24} />,
      title: "TypeScript Support",
      description: "Full TypeScript definitions included"
    },
    {
      icon: <IconRocket size={24} />,
      title: "Performance Optimized",
      description: "Lightweight and optimized for production"
    }
  ];

  return (
    <div 
      className="h-screen overflow-y-auto w-full bg-gradient-to-br from-slate-50 to-blue-50 p-8" 
      style={{ backgroundColor: theme?.backgroundColor || '#f8fafc' }}
    >
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <IconBrandReact size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ color: primaryTextColor }}>
            React UI Components
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: secondaryTextColor }}>
            A collection of beautiful, customizable React UI components including versatile navigation 
            with dual layout support and stylish input fields with extensive customization options.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <IconDownload size={20} />
              Get Started
            </button>
            <button className="bg-white border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors" style={{ color: tertiaryTextColor }}>
              <IconBrandNpm size={20} />
              npm install
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div style={{ color: secondaryTextColor }}>Core Components</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">TypeScript</div>
            <div style={{ color: secondaryTextColor }}>Fully Supported</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">MIT</div>
            <div style={{ color: secondaryTextColor }}>Open Source</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: primaryTextColor }}>Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: primaryTextColor }}>{feature.title}</h3>
                <p className="text-sm" style={{ color: secondaryTextColor }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Components Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Components Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Navbar Component */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <IconComponents size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Navbar Component</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A powerful navigation component that supports both sidebar and top navigation layouts 
                with seamless switching, dropdown support, glassmorphism design, and smooth animations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCheck size={16} className="text-green-500" />
                  <span>Dual layout support (sidebar & top)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCheck size={16} className="text-green-500" />
                  <span>Mobile responsive design</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCheck size={16} className="text-green-500" />
                  <span>Dropdown navigation support</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCheck size={16} className="text-green-500" />
                  <span>Active state highlighting</span>
                </div>
              </div>
            </div>

            {/* Input Component */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <IconPalette size={24} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Input Component</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A feature-rich input component with icon support, multiple variants, custom content areas, 
                and beautiful theming options including glassmorphism effects.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCheck size={16} className="text-green-500" />
                  <span>Multiple style variants</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCheck size={16} className="text-green-500" />
                  <span>Icon & custom content support</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCheck size={16} className="text-green-500" />
                  <span>Validation states</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconCheck size={16} className="text-green-500" />
                  <span>Password toggle functionality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Section */}
        <div className="bg-gray-900 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Quick Installation</h2>
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <code className="text-green-400 text-lg">npm install vj-ui-components</code>
          </div>
          <div className="text-center">
            <p className="text-gray-300 mb-4">Peer Dependencies:</p>
            <div className="bg-gray-800 rounded-lg p-4">
              <code className="text-blue-400">npm install react react-dom react-router-dom @tabler/icons-react</code>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive documentation and examples to start building beautiful 
            user interfaces with our React UI components.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <IconBook size={20} />
              View Documentation
            </button>
            <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <IconStar size={20} />
              Star on GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
