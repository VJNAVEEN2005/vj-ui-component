import React, { useState } from 'react';
import { 
  IconSearch, IconEye, IconCopy, IconDownload, IconCheck,
  IconUser, IconFile, IconFolder, IconMail, IconSettings,
   IconHome, IconBrandReact, IconBrandJavascript,
  IconBrandTypescript, IconBrandPython, IconDatabase,
  IconCloud, IconDeviceMobile, IconCode,
  IconChartArea
} from '@tabler/icons-react';
import { Search } from 'vj-ui-components';

const SearchDocs = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [copySuccess, setCopySuccess] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to determine if a color is light or dark
  const isLightColor = (color) => {
    if (!color) return true;
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5;
  };

  const isLight = isLightColor(theme?.backgroundColor);
  const primaryTextColor = isLight ? '#111827' : '#f1f5f9';
  const secondaryTextColor = isLight ? '#4b5563' : '#cbd5e1';

  // Sample data for search examples
  const suggestions = [
    {
      title: "User Profile Settings",
      description: "Manage your account settings and preferences",
      category: "Settings",
      metadata: { type: "page", icon: <IconUser size={16} /> }
    },
    {
      title: "Dashboard Analytics",
      description: "View detailed analytics and reports",
      category: "Analytics",
      metadata: { type: "page", icon: <IconChartArea size={16} /> }
    },
    {
      title: "File Manager",
      description: "Browse and manage your files",
      category: "Tools",
      metadata: { type: "app", icon: <IconFile size={16} /> }
    },
    {
      title: "Email Templates",
      description: "Create and manage email templates",
      category: "Communication",
      metadata: { type: "feature", icon: <IconMail size={16} /> }
    },
    {
      title: "React Components",
      description: "Browse available React components",
      category: "Development",
      metadata: { type: "documentation", icon: <IconBrandReact size={16} /> }
    }
  ];

  const recentSearches = [
    "user settings",
    "dashboard",
    "analytics report",
    "file upload",
    "email template"
  ];

  const trendingSearches = [
    {
      title: "React Hooks",
      description: "Most searched this week",
      metadata: { icon: <IconBrandReact size={16} /> }
    },
    {
      title: "API Integration",
      description: "Popular development topic",
      metadata: { icon: <IconCloud size={16} /> }
    },
    {
      title: "Mobile Design",
      description: "Trending UI topic",
      metadata: { icon: <IconDeviceMobile size={16} /> }
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const handleSearch = (searchTerm) => {
    const results = suggestions.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelect = (item) => {
    console.log('Selected:', item);
  };

  const basicUsageCode = `import React, { useState } from 'react';
import { Search } from 'vj-ui-components';
import { IconSearch } from '@tabler/icons-react';

const MyComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  
  const suggestions = [
    "User Profile",
    "Dashboard",
    "Settings",
    "Analytics",
    "Reports"
  ];

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
  };

  const handleSelect = (item) => {
    console.log('Selected:', item);
  };

  return (
    <Search
      placeholder="Search anything..."
      value={searchValue}
      onChange={setSearchValue}
      onSearch={handleSearch}
      onSelect={handleSelect}
      suggestions={suggestions}
      variant="default"
    />
  );
};`;

  const advancedUsageCode = `import React, { useState } from 'react';
import { Search } from 'vj-ui-components';
import { IconSearch, IconUser, IconChart } from '@tabler/icons-react';

const AdvancedSearchExample = () => {
  const suggestions = [
    {
      title: "User Profile Settings",
      description: "Manage your account settings",
      category: "Settings",
      metadata: { type: "page", icon: <IconUser size={16} /> }
    },
    {
      title: "Dashboard Analytics", 
      description: "View detailed analytics",
      category: "Analytics",
      metadata: { type: "page", icon: <IconChart size={16} /> }
    }
  ];

  const recentSearches = ["user settings", "dashboard", "analytics"];
  
  const trendingSearches = [
    {
      title: "React Hooks",
      description: "Most searched this week",
      metadata: { icon: <IconSearch size={16} /> }
    }
  ];

  return (
    <Search
      placeholder="Search with smart suggestions..."
      suggestions={suggestions}
      recentSearches={recentSearches}
      trendingSearches={trendingSearches}
      variant="glassmorphism"
      primaryColor="#6366f1"
      backgroundColor="rgba(99, 102, 241, 0.1)"
      showRecentSearches={true}
      showTrendingSearches={true}
      maxResults={6}
      debounceMs={200}
      leftIcon={<IconSearch size={20} />}
    />
  );
};`;

  const stylingCode = `// Custom styling example
<Search
  placeholder="Custom styled search..."
  suggestions={suggestions}
  variant="glassmorphism"
  primaryColor="#8b5cf6"
  backgroundColor="rgba(139, 92, 246, 0.1)"
  focusBorderColor="#8b5cf6"
  borderRadius="16px"
  size="lg"
  leftIcon={<IconSearch size={20} />}
  clearOnSelect={true}
  debounceMs={300}
  maxResults={8}
/>`;

  const propsData = [
    { name: 'placeholder', type: 'string', default: '"Search..."', description: 'Placeholder text for the search input' },
    { name: 'value', type: 'string', default: '""', description: 'Controlled value of the search input' },
    { name: 'onChange', type: 'function', default: 'undefined', description: 'Callback fired when input value changes' },
    { name: 'onSearch', type: 'function', default: 'undefined', description: 'Callback fired when search is performed' },
    { name: 'onSelect', type: 'function', default: 'undefined', description: 'Callback fired when suggestion is selected' },
    { name: 'suggestions', type: 'array', default: '[]', description: 'Array of suggestions (strings or objects)' },
    { name: 'recentSearches', type: 'array', default: '[]', description: 'Array of recent search terms' },
    { name: 'trendingSearches', type: 'array', default: '[]', description: 'Array of trending searches' },
    { name: 'variant', type: 'string', default: '"default"', description: 'Visual variant: "default", "filled", "outlined", "glassmorphism"' },
    { name: 'size', type: 'string', default: '"md"', description: 'Size variant: "sm", "md", "lg"' },
    { name: 'primaryColor', type: 'string', default: '"#6366f1"', description: 'Primary theme color' },
    { name: 'backgroundColor', type: 'string', default: '"#ffffff"', description: 'Background color' },
    { name: 'borderRadius', type: 'string', default: '"8px"', description: 'Border radius of the search input' },
    { name: 'showRecentSearches', type: 'boolean', default: 'true', description: 'Show recent searches section' },
    { name: 'showTrendingSearches', type: 'boolean', default: 'true', description: 'Show trending searches section' },
    { name: 'maxResults', type: 'number', default: '5', description: 'Maximum number of suggestions to show' },
    { name: 'debounceMs', type: 'number', default: '300', description: 'Debounce delay in milliseconds' },
    { name: 'clearOnSelect', type: 'boolean', default: 'false', description: 'Clear input after selection' },
    { name: 'leftIcon', type: 'ReactNode', default: 'undefined', description: 'Icon to display on the left side' },
    { name: 'emptyStateMessage', type: 'string', default: '"No results found"', description: 'Message when no results found' }
  ];

  return (
    <div 
      className="h-screen overflow-y-auto w-full p-8"
      style={{ backgroundColor: theme?.backgroundColor || '#f9fafb' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <IconSearch size={32} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold" style={{ color: primaryTextColor }}>Search Component</h1>
              <p style={{ color: secondaryTextColor }}>Powerful search with auto-complete, suggestions, and smart features</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 mb-6">
            {[
              { id: 'basic', label: 'Basic Usage', icon: <IconCode size={20} /> },
              { id: 'advanced', label: 'Advanced', icon: <IconSettings size={20} /> },
              { id: 'styling', label: 'Styling', icon: <IconSearch size={20} /> },
              { id: 'props', label: 'Props', icon: <IconFile size={20} /> },
              { id: 'examples', label: 'Live Examples', icon: <IconEye size={20} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                style={{ 
                  backgroundColor: activeTab === tab.id ? theme?.primaryColor || '#6366f1' : undefined,
                  color: activeTab === tab.id ? '#ffffff' : "#4b5563"
                }}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Basic Usage Tab */}
        {activeTab === 'basic' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Basic Usage</h2>
              <p className="mb-6 text-gray-600">
                The Search component provides a simple yet powerful search experience with auto-complete suggestions.
              </p>
              
              {/* Live Example First */}
              <div className="p-6 bg-gray-50 rounded-lg mb-6">
                <h4 className="font-semibold mb-4 text-gray-900">Try it:</h4>
                <Search
                  placeholder="Search anything..."
                  value={searchValue}
                  onChange={setSearchValue}
                  onSearch={handleSearch}
                  onSelect={handleSelect}
                  suggestions={suggestions.map(s => s.title)}
                  recentSearches={recentSearches}
                  variant="default"
                />
              </div>

              {/* Code Example Below */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Code Example:</span>
                  <button
                    onClick={() => copyToClipboard(basicUsageCode)}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                  >
                    <IconCopy size={16} />
                    {copySuccess || 'Copy'}
                  </button>
                </div>
                <pre className="p-4 bg-gray-900 text-gray-300 text-sm overflow-x-auto rounded-lg">
                  <code>{basicUsageCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Advanced Tab */}
        {activeTab === 'advanced' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Advanced Features</h2>
              <p className="mb-6 text-gray-600">
                The Search component supports rich suggestions with metadata, recent searches, trending topics, and more.
              </p>
              
              {/* Live Example First */}
              <div className="p-6 bg-gray-50 rounded-lg mb-6">
                <h4 className="font-semibold mb-4 text-gray-900">Try it:</h4>
                <Search
                  placeholder="Search with smart suggestions..."
                  suggestions={suggestions}
                  recentSearches={recentSearches}
                  trendingSearches={trendingSearches}
                  onSearch={handleSearch}
                  onSelect={handleSelect}
                  variant="glassmorphism"
                  primaryColor={theme?.primaryColor || "#6366f1"}
                  backgroundColor="rgba(99, 102, 241, 0.1)"
                  showRecentSearches={true}
                  showTrendingSearches={true}
                  maxResults={6}
                  debounceMs={200}
                  leftIcon={<IconSearch size={20} />}
                />
              </div>

              {/* Code Example Below */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Advanced Code Example:</span>
                  <button
                    onClick={() => copyToClipboard(advancedUsageCode)}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                  >
                    <IconCopy size={16} />
                    {copySuccess || 'Copy'}
                  </button>
                </div>
                <pre className="p-4 bg-gray-900 text-gray-300 text-sm overflow-x-auto rounded-lg">
                  <code>{advancedUsageCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Styling Tab */}
        {activeTab === 'styling' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Custom Styling</h2>
              <p className="mb-6 text-gray-600">
                Customize the appearance with different variants, sizes, colors, and styling options.
              </p>
              
              {/* Live Examples First */}
              <div className="space-y-6 mb-6">
                {/* Size Variants */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-4 text-gray-900">Size Variants:</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm mb-2 text-gray-600">Small</p>
                      <Search
                        placeholder="Small search..."
                        size="sm"
                        suggestions={suggestions.slice(0, 3).map(s => s.title)}
                        variant="outlined"
                      />
                    </div>
                    <div>
                      <p className="text-sm mb-2 text-gray-600">Medium (Default)</p>
                      <Search
                        placeholder="Medium search..."
                        size="md"
                        suggestions={suggestions.slice(0, 3).map(s => s.title)}
                        variant="filled"
                      />
                    </div>
                    <div>
                      <p className="text-sm mb-2 text-gray-600">Large</p>
                      <Search
                        placeholder="Large search..."
                        size="lg"
                        suggestions={suggestions.slice(0, 3).map(s => s.title)}
                        variant="glassmorphism"
                        primaryColor="#8b5cf6"
                      />
                    </div>
                  </div>
                </div>

                {/* Color Variants */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-4 text-gray-900">Color Themes:</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm mb-2 text-gray-600">Purple Theme</p>
                      <Search
                        placeholder="Purple themed search..."
                        suggestions={suggestions.slice(0, 3)}
                        variant="glassmorphism"
                        primaryColor="#8b5cf6"
                        backgroundColor="rgba(139, 92, 246, 0.1)"
                        borderRadius="16px"
                        leftIcon={<IconSearch size={20} />}
                      />
                    </div>
                    <div>
                      <p className="text-sm mb-2 text-gray-600">Green Theme</p>
                      <Search
                        placeholder="Green themed search..."
                        suggestions={suggestions.slice(0, 3)}
                        variant="glassmorphism"
                        primaryColor="#10b981"
                        backgroundColor="rgba(16, 185, 129, 0.1)"
                        borderRadius="20px"
                        leftIcon={<IconSearch size={20} />}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Example Below */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Styling Code Example:</span>
                  <button
                    onClick={() => copyToClipboard(stylingCode)}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md text-sm transition-colors"
                  >
                    <IconCopy size={16} />
                    {copySuccess || 'Copy'}
                  </button>
                </div>
                <pre className="p-4 bg-gray-900 text-gray-300 text-sm overflow-x-auto rounded-lg">
                  <code>{stylingCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Props Tab */}
        {activeTab === 'props' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Component Props</h2>
              <p className="mb-6 text-gray-600">
                Complete reference of all available props for the Search component.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Prop</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Default</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((prop, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-mono text-sm text-purple-600">{prop.name}</td>
                        <td className="py-3 px-4 font-mono text-sm text-blue-600">{prop.type}</td>
                        <td className="py-3 px-4 font-mono text-sm text-gray-600">{prop.default}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Live Examples Tab */}
        {activeTab === 'examples' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Live Examples</h2>
              <p className="mb-6 text-gray-600">
                Interactive examples showcasing different use cases and configurations.
              </p>

              <div className="space-y-8">
                {/* Complete Search Experience */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Complete Search Experience</h3>
                  <Search
                    placeholder="Search documentation, files, settings..."
                    suggestions={suggestions}
                    recentSearches={recentSearches}
                    trendingSearches={trendingSearches}
                    onSearch={handleSearch}
                    onSelect={handleSelect}
                    variant="glassmorphism"
                    size="lg"
                    primaryColor={theme?.primaryColor || "#6366f1"}
                    backgroundColor="rgba(255, 255, 255, 0.1)"
                    borderRadius="12px"
                    maxResults={8}
                    showRecentSearches={true}
                    showTrendingSearches={true}
                    leftIcon={<IconSearch size={20} />}
                  />
                  <div className="mt-4 p-4 bg-white/50 backdrop-blur-sm rounded-lg text-sm text-gray-600">
                    <strong>Features:</strong> Auto-complete, recent searches, trending suggestions, 
                    keyboard navigation, debounced input, custom theming, and glassmorphism design.
                  </div>
                </div>

                {/* Search Results Display */}
                {searchResults.length > 0 && (
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Search Results</h3>
                    <div className="space-y-3">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="font-semibold text-gray-900">
                            {result.title}
                          </div>
                          <div className="text-sm mt-1 text-gray-600">
                            {result.description}
                          </div>
                          <div className="text-xs mt-2 text-blue-600 font-medium">
                            {result.category}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDocs;
