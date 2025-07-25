import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from 'vj-ui-components'
import { IconHome2, IconSettings2, IconBook, IconComponents, IconDownload, IconCode, IconPalette } from '@tabler/icons-react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import NavbarDocs from './pages/NavbarDocs'
import InputDocs from './pages/InputDocs'
import Installation from './pages/Installation'
import Examples from './pages/Examples'
import Settings from './pages/Settings'

function App() {
  // Theme state management
  const [theme, setTheme] = useState({
    primaryColor: "#6366f1",
    secondaryColor: "#4f46e5",
    iconColor: "#e2e8f0",
    textColor: "#f1f5f9",
    backgroundColor: "#f8fafc"
  });

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
        iconColor={theme.iconColor}
        textColor={theme.textColor}
        position="relative"
      />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/docs" element={<Documentation theme={theme} />} />
        <Route path="/docs/navbar" element={<NavbarDocs theme={theme} />} />
        <Route path="/docs/input" element={<InputDocs theme={theme} />} />
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
          />
        } />
        
        {/* Add more routes as needed */}
      </Routes>
    </div>
  )
}

export default App
