import React, { useState } from 'react';
import { 
  IconCode, IconEye, IconCopy, IconBrandReact, IconLayout,
  IconPalette, IconSettings, IconToggleLeft, IconDevices,
  IconComponents, IconTextSize,
  IconUser,
  IconMail,
  IconLock,
  IconPhone
} from '@tabler/icons-react';
import { Navbar, Input } from 'vj-ui-components';

const Examples = ({ theme }) => {
  const [activeExample, setActiveExample] = useState('complete-app');
  const [copySuccess, setCopySuccess] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const completeAppCode = `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Input } from 'vj-ui-components';
import { 
  IconHome, IconChart, IconUsers, IconSettings, 
  IconMail, IconLock, IconUser 
} from '@tabler/icons-react';

// Sample Dashboard Component
const Dashboard = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Users</h3>
        <p className="text-3xl font-bold text-blue-600">1,234</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Revenue</h3>
        <p className="text-3xl font-bold text-green-600">$12,345</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Orders</h3>
        <p className="text-3xl font-bold text-purple-600">567</p>
      </div>
    </div>
  </div>
);

// Sample Form Component
const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>
      <div className="space-y-4">
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          leftIcon={<IconUser size={18} />}
          variant="glassmorphism"
        />
        
        <Input
          label="Email Address"
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
          placeholder="Create a password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          leftIcon={<IconLock size={18} />}
          showPasswordToggle={true}
          variant="glassmorphism"
        />
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Create Account
        </button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const topNavItems = [
    { icon: <IconHome />, text: "Dashboard", path: "/" },
    { icon: <IconChart />, text: "Analytics", path: "/analytics" },
    { icon: <IconUsers />, text: "Users", path: "/users" },
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
          heading="Admin Dashboard"
          topdata={topNavItems}
          bottomdata={bottomNavItems}
          iconColor="#e2e8f0"
          textColor="#f1f5f9"
        />
        <div style={{ marginLeft: "280px", flex: 1, backgroundColor: "#f8fafc" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<div className="p-8"><h1 className="text-3xl font-bold">Analytics</h1></div>} />
            <Route path="/users" element={<UserForm />} />
            <Route path="/settings" element={<div className="p-8"><h1 className="text-3xl font-bold">Settings</h1></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;`;

  const responsiveNavCode = `import React, { useState } from 'react';
import { Navbar } from 'vj-ui-components';
import { IconHome, IconChart, IconUsers, IconSettings, IconToggleLeft } from '@tabler/icons-react';

const ResponsiveApp = () => {
  const [layout, setLayout] = useState('side');
  
  const navItems = [
    { icon: <IconHome />, text: "Home", path: "/" },
    { icon: <IconChart />, text: "Analytics", path: "/analytics" },
    { icon: <IconUsers />, text: "Users", path: "/users" },
  ];

  const bottomItems = [
    { icon: <IconSettings />, text: "Settings", path: "/settings" },
  ];

  const toggleLayout = () => {
    setLayout(layout === 'side' ? 'top' : 'side');
  };

  return (
    <div>
      {/* Layout Toggle Button */}
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 1000,
        marginLeft: layout === 'side' ? '280px' : '0px'
      }}>
        <button
          onClick={toggleLayout}
          className="bg-white shadow-lg px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <IconToggleLeft size={20} />
          Switch to {layout === 'side' ? 'Top' : 'Side'} Layout
        </button>
      </div>

      {/* Responsive Navbar */}
      <Navbar
        layout={layout}
        primaryColor="#3b82f6"
        secondaryColor="#1d4ed8"
        heading="Responsive App"
        topdata={navItems}
        bottomdata={bottomItems}
        iconColor="white"
        textColor="white"
        position="fixed"
      />

      {/* Main Content */}
      <div style={{
        marginLeft: layout === 'side' ? '280px' : '0',
        marginTop: layout === 'top' ? '70px' : '0',
        padding: '2rem',
        minHeight: '100vh',
        backgroundColor: '#f9fafb'
      }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Responsive Navigation Demo
          </h1>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Current Layout: {layout}</h2>
            <p className="text-gray-600 mb-4">
              Try switching between sidebar and top navigation layouts using the toggle button.
              The content area automatically adjusts to accommodate the navigation style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900">Sidebar Layout</h3>
                <p className="text-blue-700 text-sm">
                  Traditional left sidebar with collapsible functionality
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900">Top Layout</h3>
                <p className="text-green-700 text-sm">
                  Horizontal navigation with mobile responsiveness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveApp;`;

  const formExampleCode = `import React, { useState } from 'react';
import { Input } from 'vj-ui-components';
import { 
  IconUser, IconMail, IconLock, IconPhone, IconCalendar,
  IconMapPin, IconBuilding, IconCheck, IconAlertCircle
} from '@tabler/icons-react';

const AdvancedForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthDate: '',
    address: '',
    company: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateField = (field) => {
    const value = formData[field];
    let error = '';

    switch (field) {
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Invalid email format';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 8) error = 'Password must be at least 8 characters';
        break;
      case 'confirmPassword':
        if (!value) error = 'Please confirm your password';
        else if (value !== formData.password) error = 'Passwords do not match';
        break;
      case 'firstName':
      case 'lastName':
        if (!value) error = \`\${field === 'firstName' ? 'First' : 'Last'} name is required\`;
        break;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };

  const isFieldValid = (field) => {
    return touched[field] && !errors[field] && formData[field];
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Create Your Account
        </h1>
        
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              onBlur={() => handleBlur('firstName')}
              leftIcon={<IconUser size={18} />}
              error={touched.firstName && errors.firstName}
              success={isFieldValid('firstName')}
              variant="glassmorphism"
              required
            />
            
            <Input
              label="Last Name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              onBlur={() => handleBlur('lastName')}
              leftIcon={<IconUser size={18} />}
              error={touched.lastName && errors.lastName}
              success={isFieldValid('lastName')}
              variant="glassmorphism"
              required
            />
          </div>

          {/* Email */}
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            leftIcon={<IconMail size={18} />}
            error={touched.email && errors.email}
            success={isFieldValid('email')}
            variant="glassmorphism"
            required
          />

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              onBlur={() => handleBlur('password')}
              leftIcon={<IconLock size={18} />}
              showPasswordToggle={true}
              error={touched.password && errors.password}
              success={isFieldValid('password')}
              variant="glassmorphism"
              helperText="At least 8 characters"
              required
            />
            
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              onBlur={() => handleBlur('confirmPassword')}
              leftIcon={<IconLock size={18} />}
              showPasswordToggle={true}
              error={touched.confirmPassword && errors.confirmPassword}
              success={isFieldValid('confirmPassword')}
              variant="glassmorphism"
              required
            />
          </div>

          {/* Phone and Birth Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              leftContent={
                <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                  +1
                </div>
              }
              rightIcon={<IconPhone size={18} />}
              variant="glassmorphism"
            />
            
            <Input
              label="Birth Date"
              type="date"
              value={formData.birthDate}
              onChange={(e) => handleChange('birthDate', e.target.value)}
              leftIcon={<IconCalendar size={18} />}
              variant="glassmorphism"
            />
          </div>

          {/* Address and Company */}
          <Input
            label="Address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            leftIcon={<IconMapPin size={18} />}
            variant="glassmorphism"
          />

          <Input
            label="Company (Optional)"
            placeholder="Your company name"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            leftIcon={<IconBuilding size={18} />}
            variant="glassmorphism"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvancedForm;`;

  const examples = [
    {
      id: 'complete-app',
      title: 'Complete Application',
      description: 'Full example with navigation, routing, and forms',
      icon: <IconBrandReact size={24} />,
      code: completeAppCode
    },
    {
      id: 'responsive-nav',
      title: 'Responsive Navigation',
      description: 'Layout switching between sidebar and top navigation',
      icon: <IconLayout size={24} />,
      code: responsiveNavCode
    },
    {
      id: 'advanced-form',
      title: 'Advanced Form',
      description: 'Complex form with validation and multiple input types',
      icon: <IconTextSize size={24} />,
      code: formExampleCode
    }
  ];

  const currentExample = examples.find(ex => ex.id === activeExample);

  return (
    <div 
      className="h-screen overflow-y-auto w-full bg-gray-50 p-8"
      style={{ backgroundColor: theme?.backgroundColor || '#f9fafb' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
              <IconCode size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Examples</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore real-world examples and see VJ UI Components in action. 
            Copy the code and customize it for your own projects.
          </p>
        </div>

        {/* Example Selection */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example) => (
              <button
                key={example.id}
                onClick={() => setActiveExample(example.id)}
                className={`p-6 rounded-xl text-left transition-all ${
                  activeExample === example.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-gray-50 text-gray-900 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="mb-4">
                  {React.cloneElement(example.icon, {
                    className: activeExample === example.id ? 'text-white' : 'text-blue-600'
                  })}
                </div>
                <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
                <p className={`text-sm ${
                  activeExample === example.id ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {example.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Example Preview and Code */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Preview */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex items-center gap-3">
                <IconEye size={20} className="text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
              </div>
            </div>
            <div className="p-6">
              {activeExample === 'complete-app' && (
                <div className="space-y-6">
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="font-medium mb-2">Dashboard Preview</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="text-xs text-gray-600">Users</div>
                        <div className="text-lg font-bold text-blue-600">1,234</div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="text-xs text-gray-600">Revenue</div>
                        <div className="text-lg font-bold text-green-600">$12K</div>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="text-xs text-gray-600">Orders</div>
                        <div className="text-lg font-bold text-purple-600">567</div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="font-medium mb-3">Form Preview</h4>
                    <div className="space-y-3">
                      <Input
                        placeholder="Full Name"
                        leftIcon={<IconUser size={16} />}
                        variant="glassmorphism"
                        size="sm"
                      />
                      <Input
                        placeholder="Email Address"
                        leftIcon={<IconMail size={16} />}
                        variant="glassmorphism"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeExample === 'responsive-nav' && (
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-blue-50">
                    <h4 className="font-medium text-blue-900 mb-2">Layout Toggle Demo</h4>
                    <p className="text-blue-700 text-sm mb-3">
                      Switch between sidebar and top navigation layouts
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      <IconToggleLeft size={16} className="inline mr-2" />
                      Toggle Layout
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border rounded p-3 bg-gray-50">
                      <div className="text-xs font-medium text-gray-600 mb-1">Sidebar</div>
                      <div className="text-xs text-gray-500">Traditional left navigation</div>
                    </div>
                    <div className="border rounded p-3 bg-gray-50">
                      <div className="text-xs font-medium text-gray-600 mb-1">Top Nav</div>
                      <div className="text-xs text-gray-500">Horizontal navigation</div>
                    </div>
                  </div>
                </div>
              )}

              {activeExample === 'advanced-form' && (
                <div className="space-y-4">
                  <h4 className="font-medium mb-3">Advanced Form Features</h4>
                  <div className="space-y-3">
                    <Input
                      label="Email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      leftIcon={<IconMail size={16} />}
                      variant="glassmorphism"
                      size="sm"
                      success={formData.email.includes('@')}
                    />
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      leftIcon={<IconLock size={16} />}
                      showPasswordToggle={true}
                      variant="glassmorphism"
                      size="sm"
                    />
                    <Input
                      label="Phone"
                      placeholder="Phone number"
                      leftContent={<span className="text-xs bg-gray-100 px-2 py-1 rounded">+1</span>}
                      rightIcon={<IconPhone size={16} />}
                      variant="glassmorphism"
                      size="sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Code */}
          <div className="bg-gray-900 rounded-xl shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <IconCode size={20} className="text-gray-400" />
                <h3 className="text-lg font-semibold text-white">{currentExample?.title}</h3>
              </div>
              <button
                onClick={() => copyToClipboard(currentExample?.code || '')}
                className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
              >
                <IconCopy size={16} />
                {copySuccess || 'Copy Code'}
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <pre className="p-4 text-gray-300 text-sm">
                <code>{currentExample?.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                <IconComponents size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Modular Design</h3>
              <p className="text-gray-600 text-sm">Mix and match components as needed</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                <IconDevices size={24} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Responsive</h3>
              <p className="text-gray-600 text-sm">Works perfectly on all devices</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                <IconPalette size={24} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">Extensive theming and styling options</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="p-3 bg-orange-100 rounded-lg w-fit mx-auto mb-4">
                <IconSettings size={24} className="text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Setup</h3>
              <p className="text-gray-600 text-sm">Quick installation and configuration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
