import React, { useState } from 'react';
import { 
  IconLoader, IconEye, IconCopy, IconCode, IconSettings,
  IconPalette, IconFileText, IconInfoCircle, IconComponents
} from '@tabler/icons-react';
import { 
  Skeleton, 
  SkeletonCard, 
  SkeletonTable, 
  SkeletonList, 
  SkeletonProfile,
  SkeletonImage 
} from 'vj-ui-components';

const SkeletonDocs = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [copySuccess, setCopySuccess] = useState('');
  
  // State for interactive examples
  const [textConfig, setTextConfig] = useState({
    lines: 3,
    width: '100%',
    animation: 'pulse'
  });
  
  const [cardConfig, setCardConfig] = useState({
    showAvatar: true,
    lines: 3,
    animation: 'pulse'
  });
  
  const [tableConfig, setTableConfig] = useState({
    rows: 3,
    columns: 4,
    showHeader: true
  });
  
  const [listConfig, setListConfig] = useState({
    items: 3,
    showAvatar: true,
    showAction: true
  });
  
  const [imageConfig, setImageConfig] = useState({
    width: '300px',
    height: '200px',
    animation: 'pulse'
  });

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

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  const tabs = [
    { id: 'basic', label: 'Basic Usage', icon: <IconInfoCircle size={16} /> },
    { id: 'variants', label: 'Variants', icon: <IconComponents size={16} /> },
    { id: 'components', label: 'Skeleton Components', icon: <IconPalette size={16} /> },
    { id: 'props', label: 'Props', icon: <IconFileText size={16} /> },
    { id: 'examples', label: 'Live Examples', icon: <IconEye size={16} /> }
  ];

  // Code examples
  const basicUsageCode = `import React, { useState } from 'react';
import { 
  Skeleton, 
  SkeletonCard, 
  SkeletonTable, 
  SkeletonList, 
  SkeletonProfile,
  SkeletonImage 
} from 'vj-ui-components';

const SkeletonExample = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <Skeleton variant="text" width="100%" />
      ) : (
        <div>Your content here</div>
      )}
    </div>
  );
};`;

  const variantsCode = `// Text skeleton
<Skeleton variant="text" width="100%" />
<Skeleton variant="text" width="80%" />
<Skeleton variant="text" width="60%" />

// Multi-line text
<Skeleton variant="text" lines={5} width="100%" />

// Rectangular skeleton
<Skeleton variant="rectangular" width="100%" height="120px" />

// Circular skeleton
<Skeleton variant="circular" width="80px" height="80px" />

// Rounded skeleton
<Skeleton variant="rounded" width="100%" height="60px" />`;

  const animationCode = `// Pulse animation (default)
<Skeleton variant="rectangular" animation="pulse" />

// Wave animation
<Skeleton variant="rectangular" animation="wave" />

// No animation
<Skeleton variant="rectangular" animation="none" />`;

  const skeletonComponentsCode = `// Card skeleton
<SkeletonCard showAvatar={true} lines={3} />

// Table skeleton
<SkeletonTable rows={5} columns={4} showHeader={true} />

// List skeleton
<SkeletonList items={4} showAvatar={true} showAction={true} />

// Profile skeleton
<SkeletonProfile />

// Image skeleton
<SkeletonImage width="300px" height="200px" />`;

  const propsData = [
    {
      prop: 'variant',
      type: 'string',
      default: 'text',
      description: 'Type of skeleton: "text", "rectangular", "circular", "rounded"'
    },
    {
      prop: 'width',
      type: 'string',
      default: '100%',
      description: 'Width of the skeleton element'
    },
    {
      prop: 'height',
      type: 'string',
      default: 'auto',
      description: 'Height of the skeleton element'
    },
    {
      prop: 'lines',
      type: 'number',
      default: '1',
      description: 'Number of lines for text variant'
    },
    {
      prop: 'animation',
      type: 'string',
      default: 'pulse',
      description: 'Animation type: "pulse", "wave", "none"'
    },
    {
      prop: 'baseColor',
      type: 'string',
      default: '#e5e7eb',
      description: 'Base color of the skeleton'
    },
    {
      prop: 'highlightColor',
      type: 'string',
      default: '#f3f4f6',
      description: 'Highlight color for animations'
    }
  ];

  const skeletonCardProps = [
    {
      prop: 'showAvatar',
      type: 'boolean',
      default: 'false',
      description: 'Whether to show avatar skeleton'
    },
    {
      prop: 'lines',
      type: 'number',
      default: '3',
      description: 'Number of text lines'
    },
    {
      prop: 'animation',
      type: 'string',
      default: 'pulse',
      description: 'Animation type'
    }
  ];

  const skeletonTableProps = [
    {
      prop: 'rows',
      type: 'number',
      default: '3',
      description: 'Number of table rows'
    },
    {
      prop: 'columns',
      type: 'number',
      default: '3',
      description: 'Number of table columns'
    },
    {
      prop: 'showHeader',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show header row'
    }
  ];

  const skeletonListProps = [
    {
      prop: 'items',
      type: 'number',
      default: '3',
      description: 'Number of list items'
    },
    {
      prop: 'showAvatar',
      type: 'boolean',
      default: 'false',
      description: 'Whether to show avatar in each item'
    },
    {
      prop: 'showAction',
      type: 'boolean',
      default: 'false',
      description: 'Whether to show action button skeleton'
    }
  ];

  const styles = {
    container: {
      color: primaryTextColor,
      backgroundColor: theme?.backgroundColor || '#ffffff',
      minHeight: '100vh'
    },
    codeBlock: {
      backgroundColor: isLight ? '#1e293b' : '#0f172a',
      color: '#e2e8f0',
      fontSize: '0.875rem',
      fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      overflow: 'auto',
      position: 'relative'
    },
    copyButton: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      backgroundColor: theme?.primaryColor || '#3b82f6',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    code: {
      backgroundColor: isLight ? '#f1f5f9' : '#334155',
      fontFamily: 'Monaco, Consolas, monospace'
    },
    badge: {
      backgroundColor: theme?.primaryColor || '#3b82f6',
      color: 'white'
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>Installation</h3>
              <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                <button 
                  style={styles.copyButton}
                  className="px-2 py-1 rounded text-xs"
                  onClick={() => copyToClipboard('npm install vj-ui-components')}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>npm install vj-ui-components</pre>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>Basic Usage</h3>
              <p className="mb-4" style={{ color: secondaryTextColor }}>
                The Skeleton component provides loading placeholders for your content while data is being fetched.
              </p>
              <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                <button 
                  style={styles.copyButton}
                  className="px-2 py-1 rounded text-xs"
                  onClick={() => copyToClipboard(basicUsageCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>{basicUsageCode}</pre>
              </div>
            </div>
          </div>
        );

      case 'variants':
        return (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>Skeleton Variants</h3>
              <p className="mb-4" style={{ color: secondaryTextColor }}>
                Different skeleton shapes for different content types.
              </p>
              <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                <button 
                  style={styles.copyButton}
                  className="px-2 py-1 rounded text-xs"
                  onClick={() => copyToClipboard(variantsCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>{variantsCode}</pre>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>Animations</h3>
              <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                <button 
                  style={styles.copyButton}
                  className="px-2 py-1 rounded text-xs"
                  onClick={() => copyToClipboard(animationCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>{animationCode}</pre>
              </div>
            </div>
          </div>
        );

      case 'components':
        return (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>Pre-built Skeleton Components</h3>
              <p className="mb-4" style={{ color: secondaryTextColor }}>
                Ready-to-use skeleton components for common UI patterns.
              </p>
              <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                <button 
                  style={styles.copyButton}
                  className="px-2 py-1 rounded text-xs"
                  onClick={() => copyToClipboard(skeletonComponentsCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>{skeletonComponentsCode}</pre>
              </div>
            </div>
          </div>
        );

      case 'props':
        return (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>Skeleton Props</h3>
              <table className={`w-full border-collapse mt-4 border ${isLight ? 'border-gray-200' : 'border-gray-700'}`}>
                <thead>
                  <tr>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Prop</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Type</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Default</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {propsData.map((prop, index) => (
                    <tr key={index}>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <code style={styles.code} className="px-1 py-0.5 rounded text-sm">{prop.prop}</code>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <span style={styles.badge} className="px-2 py-1 rounded text-xs font-medium">{prop.type}</span>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <code style={styles.code} className="px-1 py-0.5 rounded text-sm">{prop.default}</code>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>SkeletonCard Props</h3>
              <table className={`w-full border-collapse mt-4 border ${isLight ? 'border-gray-200' : 'border-gray-700'}`}>
                <thead>
                  <tr>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Prop</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Type</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Default</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {skeletonCardProps.map((prop, index) => (
                    <tr key={index}>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <code style={styles.code} className="px-1 py-0.5 rounded text-sm">{prop.prop}</code>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <span style={styles.badge} className="px-2 py-1 rounded text-xs font-medium">{prop.type}</span>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <code style={styles.code} className="px-1 py-0.5 rounded text-sm">{prop.default}</code>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>SkeletonTable Props</h3>
              <table className={`w-full border-collapse mt-4 border ${isLight ? 'border-gray-200' : 'border-gray-700'}`}>
                <thead>
                  <tr>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Prop</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Type</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Default</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {skeletonTableProps.map((prop, index) => (
                    <tr key={index}>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <code style={styles.code} className="px-1 py-0.5 rounded text-sm">{prop.prop}</code>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <span style={styles.badge} className="px-2 py-1 rounded text-xs font-medium">{prop.type}</span>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <code style={styles.code} className="px-1 py-0.5 rounded text-sm">{prop.default}</code>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>SkeletonList Props</h3>
              <table className={`w-full border-collapse mt-4 border ${isLight ? 'border-gray-200' : 'border-gray-700'}`}>
                <thead>
                  <tr>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Prop</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Type</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Default</th>
                    <th className={`p-3 text-left font-semibold border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`} style={{ color: primaryTextColor }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {skeletonListProps.map((prop, index) => (
                    <tr key={index}>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <code style={styles.code} className="px-1 py-0.5 rounded text-sm">{prop.prop}</code>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <span style={styles.badge} className="px-2 py-1 rounded text-xs font-medium">{prop.type}</span>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>
                        <code style={styles.code} className="px-1 py-0.5 rounded text-sm">{prop.default}</code>
                      </td>
                      <td className={`p-3 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`} style={{ color: primaryTextColor }}>{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'examples':
        return (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: primaryTextColor }}>Interactive Examples</h3>
              <p className="mb-4" style={{ color: secondaryTextColor }}>
                Try out the skeleton components with different configurations:
              </p>
              
              {/* Text Skeleton Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Text Skeleton</h4>
                
                {/* Controls */}
                <div className={`p-4 border rounded-lg mb-4 ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Lines: {textConfig.lines}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={textConfig.lines}
                        onChange={(e) => setTextConfig({...textConfig, lines: parseInt(e.target.value)})}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Width
                      </label>
                      <select
                        value={textConfig.width}
                        onChange={(e) => setTextConfig({...textConfig, width: e.target.value})}
                        className={`w-full p-2 border rounded ${isLight ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'}`}
                        style={{ color: primaryTextColor }}
                      >
                        <option value="100%">100%</option>
                        <option value="80%">80%</option>
                        <option value="60%">60%</option>
                        <option value="300px">300px</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Animation
                      </label>
                      <select
                        value={textConfig.animation}
                        onChange={(e) => setTextConfig({...textConfig, animation: e.target.value})}
                        className={`w-full p-2 border rounded ${isLight ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'}`}
                        style={{ color: primaryTextColor }}
                      >
                        <option value="pulse">Pulse</option>
                        <option value="wave">Wave</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                  <button 
                    style={styles.copyButton}
                    className="px-2 py-1 rounded text-xs"
                    onClick={() => copyToClipboard(`<Skeleton 
  variant="text" 
  lines={${textConfig.lines}} 
  width="${textConfig.width}" 
  animation="${textConfig.animation}" 
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Skeleton 
  variant="text" 
  lines={${textConfig.lines}} 
  width="${textConfig.width}" 
  animation="${textConfig.animation}" 
/>`}</pre>
                </div>

                {/* Live Preview */}
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Skeleton 
                    variant="text" 
                    lines={textConfig.lines} 
                    width={textConfig.width} 
                    animation={textConfig.animation} 
                  />
                </div>
              </div>

              {/* Card Skeleton Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Card Skeleton</h4>
                
                {/* Controls */}
                <div className={`p-4 border rounded-lg mb-4 ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="flex items-center gap-2" style={{ color: primaryTextColor }}>
                        <input
                          type="checkbox"
                          checked={cardConfig.showAvatar}
                          onChange={(e) => setCardConfig({...cardConfig, showAvatar: e.target.checked})}
                        />
                        Show Avatar
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Lines: {cardConfig.lines}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={cardConfig.lines}
                        onChange={(e) => setCardConfig({...cardConfig, lines: parseInt(e.target.value)})}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Animation
                      </label>
                      <select
                        value={cardConfig.animation}
                        onChange={(e) => setCardConfig({...cardConfig, animation: e.target.value})}
                        className={`w-full p-2 border rounded ${isLight ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'}`}
                        style={{ color: primaryTextColor }}
                      >
                        <option value="pulse">Pulse</option>
                        <option value="wave">Wave</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                  <button 
                    style={styles.copyButton}
                    className="px-2 py-1 rounded text-xs"
                    onClick={() => copyToClipboard(`<SkeletonCard 
  showAvatar={${cardConfig.showAvatar}} 
  lines={${cardConfig.lines}} 
  animation="${cardConfig.animation}" 
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<SkeletonCard 
  showAvatar={${cardConfig.showAvatar}} 
  lines={${cardConfig.lines}} 
  animation="${cardConfig.animation}" 
/>`}</pre>
                </div>

                {/* Live Preview */}
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <SkeletonCard 
                    showAvatar={cardConfig.showAvatar} 
                    lines={cardConfig.lines} 
                    animation={cardConfig.animation} 
                  />
                </div>
              </div>

              {/* Table Skeleton Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Table Skeleton</h4>
                
                {/* Controls */}
                <div className={`p-4 border rounded-lg mb-4 ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Rows: {tableConfig.rows}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={tableConfig.rows}
                        onChange={(e) => setTableConfig({...tableConfig, rows: parseInt(e.target.value)})}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Columns: {tableConfig.columns}
                      </label>
                      <input
                        type="range"
                        min="2"
                        max="8"
                        value={tableConfig.columns}
                        onChange={(e) => setTableConfig({...tableConfig, columns: parseInt(e.target.value)})}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2" style={{ color: primaryTextColor }}>
                        <input
                          type="checkbox"
                          checked={tableConfig.showHeader}
                          onChange={(e) => setTableConfig({...tableConfig, showHeader: e.target.checked})}
                        />
                        Show Header
                      </label>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                  <button 
                    style={styles.copyButton}
                    className="px-2 py-1 rounded text-xs"
                    onClick={() => copyToClipboard(`<SkeletonTable 
  rows={${tableConfig.rows}} 
  columns={${tableConfig.columns}} 
  showHeader={${tableConfig.showHeader}} 
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<SkeletonTable 
  rows={${tableConfig.rows}} 
  columns={${tableConfig.columns}} 
  showHeader={${tableConfig.showHeader}} 
/>`}</pre>
                </div>

                {/* Live Preview */}
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <SkeletonTable 
                    rows={tableConfig.rows} 
                    columns={tableConfig.columns} 
                    showHeader={tableConfig.showHeader} 
                  />
                </div>
              </div>

              {/* List Skeleton Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>List Skeleton</h4>
                
                {/* Controls */}
                <div className={`p-4 border rounded-lg mb-4 ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Items: {listConfig.items}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={listConfig.items}
                        onChange={(e) => setListConfig({...listConfig, items: parseInt(e.target.value)})}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2" style={{ color: primaryTextColor }}>
                        <input
                          type="checkbox"
                          checked={listConfig.showAvatar}
                          onChange={(e) => setListConfig({...listConfig, showAvatar: e.target.checked})}
                        />
                        Show Avatar
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center gap-2" style={{ color: primaryTextColor }}>
                        <input
                          type="checkbox"
                          checked={listConfig.showAction}
                          onChange={(e) => setListConfig({...listConfig, showAction: e.target.checked})}
                        />
                        Show Action
                      </label>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                  <button 
                    style={styles.copyButton}
                    className="px-2 py-1 rounded text-xs"
                    onClick={() => copyToClipboard(`<SkeletonList 
  items={${listConfig.items}} 
  showAvatar={${listConfig.showAvatar}} 
  showAction={${listConfig.showAction}} 
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<SkeletonList 
  items={${listConfig.items}} 
  showAvatar={${listConfig.showAvatar}} 
  showAction={${listConfig.showAction}} 
/>`}</pre>
                </div>

                {/* Live Preview */}
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <SkeletonList 
                    items={listConfig.items} 
                    showAvatar={listConfig.showAvatar} 
                    showAction={listConfig.showAction} 
                  />
                </div>
              </div>

              {/* Profile Skeleton Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Profile Skeleton</h4>
                
                {/* Code Example */}
                <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                  <button 
                    style={styles.copyButton}
                    className="px-2 py-1 rounded text-xs"
                    onClick={() => copyToClipboard(`<SkeletonProfile />`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<SkeletonProfile />`}</pre>
                </div>

                {/* Live Preview */}
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <SkeletonProfile />
                </div>
              </div>

              {/* Image Skeleton Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Image Skeleton</h4>
                
                {/* Controls */}
                <div className={`p-4 border rounded-lg mb-4 ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Width
                      </label>
                      <select
                        value={imageConfig.width}
                        onChange={(e) => setImageConfig({...imageConfig, width: e.target.value})}
                        className={`w-full p-2 border rounded ${isLight ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'}`}
                        style={{ color: primaryTextColor }}
                      >
                        <option value="200px">200px</option>
                        <option value="300px">300px</option>
                        <option value="400px">400px</option>
                        <option value="100%">100%</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Height
                      </label>
                      <select
                        value={imageConfig.height}
                        onChange={(e) => setImageConfig({...imageConfig, height: e.target.value})}
                        className={`w-full p-2 border rounded ${isLight ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'}`}
                        style={{ color: primaryTextColor }}
                      >
                        <option value="150px">150px</option>
                        <option value="200px">200px</option>
                        <option value="250px">250px</option>
                        <option value="300px">300px</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: primaryTextColor }}>
                        Animation
                      </label>
                      <select
                        value={imageConfig.animation}
                        onChange={(e) => setImageConfig({...imageConfig, animation: e.target.value})}
                        className={`w-full p-2 border rounded ${isLight ? 'border-gray-300 bg-white' : 'border-gray-600 bg-gray-700'}`}
                        style={{ color: primaryTextColor }}
                      >
                        <option value="pulse">Pulse</option>
                        <option value="wave">Wave</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                  <button 
                    style={styles.copyButton}
                    className="px-2 py-1 rounded text-xs"
                    onClick={() => copyToClipboard(`<SkeletonImage 
  width="${imageConfig.width}" 
  height="${imageConfig.height}" 
  animation="${imageConfig.animation}" 
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<SkeletonImage 
  width="${imageConfig.width}" 
  height="${imageConfig.height}" 
  animation="${imageConfig.animation}" 
/>`}</pre>
                </div>

                {/* Live Preview */}
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <SkeletonImage 
                    width={imageConfig.width} 
                    height={imageConfig.height} 
                    animation={imageConfig.animation} 
                  />
                </div>
              </div>

              {/* Advanced Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Complete Loading Layout</h4>
                
                {/* Code Example */}
                <div style={styles.codeBlock} className="p-4 rounded-lg mb-4 relative">
                  <button 
                    style={styles.copyButton}
                    className="px-2 py-1 rounded text-xs"
                    onClick={() => copyToClipboard(`// Complete loading layout example
const LoadingPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <Skeleton variant="text" width="40%" height="32px" />
        <Skeleton variant="text" width="60%" />
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SkeletonCard showAvatar={true} lines={3} />
        <SkeletonCard showAvatar={true} lines={3} />
        <SkeletonCard showAvatar={true} lines={3} />
      </div>
      
      {/* Data Table */}
      <SkeletonTable rows={5} columns={4} showHeader={true} />
    </div>
  );
};`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`// Complete loading layout example
const LoadingPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <Skeleton variant="text" width="40%" height="32px" />
        <Skeleton variant="text" width="60%" />
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SkeletonCard showAvatar={true} lines={3} />
        <SkeletonCard showAvatar={true} lines={3} />
        <SkeletonCard showAvatar={true} lines={3} />
      </div>
      
      {/* Data Table */}
      <SkeletonTable rows={5} columns={4} showHeader={true} />
    </div>
  );
};`}</pre>
                </div>

                {/* Live Preview */}
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                      <Skeleton variant="text" width="40%" height="32px" />
                      <Skeleton variant="text" width="60%" />
                    </div>
                    
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      <SkeletonCard showAvatar={true} lines={3} />
                      <SkeletonCard showAvatar={true} lines={3} />
                      <SkeletonCard showAvatar={true} lines={3} />
                    </div>
                    
                    {/* Data Table */}
                    <SkeletonTable rows={5} columns={4} showHeader={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={styles.container} className="p-6 w-full overflow-y-auto mx-auto">
      <div className={`pb-4 mb-8 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`}>
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2" style={{ color: primaryTextColor }}>
          <IconLoader size={32} color={theme?.primaryColor || '#3b82f6'} />
          Skeleton Component
        </h1>
        <p className="text-lg" style={{ color: secondaryTextColor }}>
          Loading placeholders that mimic the layout of content while it's being fetched.
        </p>
      </div>

      <div className={`mb-8 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'}`}>
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 border-none bg-transparent cursor-pointer rounded-t-md flex items-center gap-2 text-sm font-medium transition-all duration-200 border-b-2 border-transparent ${
                activeTab === tab.id 
                  ? `${isLight ? 'bg-slate-50' : 'bg-slate-800'}` 
                  : ''
              }`}
              style={{
                color: activeTab === tab.id ? (theme?.primaryColor || '#3b82f6') : secondaryTextColor,
                borderBottomColor: activeTab === tab.id ? (theme?.primaryColor || '#3b82f6') : 'transparent'
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default SkeletonDocs;
