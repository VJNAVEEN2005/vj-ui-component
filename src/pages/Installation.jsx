import React, { useState } from 'react';
import { 
  IconDownload, IconBrandNpm, IconTerminal, IconCode, 
  IconPackage, IconCheck, IconArrowRight, IconBrandReact,
  IconCopy, IconExternalLink, IconBook
} from '@tabler/icons-react';

const Installation = ({ theme }) => {
  const [copySuccess, setCopySuccess] = useState('');
  const [activeStep, setActiveStep] = useState(1);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const installationSteps = [
    {
      title: "Install the Package",
      description: "Install the main UI components package via npm",
      command: "npm install vj-ui-components",
      code: `# Using npm
npm install vj-ui-components

# Using yarn
yarn add vj-ui-components

# Using pnpm
pnpm add vj-ui-components`
    },
    {
      title: "Install Peer Dependencies",
      description: "Install required peer dependencies for full functionality",
      command: "npm install react react-dom react-router-dom @tabler/icons-react",
      code: `# Install all peer dependencies
npm install react react-dom react-router-dom @tabler/icons-react

# Or install individually
npm install react@^18.0.0
npm install react-dom@^18.0.0
npm install react-router-dom@^6.0.0
npm install @tabler/icons-react@^3.0.0`
    },
    {
      title: "Import and Use",
      description: "Start using the components in your React application",
      command: "import { Navbar, Input } from 'vj-ui-components';",
      code: `import React from 'react';
import { Navbar, Input } from 'vj-ui-components';
import { IconHome, IconSettings } from '@tabler/icons-react';

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
      {/* Your app content */}
    </div>
  );
}`
    }
  ];

  const requirements = [
    { name: "React", version: "18.0.0+", required: true, description: "Core React library" },
    { name: "React DOM", version: "18.0.0+", required: true, description: "React DOM renderer" },
    { name: "React Router DOM", version: "6.0.0+", required: true, description: "Client-side routing" },
    { name: "Tabler Icons React", version: "3.0.0+", required: true, description: "Icon library" },
    { name: "TypeScript", version: "4.5.0+", required: false, description: "Type definitions included" }
  ];

  const troubleshooting = [
    {
      problem: "Peer dependency warnings",
      solution: "Install the required peer dependencies listed above",
      code: "npm install react react-dom react-router-dom @tabler/icons-react"
    },
    {
      problem: "TypeScript errors",
      solution: "Make sure you have compatible TypeScript version and proper type definitions",
      code: "npm install --save-dev typescript@^4.5.0 @types/react @types/react-dom"
    },
    {
      problem: "Import errors",
      solution: "Ensure you're importing components correctly from the package",
      code: "import { Navbar, Input } from 'vj-ui-components';"
    },
    {
      problem: "Routing issues",
      solution: "Wrap your app with BrowserRouter from react-router-dom",
      code: `import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Your components */}
    </BrowserRouter>
  );
}`
    }
  ];

  return (
    <div 
      className="h-screen overflow-y-auto w-full bg-gray-50 p-8" 
      style={{ backgroundColor: theme?.backgroundColor || '#f9fafb' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <IconDownload size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: theme?.textColor || '#111827' }}>Installation Guide</h1>
          <p className="text-xl" style={{ color: theme?.textColor || '#111827' }}>
            Get started with VJ UI Components in your React application. 
            Follow these simple steps to install and configure the library.
          </p>
        </div>

        {/* Quick Start */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="bg-black bg-opacity-20 rounded-lg p-4 mb-4">
            <code className="text-lg">npm install vj-ui-components</code>
            <button
              onClick={() => copyToClipboard('npm install vj-ui-components')}
              className="ml-4 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors"
            >
              <IconCopy size={16} />
            </button>
          </div>
          <p className="text-blue-100">
            Then install peer dependencies and start building amazing UIs!
          </p>
        </div>

        {/* Installation Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: theme?.textColor || '#111827' }}>Installation Steps</h2>

          <div className="space-y-6">
            {installationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      activeStep >= index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {activeStep > index + 1 ? <IconCheck size={18} /> : index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b border-gray-700">
                      <span className="text-gray-300 font-medium">Terminal</span>
                      <button
                        onClick={() => copyToClipboard(step.code)}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                      >
                        <IconCopy size={16} />
                        {copySuccess || 'Copy'}
                      </button>
                    </div>
                    <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                  
                  <button
                    onClick={() => setActiveStep(Math.max(activeStep, index + 2))}
                    className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {index < installationSteps.length - 1 ? 'Mark Complete' : 'Finish Setup'}
                    <IconArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: theme?.textColor || '#111827' }}>Requirements</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requirements.map((req, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <IconPackage size={16} className="text-gray-400" />
                          <code className="text-sm font-medium text-gray-900">{req.name}</code>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {req.version}
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          req.required 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {req.required ? 'Required' : 'Optional'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {req.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Package.json Example */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>Package.json Example</h2>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <span className="text-gray-300 font-medium">package.json</span>
              <button
                onClick={() => copyToClipboard(`{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0",
    "@tabler/icons-react": "^3.0.0",
    "vj-ui-components": "^2.2.0"
  }
}`)}
                className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
              >
                <IconCopy size={16} />
                Copy
              </button>
            </div>
            <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
              <code>{`{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0", 
    "react-router-dom": "^6.0.0",
    "@tabler/icons-react": "^3.0.0",
    "vj-ui-components": "^2.2.0"
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: theme?.textColor || '#111827' }}>Troubleshooting</h2>
          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <IconTerminal size={20} className="text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.problem}</h3>
                    <p className="text-gray-600 mb-4">{item.solution}</p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm">{item.code}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎉 Installation Complete!</h2>
          <p className="text-gray-600 mb-6">
            You're all set! Now you can start building beautiful user interfaces with VJ UI Components.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <IconBook size={20} />
              View Navbar Docs
            </button>
            <button className="bg-white border border-blue-300 hover:border-blue-400 text-blue-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <IconCode size={20} />
              View Input Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
