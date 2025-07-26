import React, { useState, useEffect } from 'react';
import { Modal, Search } from 'vj-ui-components';
import { useNavigate } from 'react-router-dom';
import { 
  IconHome2, IconBook, IconComponents, IconPalette, IconSearch, 
  IconWindowMaximize, IconDownload, IconCode, IconSettings2,
  IconArrowRight, IconKeyboard, IconCommand
} from '@tabler/icons-react';
import './SearchModal.css';

const SearchModal = ({ isOpen, onClose, theme }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  // Define all available pages
  const allPages = [
    {
      title: 'Home',
      description: 'Welcome page with component overview and features',
      path: '/',
      icon: <IconHome2 size={20} />,
      category: 'Main',
      keywords: ['home', 'welcome', 'main', 'overview', 'features']
    },
    {
      title: 'Documentation',
      description: 'Complete guide to using VJ UI Components',
      path: '/docs',
      icon: <IconBook size={20} />,
      category: 'Docs',
      keywords: ['docs', 'documentation', 'guide', 'help']
    },
    {
      title: 'Navbar Component',
      description: 'Versatile navigation with dual layout support',
      path: '/docs/navbar',
      icon: <IconComponents size={20} />,
      category: 'Components',
      keywords: ['navbar', 'navigation', 'menu', 'sidebar', 'topbar', 'layout']
    },
    {
      title: 'Input Component',
      description: 'Customizable input fields with validation and styling',
      path: '/docs/input',
      icon: <IconPalette size={20} />,
      category: 'Components',
      keywords: ['input', 'form', 'field', 'text', 'validation', 'styling']
    },
    {
      title: 'Search Component',
      description: 'Powerful search with auto-complete and suggestions',
      path: '/docs/search',
      icon: <IconSearch size={20} />,
      category: 'Components',
      keywords: ['search', 'autocomplete', 'suggestions', 'filter', 'find']
    },
    {
      title: 'Modal Component',
      description: 'Flexible modal dialogs with animations and variants',
      path: '/docs/modal',
      icon: <IconWindowMaximize size={20} />,
      category: 'Components',
      keywords: ['modal', 'dialog', 'popup', 'overlay', 'window']
    },
    {
      title: 'Installation',
      description: 'Step-by-step installation and setup guide',
      path: '/installation',
      icon: <IconDownload size={20} />,
      category: 'Setup',
      keywords: ['install', 'setup', 'npm', 'yarn', 'package', 'dependencies']
    },
    {
      title: 'Examples',
      description: 'Live examples and code snippets',
      path: '/examples',
      icon: <IconCode size={20} />,
      category: 'Examples',
      keywords: ['examples', 'demo', 'code', 'snippets', 'samples']
    },
    {
      title: 'Settings',
      description: 'Customize theme colors and appearance',
      path: '/settings',
      icon: <IconSettings2 size={20} />,
      category: 'Configuration',
      keywords: ['settings', 'theme', 'colors', 'customization', 'configuration']
    }
  ];

  // Filter pages based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(allPages);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = allPages.filter(page => 
        page.title.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query) ||
        page.category.toLowerCase().includes(query) ||
        page.keywords.some(keyword => keyword.includes(query))
      );
      setSearchResults(filtered);
    }
    setSelectedIndex(0);
  }, [searchQuery]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < searchResults.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : searchResults.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (searchResults[selectedIndex]) {
            handleNavigate(searchResults[selectedIndex].path);
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, searchResults, selectedIndex, onClose]);

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
    setSearchQuery('');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Main': 'bg-blue-100 text-blue-800',
      'Docs': 'bg-green-100 text-green-800',
      'Components': 'bg-purple-100 text-purple-800',
      'Setup': 'bg-orange-100 text-orange-800',
      'Examples': 'bg-indigo-100 text-indigo-800',
      'Configuration': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="large"
      showCloseButton={false}
      overlayColor="rgba(0, 0, 0, 0.5)"
      className="search-modal"
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <IconSearch size={24} style={{ color: theme?.primaryColor || '#6366f1' }} />
            <h2 className="text-2xl font-bold text-gray-900">Search Pages</h2>
          </div>
          <p className="text-gray-600 text-sm">
            Find and navigate to any page quickly
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-6">
          <div className="relative">
            <IconSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for pages, components, or features..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition-colors"
              style={{ 
                outline: 'none'
              }}
              autoFocus
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="space-y-2">
              {searchResults.map((page, index) => (
                <div
                  key={page.path}
                  onClick={() => handleNavigate(page.path)}
                  className={`result-item p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    index === selectedIndex
                      ? 'selected border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {page.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {page.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(page.category)}`}>
                          {page.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {page.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500 font-mono">
                          {page.path}
                        </span>
                        {index === selectedIndex && (
                          <div className="flex items-center gap-1 text-xs text-blue-600">
                            <IconArrowRight size={12} />
                            <span>Press Enter</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <IconSearch size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No pages found</h3>
              <p className="text-gray-600">
                Try searching with different keywords or browse all available pages above.
              </p>
            </div>
          )}
        </div>

        {/* Footer with keyboard shortcuts */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">↑↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Esc</kbd>
                <span>Close</span>
              </div>
            </div>
            <div className="text-right">
              <span>{searchResults.length} page{searchResults.length !== 1 ? 's' : ''} found</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
