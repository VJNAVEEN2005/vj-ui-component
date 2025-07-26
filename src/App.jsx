import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from 'vj-ui-components'
import { IconHome2, IconSettings2, IconBook, IconComponents, IconDownload, IconCode, IconPalette, IconSearch, IconWindowMaximize, IconLoader, IconTag, IconPlayerPlay } from '@tabler/icons-react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import NavbarDocs from './pages/NavbarDocs'
import InputDocs from './pages/InputDocs'
import SearchDocs from './pages/SearchDocs'
import ModalDocs from './pages/ModalDocs'
import SkeletonDocs from './pages/SkeletonDocs'
import TagsDocs from './pages/TagsDocs'
import LoaderDocs from './pages/LoaderDocs'
import Installation from './pages/Installation'
import Examples from './pages/Examples'
import Settings from './pages/Settings'
import SearchModal from './components/SearchModal'
import FloatingSearchButton from './components/FloatingSearchButton'

function App() {
  // Theme state management with proper contrast
  const [theme, setTheme] = useState({
    primaryColor: "#6366f1",
    secondaryColor: "#4f46e5",
    iconColor: "#64748b",
    textColor: "#1e293b",
    backgroundColor: "#f8fafc",
    navbarIconColor: "#64748b",
    navbarTextColor: "#1e293b"
  });

  // Search modal state
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('vjui-theme');
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme));
      } catch (error) {
        console.error('Error loading saved theme:', error);
      }
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('vjui-theme', JSON.stringify(theme));
  }, [theme]);

  // Global keyboard shortcut for search modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K to open search modal
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleColorChange = (primary, secondary) => {
    setTheme(prev => ({
      ...prev,
      primaryColor: primary,
      secondaryColor: secondary
    }));
  };

  const handleIconColorChange = (iconColor) => {
    setTheme(prev => ({
      ...prev,
      iconColor
    }));
  };

  const handleTextColorChange = (textColor) => {
    setTheme(prev => ({
      ...prev,
      textColor
    }));
  };

  const handleBackgroundColorChange = (backgroundColor) => {
    setTheme(prev => ({
      ...prev,
      backgroundColor
    }));
  };

  const handleNavbarIconColorChange = (navbarIconColor) => {
    setTheme(prev => ({
      ...prev,
      navbarIconColor
    }));

  };

  const handleNavbarTextColorChange = (navbarTextColor) => {
    setTheme(prev => ({
      ...prev,
      navbarTextColor
    }));
  };

  const topData = [
    {
      icon: <IconHome2 />,
      text: "Home", 
      path: "/",
    },
    {
      icon: <IconBook />,
      text: "Documentation",
      path: "/docs",
      children: [
        {
          icon: <IconComponents />,
          text: "Navbar",
          path: "/docs/navbar"
        },
        {
          icon: <IconPalette />,
          text: "Input",
          path: "/docs/input"
        },
        {
          icon: <IconSearch />,
          text: "Search",
          path: "/docs/search"
        },
        {
          icon: <IconWindowMaximize />,
          text: "Modal",
          path: "/docs/modal"
        },
        {
          icon: <IconLoader />,
          text: "Skeleton",
          path: "/docs/skeleton"
        },
        {
          icon: <IconTag />,
          text: "Tags",
          path: "/docs/tags"
        },
        {
          icon: <IconPlayerPlay />,
          text: "Loader",
          path: "/docs/loader"
        }
      ]
    },
    {
      icon: <IconDownload />,
      text: "Installation",
      path: "/installation"
    },
    {
      icon: <IconCode />,
      text: "Examples",
      path: "/examples"
    }
  ]

  const bottomData = [
    {
      icon: <IconSettings2 />,
      text: "Settings",
      path: "/settings",
    }
  ]

  return (
    <div className=' flex w-screen h-screen overflow-hidden p-0 m-0' style={{ backgroundColor: theme.backgroundColor }}>
      <Navbar
        layout="side"
        primaryColor={theme.primaryColor}
        secondaryColor={theme.secondaryColor}
        heading="VJ UI Components"
        topdata={topData}
        bottomdata={bottomData}
        iconColor={theme.navbarIconColor}
        textColor={theme.navbarTextColor}
        position="relative"
      />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/docs" element={<Documentation theme={theme} />} />
        <Route path="/docs/navbar" element={<NavbarDocs theme={theme} />} />
        <Route path="/docs/input" element={<InputDocs theme={theme} />} />
        <Route path="/docs/search" element={<SearchDocs theme={theme} />} />
        <Route path="/docs/modal" element={<ModalDocs theme={theme} />} />
        <Route path="/docs/skeleton" element={<SkeletonDocs theme={theme} />} />
        <Route path="/docs/tags" element={<TagsDocs theme={theme} />} />
        <Route path="/docs/loader" element={<LoaderDocs theme={theme} />} />
        <Route path="/installation" element={<Installation theme={theme} />} />
        <Route path="/examples" element={<Examples theme={theme} />} />
        <Route path="/settings" element={
          <Settings 
            primaryColor={theme.primaryColor}
            secondaryColor={theme.secondaryColor}
            iconColor={theme.iconColor}
            textColor={theme.textColor}
            backgroundColor={theme.backgroundColor}
            onColorChange={handleColorChange}
            onIconColorChange={handleIconColorChange}
            onTextColorChange={handleTextColorChange}
            onBackgroundColorChange={handleBackgroundColorChange}
            onNavbarIconColorChange={handleNavbarIconColorChange}
            onNavbarTextColorChange={handleNavbarTextColorChange}
          />
        } />
        
        {/* Add more routes as needed */}
      </Routes>

      {/* Floating Search Button */}
      <FloatingSearchButton
        onClick={() => setIsSearchModalOpen(true)}
        theme={theme}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        theme={theme}
      />
    </div>
  )
}

export default App
