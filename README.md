# VJ UI Components Documentation Site

This is the official documentation site for VJ UI Components - a collection of beautiful, customizable React UI components.

## Features

### 🔍 Smart Search Modal
- **Global Search**: Press `Ctrl+K` (or `Cmd+K` on Mac) to quickly search all pages
- **Intelligent Filtering**: Search through page titles, descriptions, and keywords
- **Keyboard Navigation**: Navigate results with arrow keys, select with Enter
- **Floating Search Button**: Always accessible from bottom-right corner

### 📚 Comprehensive Documentation
- Component documentation with live examples
- Installation and setup guides
- Code snippets and usage examples
- Theme customization options

### 🎨 Modern Design
- Glassmorphism design elements
- Responsive layout for all devices
- Customizable color themes
- Smooth animations and transitions

## Available Components
- **Navbar**: Versatile navigation with dual layout support
- **Input**: Feature-rich input fields with validation
- **Search**: Powerful search with auto-complete
- **Modal**: Flexible modal dialogs with animations

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Search Feature
The documentation site includes a powerful search modal for quick navigation:
- Press `Ctrl+K` / `Cmd+K` to open search
- Type to filter through all available pages
- Use arrow keys to navigate results
- Press Enter to go to selected page

For detailed information about the search feature, see [SEARCH_FEATURE.md](./SEARCH_FEATURE.md).

## Technology Stack
- React 19.1.0
- Vite 7.0.4
- React Router DOM 7.7.1
- Tabler Icons React
- Tailwind CSS 4.1.11
- VJ UI Components 2.3.1

## Project Structure
```
src/
├── components/          # Reusable components
│   ├── SearchModal.jsx  # Search modal component
│   └── FloatingSearchButton.jsx
├── pages/              # Documentation pages
└── App.jsx            # Main application component
```

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## License
MIT
