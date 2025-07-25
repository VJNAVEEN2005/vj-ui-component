import React, { useState } from 'react';
import { 
  IconNavigation, IconToggleLeft, IconToggleRight, IconMenu2,
  IconChevronDown, IconChevronRight, IconEye, IconCopy,
  IconHome, IconSettings, IconUser, IconDatabase
} from '@tabler/icons-react';

const NavbarDocs = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('sidebar');
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const sidebarCode = `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@vjnav/ui-components';
import { IconHome, IconSettings, IconChart } from '@tabler/icons-react';

const App = () => {
  const topNavItems = [
    { icon: <IconHome />, text: "Dashboard", path: "/" },
    { 
      icon: <IconChart />, 
      text: "Analytics", 
      path: "/analytics",
      children: [
        { icon: <IconChart />, text: "Overview", path: "/analytics/overview" },
        { icon: <IconChart />, text: "Reports", path: "/analytics/reports" },
      ]
    },
  ];

  const bottomNavItems = [
    { icon: <IconSettings />, text: "Settings", path: "/settings" },
  ];

  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh" }}>
        <Navbar
          layout="side"
          primaryColor="#6366f1"
          secondaryColor="#4f46e5"
          heading="My App"
          topdata={topNavItems}
          bottomdata={bottomNavItems}
          iconColor="#e2e8f0"
          textColor="#f1f5f9"
        />
        <div style={{ marginLeft: "280px", padding: "2rem", flex: 1 }}>
          <Routes>
            <Route path="/" element={<div>Dashboard</div>} />
            <Route path="/analytics" element={<div>Analytics</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};`;

  const topNavCode = `return (
  <BrowserRouter>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar
        layout="top"
        primaryColor="#6366f1"
        secondaryColor="#4f46e5"
        heading="My App"
        topdata={topNavItems}
        bottomdata={bottomNavItems}
        iconColor="#e2e8f0"
        textColor="#f1f5f9"
        topbarHeight="70px"
        position="fixed"
      />
      <div style={{ marginTop: "70px", padding: "2rem", flex: 1 }}>
        <Routes>
          {/* Your routes */}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);`;

  const dynamicLayoutCode = `const [layout, setLayout] = useState('side');

const toggleLayout = () => {
  setLayout(layout === 'side' ? 'top' : 'side');
};

return (
  <div>
    <button onClick={toggleLayout}>
      Switch to {layout === 'side' ? 'Top' : 'Side'} Layout
    </button>
    <Navbar layout={layout} {/* other props */} />
  </div>
);`;

  const features = [
    {
      icon: <IconToggleLeft size={24} />,
      title: "Dual Layout Support",
      description: "Switch between sidebar and top navigation layouts"
    },
    {
      icon: <IconMenu2 size={24} />,
      title: "Mobile Responsive",
      description: "Automatic mobile menu for top layout"
    },
    {
      icon: <IconEye size={24} />,
      title: "Glassmorphism Design",
      description: "Modern frosted glass effect with backdrop blur"
    },
    {
      icon: <IconChevronDown size={24} />,
      title: "Dropdown Support",
      description: "Nested navigation with smooth animations"
    }
  ];

  const props = [
    { name: 'layout', type: "'side' | 'top'", default: "'side'", description: 'Navigation layout type' },
    { name: 'position', type: "'fixed' | 'sticky' | 'relative'", default: "'fixed'", description: 'CSS position for the navbar' },
    { name: 'primaryColor', type: 'string', default: '"#2563eb"', description: 'Primary gradient color' },
    { name: 'secondaryColor', type: 'string', default: '"#1e40af"', description: 'Secondary gradient color' },
    { name: 'heading', type: 'string', default: 'undefined', description: 'Header text in the navbar' },
    { name: 'topdata', type: 'NavItem[]', default: '[]', description: 'Top/main navigation items' },
    { name: 'bottomdata', type: 'NavItem[]', default: '[]', description: 'Bottom navigation items' },
    { name: 'iconColor', type: 'string', default: '"white"', description: 'Color for icons' },
    { name: 'textColor', type: 'string', default: '"white"', description: 'Color for text' },
    { name: 'showToggleButton', type: 'boolean', default: 'true', description: 'Show collapse toggle (sidebar only)' },
    { name: 'showBranding', type: 'boolean', default: 'true', description: 'Show heading/branding' },
    { name: 'sidebarWidth', type: 'string', default: '"280px"', description: 'Width of expanded sidebar' },
    { name: 'collapsedWidth', type: 'string', default: '"80px"', description: 'Width of collapsed sidebar' },
    { name: 'topbarHeight', type: 'string', default: '"70px"', description: 'Height of top navigation bar' },
    { name: 'className', type: 'string', default: '""', description: 'Additional CSS classes' }
  ];

  return (
    <div 
      className="h-screen overflow-y-auto w-full bg-gray-50 p-8"
      style={{ backgroundColor: theme?.backgroundColor || '#f9fafb' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <IconNavigation size={32} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold " style={{ color: theme?.textColor || '#111827' }}>Navbar Component</h1>
              <p style={{ color: theme?.iconColor || '#111827' }}>Versatile navigation with dual layout support</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold  mb-6" style={{ color: theme?.textColor || '#111827' }}>Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-blue-600 mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>Usage Examples</h2>

          <div className="mb-6">
            <div className="flex space-x-1 mb-4">
              <button
                onClick={() => setActiveTab('sidebar')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'sidebar'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Sidebar Layout
              </button>
              <button
                onClick={() => setActiveTab('top')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'top'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Top Navigation
              </button>
              <button
                onClick={() => setActiveTab('dynamic')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'dynamic'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Dynamic Layout
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <span className="text-gray-300 font-medium">
                  {activeTab === 'sidebar' ? 'Sidebar Layout Example' : 
                   activeTab === 'top' ? 'Top Navigation Example' : 
                   'Dynamic Layout Switching'}
                </span>
                <button
                  onClick={() => copyToClipboard(
                    activeTab === 'sidebar' ? sidebarCode : 
                    activeTab === 'top' ? topNavCode : 
                    dynamicLayoutCode
                  )}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                >
                  <IconCopy size={16} />
                  {copySuccess || 'Copy'}
                </button>
              </div>
              <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
                <code>
                  {activeTab === 'sidebar' ? sidebarCode : 
                   activeTab === 'top' ? topNavCode : 
                   dynamicLayoutCode}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* NavItem Interface */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>NavItem Interface</h2>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <span className="text-gray-300 font-medium">TypeScript Interface</span>
              <button
                onClick={() => copyToClipboard(`interface NavItem {
  icon: ReactNode;
  text: string;
  path: string;
  children?: NavItem[];
}`)}
                className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
              >
                <IconCopy size={16} />
                Copy
              </button>
            </div>
            <pre className="p-4 text-gray-300 text-sm">
              <code>{`interface NavItem {
  icon: ReactNode;
  text: string;
  path: string;
  children?: NavItem[];
}`}</code>
            </pre>
          </div>
        </div>

        {/* Props Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>Props</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {props.map((prop, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <code className="text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                          {prop.name}
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {prop.type}
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {prop.default}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {prop.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Live Preview Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>Live Preview</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-4">
              <p className="text-gray-600 mb-4">
                The navbar you're currently seeing is a live example of the sidebar layout. 
                You can see how it integrates with your application and provides smooth navigation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Sidebar Layout
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Glassmorphism
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Responsive
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>Best Practices</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Use consistent icon styling across navigation items</li>
                <li>• Keep navigation text concise and descriptive</li>
                <li>• Test both layouts on mobile devices</li>
                <li>• Use semantic route paths for better accessibility</li>
                <li>• Limit dropdown nesting to 1-2 levels maximum</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Overload the navigation with too many items</li>
                <li>• Use unclear or generic navigation labels</li>
                <li>• Forget to test dropdown functionality</li>
                <li>• Ignore mobile responsiveness requirements</li>
                <li>• Mix different icon styles or sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDocs;
