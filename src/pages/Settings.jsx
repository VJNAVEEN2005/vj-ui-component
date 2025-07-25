import React, { useState, useEffect } from 'react';
import { 
  IconPalette, IconSettings, IconRefresh, IconDownload, IconCheck,
  IconColorSwatch, IconSun, IconMoon, IconEye, IconCopy
} from '@tabler/icons-react';
import { Input } from 'vj-ui-components';

const Settings = ({ 
  primaryColor, 
  secondaryColor, 
  onColorChange,
  iconColor,
  textColor,
  onIconColorChange,
  onTextColorChange,
  backgroundColor,
  onBackgroundColorChange,
  onNavbarIconColorChange,
  onNavbarTextColorChange
}) => {
  const [activeTab, setActiveTab] = useState('colors');
  const [tempColors, setTempColors] = useState({
    primary: primaryColor,
    secondary: secondaryColor,
    icon: iconColor,
    text: textColor,
    background: backgroundColor || '#f9fafb'
  });
  const [copySuccess, setCopySuccess] = useState('');

  // Predefined color themes
  const colorThemes = [
    {
      name: 'Indigo',
      primary: '#6366f1',
      secondary: '#4f46e5',
      icon: '#1f2937',
      text: '#111827',
      background: '#f8fafc',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    },
    {
      name: 'Blue',
      primary: '#3b82f6',
      secondary: '#1d4ed8',
      icon: '#1f2937',
      text: '#111827',
      background: '#f8fafc',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    },
    {
      name: 'Purple',
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      icon: '#1f2937',
      text: '#111827',
      background: '#faf5ff',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    },
    {
      name: 'Pink',
      primary: '#ec4899',
      secondary: '#db2777',
      icon: '#1f2937',
      text: '#111827',
      background: '#fdf2f8',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    },
    {
      name: 'Green',
      primary: '#10b981',
      secondary: '#059669',
      icon: '#1f2937',
      text: '#111827',
      background: '#f0fdf4',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    },
    {
      name: 'Orange',
      primary: '#f59e0b',
      secondary: '#d97706',
      icon: '#1f2937',
      text: '#111827',
      background: '#fffbeb',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    },
    {
      name: 'Red',
      primary: '#ef4444',
      secondary: '#dc2626',
      icon: '#1f2937',
      text: '#111827',
      background: '#fef2f2',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    },
    {
      name: 'Teal',
      primary: '#14b8a6',
      secondary: '#0d9488',
      icon: '#1f2937',
      text: '#111827',
      background: '#f0fdfa',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    },
    {
      name: 'Dark',
      primary: '#374151',
      secondary: '#1f2937',
      icon: '#e2e8f0',
      text: '#f1f5f9',
      background: '#111827',
      navbarIcon: '#e2e8f0',
      navbarText: '#f1f5f9'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const handleColorChange = (colorType, value) => {
    setTempColors(prev => ({ ...prev, [colorType]: value }));
  };

  const applyColors = () => {
    onColorChange(tempColors.primary, tempColors.secondary);
    onIconColorChange(tempColors.icon);
    onTextColorChange(tempColors.text);
    onBackgroundColorChange(tempColors.background);
    onNavbarIconColorChange(tempColors.navbarIcon);
    onNavbarTextColorChange(tempColors.navbarText);
  };

  const resetToDefault = () => {
    const defaultTheme = colorThemes[0];
    setTempColors({
      primary: defaultTheme.primary,
      secondary: defaultTheme.secondary,
      icon: defaultTheme.icon,
      text: defaultTheme.text,
      background: defaultTheme.background
    });
    onColorChange(defaultTheme.primary, defaultTheme.secondary);
    onIconColorChange(defaultTheme.icon);
    onTextColorChange(defaultTheme.text);
    onBackgroundColorChange(defaultTheme.background);
    onNavbarIconColorChange(defaultTheme.navbarIcon);
    onNavbarTextColorChange(defaultTheme.navbarText);
  };

  const applyTheme = (theme) => {
    setTempColors({
      primary: theme.primary,
      secondary: theme.secondary,
      icon: theme.icon,
      text: theme.text,
      background: theme.background
    });
    onColorChange(theme.primary, theme.secondary);
    onIconColorChange(theme.icon);
    onTextColorChange(theme.text);
    onBackgroundColorChange(theme.background);
    onNavbarIconColorChange(theme.navbarIcon);
    onNavbarTextColorChange(theme.navbarText);
  };

  const generateConfigCode = () => {
    return `<Navbar
  layout="side"
  primaryColor="${tempColors.primary}"
  secondaryColor="${tempColors.secondary}"
  heading="Your App"
  iconColor="${tempColors.icon}"
  textColor="${tempColors.text}"
  topdata={topNavItems}
  bottomdata={bottomNavItems}
/>`;
  };

  return (
    <div 
      className="h-screen overflow-y-auto w-full bg-gray-50 p-8"
      style={{ backgroundColor: backgroundColor || '#f9fafb' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg" style={{ backgroundColor: primaryColor }}>
              <IconSettings size={32} style={{
                color: backgroundColor
              }} />
            </div>
            <div>
              <h1 className="text-4xl font-bold " style={{ color: textColor }}>Settings</h1>
              <p className="text-gray-600">Customize your UI components theme and appearance</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 mb-6">
            <button
              onClick={() => setActiveTab('colors')}
              className={`px-6 py-3 rounded-lg font-medium cursor-pointer`}
              style={{
                backgroundColor: activeTab === 'colors' ? primaryColor : '#e2e8f0',
                color: activeTab === 'colors' ? '#fff' : '#111827'
              }}
            >
              <IconPalette size={20} className="inline mr-2" />
              Colors & Themes
            </button>
            <button
              onClick={() => setActiveTab('export')}
              className={`px-6 py-3 rounded-lg font-medium cursor-pointer`}
              style={{
                backgroundColor: activeTab === 'export' ? primaryColor : '#e2e8f0',
                color: activeTab === 'export' ? '#fff' : '#111827'
              }}
            >
              <IconDownload size={20} className="inline mr-2" />
              Export Config
            </button>
          </div>
        </div>

        {activeTab === 'colors' && (
          <div className="space-y-8">
            {/* Quick Theme Selection */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Themes</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {colorThemes.map((theme, index) => (
                  <button
                    key={index}
                    onClick={() => applyTheme(theme)}
                    className="group relative bg-white border-2 border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all hover:shadow-md"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex space-x-1">
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.primary }}
                        ></div>
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.secondary }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{theme.name}</span>
                    </div>
                    
                    {/* Check mark if currently selected */}
                    {tempColors.primary === theme.primary && tempColors.secondary === theme.secondary && tempColors.background === theme.background && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <IconCheck size={12} className="text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Color Controls */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Custom Colors</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Color Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={tempColors.primary}
                        onChange={(e) => handleColorChange('primary', e.target.value)}
                        className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                      />
                      <Input
                        value={tempColors.primary}
                        onChange={(e) => handleColorChange('primary', e.target.value)}
                        placeholder="#6366f1"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={tempColors.secondary}
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                        className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                      />
                      <Input
                        value={tempColors.secondary}
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                        placeholder="#4f46e5"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Icon Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={tempColors.icon}
                        onChange={(e) => handleColorChange('icon', e.target.value)}
                        className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                      />
                      <Input
                        value={tempColors.icon}
                        onChange={(e) => handleColorChange('icon', e.target.value)}
                        placeholder="#e2e8f0"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Text Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={tempColors.text}
                        onChange={(e) => handleColorChange('text', e.target.value)}
                        className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                      />
                      <Input
                        value={tempColors.text}
                        onChange={(e) => handleColorChange('text', e.target.value)}
                        placeholder="#f1f5f9"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Background Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={tempColors.background}
                        onChange={(e) => handleColorChange('background', e.target.value)}
                        className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                      />
                      <Input
                        value={tempColors.background}
                        onChange={(e) => handleColorChange('background', e.target.value)}
                        placeholder="#f8fafc"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Live Preview */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    {/* Miniature navbar preview */}
                    <div 
                      className="w-full h-32 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${tempColors.primary} 0%, ${tempColors.secondary} 100%)`
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <IconColorSwatch size={24} style={{ color: tempColors.icon }} />
                        <span style={{ color: tempColors.text }}>Preview Navigation</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-600">
                      <p><strong>Primary:</strong> {tempColors.primary}</p>
                      <p><strong>Secondary:</strong> {tempColors.secondary}</p>
                      <p><strong>Icon:</strong> {tempColors.icon}</p>
                      <p><strong>Text:</strong> {tempColors.text}</p>
                      <p><strong>Background:</strong> {tempColors.background}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={resetToDefault}
                  className="flex items-center cursor-pointer gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                >
                  <IconRefresh size={18} />
                  Reset to Default
                </button>
                
    
              </div>
            </div>
          </div>
        )}

        {activeTab === 'export' && (
          <div className="space-y-8">
            {/* Export Configuration */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Export Configuration</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Theme Configuration</h3>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b border-gray-700">
                      <span className="text-gray-300 font-medium">Navbar Configuration</span>
                      <button
                        onClick={() => copyToClipboard(generateConfigCode())}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                      >
                        <IconCopy size={16} />
                        {copySuccess || 'Copy'}
                      </button>
                    </div>
                    <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
                      <code>{generateConfigCode()}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">CSS Variables</h3>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b border-gray-700">
                      <span className="text-gray-300 font-medium">CSS Custom Properties</span>
                      <button
                        onClick={() => copyToClipboard(`:root {
  --primary-color: ${tempColors.primary};
  --secondary-color: ${tempColors.secondary};
  --icon-color: ${tempColors.icon};
  --text-color: ${tempColors.text};
  --background-color: ${tempColors.background};
}`)}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                      >
                        <IconCopy size={16} />
                        Copy CSS
                      </button>
                    </div>
                    <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
                      <code>{`:root {
  --primary-color: ${tempColors.primary};
  --secondary-color: ${tempColors.secondary};
  --icon-color: ${tempColors.icon};
  --text-color: ${tempColors.text};
  --background-color: ${tempColors.background};
}`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">JavaScript Object</h3>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b border-gray-700">
                      <span className="text-gray-300 font-medium">Theme Object</span>
                      <button
                        onClick={() => copyToClipboard(`const theme = {
  primary: '${tempColors.primary}',
  secondary: '${tempColors.secondary}',
  icon: '${tempColors.icon}',
  text: '${tempColors.text}',
  background: '${tempColors.background}'
};`)}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                      >
                        <IconCopy size={16} />
                        Copy JS
                      </button>
                    </div>
                    <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
                      <code>{`const theme = {
  primary: '${tempColors.primary}',
  secondary: '${tempColors.secondary}',
  icon: '${tempColors.icon}',
  text: '${tempColors.text}',
  background: '${tempColors.background}'
};`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">💡 Usage Tips</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Save your theme configuration to reuse across different projects</li>
                <li>• Use CSS variables for dynamic theme switching in your application</li>
                <li>• Test your color combinations for accessibility and readability</li>
                <li>• Consider using darker colors for better contrast in navigation elements</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
