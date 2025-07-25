import React, { useState } from 'react';
import { 
  IconTextSize, IconEye, IconEyeOff, IconMail, IconLock, 
  IconUser, IconSearch, IconPhone, IconCopy, IconPalette,
  IconCheck, IconX, IconAlertCircle, IconInfoCircle
} from '@tabler/icons-react';
import { Input } from 'vj-ui-components';

const InputDocs = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [copySuccess, setCopySuccess] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    search: ''
  });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const basicCode = `import React, { useState } from 'react';
import { Input } from '@vjnav/ui-components';
import { IconUser, IconMail, IconLock } from '@tabler/icons-react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  return (
    <div>
      <Input
        label="Username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
        leftIcon={<IconUser size={18} />}
        required
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        leftIcon={<IconMail size={18} />}
        variant="glassmorphism"
      />
      
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        leftIcon={<IconLock size={18} />}
        showPasswordToggle={true}
        variant="glassmorphism"
      />
    </div>
  );
};`;

  const variantsCode = `// Different styling variants
<Input placeholder="Default variant" variant="default" />
<Input placeholder="Filled variant" variant="filled" />
<Input placeholder="Outlined variant" variant="outlined" />
<Input placeholder="Glassmorphism variant" variant="glassmorphism" />

// Different sizes
<Input placeholder="Small" size="sm" />
<Input placeholder="Medium" size="md" />
<Input placeholder="Large" size="lg" />`;

  const customContentCode = `import { IconSearch, IconPhone } from '@tabler/icons-react';

// Search with keyboard shortcut
<Input
  placeholder="Search..."
  leftIcon={<IconSearch size={18} />}
  rightContent={
    <span style={{
      padding: '2px 6px',
      background: '#3b82f6',
      color: 'white',
      borderRadius: '4px',
      fontSize: '0.75rem'
    }}>⌘K</span>
  }
/>

// Phone with country code
<Input
  label="Phone Number"
  type="tel"
  placeholder="Your phone number"
  leftContent={
    <div style={{
      padding: '4px 8px',
      background: '#f3f4f6',
      borderRadius: '4px',
      fontSize: '0.875rem'
    }}>+1</div>
  }
  rightIcon={<IconPhone size={18} />}
/>`;

  const statesCode = `// Success state
<Input
  label="Valid Email"
  value="user@example.com"
  success={true}
  helperText="Perfect! This email is valid."
/>

// Error state
<Input
  label="Required Field"
  error="This field is required"
  placeholder="Enter something..."
/>

// Disabled state
<Input
  label="Disabled"
  disabled={true}
  value="Cannot edit"
/>`;

  const features = [
    {
      icon: <IconPalette size={24} />,
      title: "Multiple Variants",
      description: "Default, filled, outlined, and glassmorphism styles"
    },
    {
      icon: <IconTextSize size={24} />,
      title: "Size Options",
      description: "Small, medium, and large size variants"
    },
    {
      icon: <IconEye size={24} />,
      title: "Password Toggle",
      description: "Built-in show/hide password functionality"
    },
    {
      icon: <IconCheck size={24} />,
      title: "Validation States",
      description: "Error, success, and helper text support"
    }
  ];

  const props = [
    { name: 'type', type: 'string', default: "'text'", description: 'HTML input type (text, email, password, etc.)' },
    { name: 'placeholder', type: 'string', default: "''", description: 'Placeholder text' },
    { name: 'value', type: 'string', default: '-', description: 'Controlled input value' },
    { name: 'onChange', type: 'function', default: '-', description: 'Change event handler' },
    { name: 'onFocus', type: 'function', default: '-', description: 'Focus event handler' },
    { name: 'onBlur', type: 'function', default: '-', description: 'Blur event handler' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the input' },
    { name: 'error', type: 'boolean | string', default: 'false', description: 'Error state or error message' },
    { name: 'success', type: 'boolean', default: 'false', description: 'Success state styling' },
    { name: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { name: 'label', type: 'string', default: '-', description: 'Input label text' },
    { name: 'helperText', type: 'string', default: '-', description: 'Helper text below input' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Input size variant' },
    { name: 'variant', type: "'default' | 'filled' | 'outlined' | 'glassmorphism'", default: "'default'", description: 'Styling variant' },
    { name: 'leftIcon', type: 'ReactNode', default: '-', description: 'Icon on the left side' },
    { name: 'rightIcon', type: 'ReactNode', default: '-', description: 'Icon on the right side' },
    { name: 'leftContent', type: 'ReactNode', default: '-', description: 'Custom content on the left' },
    { name: 'rightContent', type: 'ReactNode', default: '-', description: 'Custom content on the right' },
    { name: 'showPasswordToggle', type: 'boolean', default: 'false', description: 'Show password visibility toggle' },
    { name: 'primaryColor', type: 'string', default: "'#2563eb'", description: 'Primary theme color' },
    { name: 'backgroundColor', type: 'string', default: "'rgba(255, 255, 255, 0.1)'", description: 'Background color' },
    { name: 'textColor', type: 'string', default: "'#1f2937'", description: 'Text color' },
    { name: 'borderColor', type: 'string', default: "'rgba(255, 255, 255, 0.2)'", description: 'Border color' },
    { name: 'focusBorderColor', type: 'string', default: "'#3b82f6'", description: 'Focus border color' },
    { name: 'errorColor', type: 'string', default: "'#ef4444'", description: 'Error state color' },
    { name: 'successColor', type: 'string', default: "'#10b981'", description: 'Success state color' },
    { name: 'iconColor', type: 'string', default: "'#6b7280'", description: 'Icon color' },
    { name: 'borderRadius', type: 'string', default: "'12px'", description: 'Border radius' },
    { name: 'className', type: 'string', default: "''", description: 'Additional CSS classes' }
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
            <div className="p-3 bg-purple-100 rounded-lg">
              <IconTextSize size={32} className="text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold " style={{ color: theme?.textColor || '#111827' }}>Input Component</h1>
              <p style={{ color: theme?.iconColor || '#111827' }}>Feature-rich input with extensive customization</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold  mb-6" style={{ color: theme?.textColor || '#111827' }}>Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-purple-600 mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>Live Examples</h2>

          {/* Basic Inputs */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Basic Usage</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  label="Username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  leftIcon={<IconUser size={18} />}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  leftIcon={<IconMail size={18} />}
                  variant="outlined"
                />
                
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  leftIcon={<IconLock size={18} />}
                  showPasswordToggle={true}
                  variant="glassmorphism"
                />
              </div>
              
              <div className="space-y-4">
                <Input
                  placeholder="Search..."
                  value={formData.search}
                  onChange={(e) => setFormData({...formData, search: e.target.value})}
                  leftIcon={<IconSearch size={18} />}
                  rightContent={
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      ⌘K
                    </span>
                  }
                />
                
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  leftContent={
                    <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      +1
                    </div>
                  }
                  rightIcon={<IconPhone size={18} />}
                />
                
                <Input
                  label="Success State"
                  value="user@example.com"
                  success={true}
                  helperText="Perfect! This email is valid."
                  leftIcon={<IconMail size={18} />}
                />
              </div>
            </div>
          </div>

          {/* Variants */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Variants</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input placeholder="Default variant" variant="default" />
                <Input placeholder="Filled variant" variant="filled" />
              </div>
              <div className="space-y-4">
                <Input placeholder="Outlined variant" variant="outlined" />
                <Input placeholder="Glassmorphism variant" variant="glassmorphism" />
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Sizes</h3>
            <div className="space-y-4">
              <Input placeholder="Small size" size="sm" leftIcon={<IconUser size={16} />} />
              <Input placeholder="Medium size (default)" size="md" leftIcon={<IconUser size={18} />} />
              <Input placeholder="Large size" size="lg" leftIcon={<IconUser size={20} />} />
            </div>
          </div>

          {/* States */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">States</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  label="Error State"
                  error="This field is required"
                  placeholder="Enter something..."
                  leftIcon={<IconAlertCircle size={18} />}
                />
                
                <Input
                  label="Success State"
                  success={true}
                  helperText="All good!"
                  value="Valid input"
                  leftIcon={<IconCheck size={18} />}
                />
              </div>
              <div className="space-y-4">
                <Input
                  label="Disabled State"
                  disabled={true}
                  value="Cannot edit this"
                  leftIcon={<IconX size={18} />}
                />
                
                <Input
                  label="With Helper Text"
                  helperText="This is some helpful information"
                  placeholder="Enter your data"
                  leftIcon={<IconInfoCircle size={18} />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>Code Examples</h2>

          <div className="mb-6">
            <div className="flex space-x-1 mb-4">
              <button
                onClick={() => setActiveTab('basic')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'basic'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Basic Usage
              </button>
              <button
                onClick={() => setActiveTab('variants')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'variants'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Variants & Sizes
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'custom'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Custom Content
              </button>
              <button
                onClick={() => setActiveTab('states')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'states'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                States
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <span className="text-gray-300 font-medium">
                  {activeTab === 'basic' ? 'Basic Input Usage' : 
                   activeTab === 'variants' ? 'Variants and Sizes' : 
                   activeTab === 'custom' ? 'Custom Content Examples' :
                   'Input States'}
                </span>
                <button
                  onClick={() => copyToClipboard(
                    activeTab === 'basic' ? basicCode : 
                    activeTab === 'variants' ? variantsCode : 
                    activeTab === 'custom' ? customContentCode :
                    statesCode
                  )}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                >
                  <IconCopy size={16} />
                  {copySuccess || 'Copy'}
                </button>
              </div>
              <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
                <code>
                  {activeTab === 'basic' ? basicCode : 
                   activeTab === 'variants' ? variantsCode : 
                   activeTab === 'custom' ? customContentCode :
                   statesCode}
                </code>
              </pre>
            </div>
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

        {/* Best Practices */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: theme?.textColor || '#111827' }}>Best Practices</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Use appropriate input types for better UX</li>
                <li>• Provide clear labels and helper text</li>
                <li>• Use icons to improve visual hierarchy</li>
                <li>• Validate inputs and show clear error messages</li>
                <li>• Make required fields obvious to users</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Use vague placeholder text as labels</li>
                <li>• Overwhelm with too many visual elements</li>
                <li>• Hide important validation messages</li>
                <li>• Use inconsistent sizing across forms</li>
                <li>• Forget about keyboard accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDocs;
