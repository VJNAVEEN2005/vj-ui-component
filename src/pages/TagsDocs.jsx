import React, { useState } from 'react';
import { 
  IconTag, IconEye, IconCopy, IconCode, IconSettings,
  IconPalette, IconFileText, IconInfoCircle, IconTags
} from '@tabler/icons-react';
import { Tags, TagCollections } from 'vj-ui-components';

const TagsDocs = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [copySuccess, setCopySuccess] = useState('');
  
  // State for interactive examples
  const [editableSkills, setEditableSkills] = useState(['JavaScript', 'React', 'CSS']);
  const [frontendBackend, setFrontendBackend] = useState(['Frontend', 'Backend', 'Full Stack']);
  const [designDev, setDesignDev] = useState(['Design', 'Development', 'Testing']);
  const [htmlCssJs, setHtmlCssJs] = useState(['HTML', 'CSS', 'JS']);
  const [limitedTags, setLimitedTags] = useState(['Tag 1', 'Tag 2']);
  const [technologies, setTechnologies] = useState(['React', 'Node.js', 'MongoDB']);

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
    { id: 'variants', label: 'Variants & Colors', icon: <IconPalette size={16} /> },
    { id: 'collections', label: 'Tag Collections', icon: <IconTags size={16} /> },
    { id: 'props', label: 'Props', icon: <IconFileText size={16} /> },
    { id: 'examples', label: 'Live Examples', icon: <IconEye size={16} /> }
  ];

  // Code examples
  const basicUsageCode = `import React, { useState } from 'react';
import { Tags, TagCollections } from 'vj-ui-components';

const TagsExample = () => {
  const [skills, setSkills] = useState(['JavaScript', 'React', 'CSS']);

  const handleTagAdd = (tag) => {
    setSkills([...skills, tag]);
  };

  const handleTagRemove = (tagToRemove) => {
    setSkills(skills.filter(tag => tag !== tagToRemove));
  };

  return (
    <Tags
      tags={skills}
      onTagAdd={handleTagAdd}
      onTagRemove={handleTagRemove}
      editable={true}
      placeholder="Add a skill..."
      color="blue"
      variant="default"
    />
  );
};`;

  const variantsCode = `// Different variants
<Tags tags={['Tag 1', 'Tag 2']} variant="default" color="blue" />
<Tags tags={['Tag 1', 'Tag 2']} variant="outlined" color="green" />
<Tags tags={['Tag 1', 'Tag 2']} variant="filled" color="purple" />
<Tags tags={['Tag 1', 'Tag 2']} variant="minimal" color="yellow" />

// Different colors
<Tags tags={['Blue']} color="blue" />
<Tags tags={['Green']} color="green" />
<Tags tags={['Red']} color="red" />
<Tags tags={['Yellow']} color="yellow" />
<Tags tags={['Purple']} color="purple" />
<Tags tags={['Pink']} color="pink" />
<Tags tags={['Gray']} color="gray" />

// Different sizes
<Tags tags={['Small']} size="small" />
<Tags tags={['Medium']} size="medium" />
<Tags tags={['Large']} size="large" />`;

  const interactiveCode = `// Clickable tags
<Tags
  tags={tags}
  onTagClick={(tag) => alert(\`Clicked: \${tag}\`)}
  clickable={true}
  color="blue"
/>

// Read-only tags
<Tags
  tags={['HTML', 'CSS', 'JavaScript']}
  removable={false}
  editable={false}
  color="green"
/>

// With max tags limit
<Tags
  tags={skills}
  onTagAdd={handleTagAdd}
  onTagRemove={handleTagRemove}
  editable={true}
  maxTags={10}
  placeholder="Max 10 skills..."
/>`;

  const collectionsCode = `import { TagCollections } from 'vj-ui-components';

// Predefined collections
<Tags tags={TagCollections.skills.slice(0, 4)} color="blue" />
<Tags tags={TagCollections.categories} color="green" />
<Tags tags={TagCollections.priorities} color="red" />
<Tags tags={TagCollections.status} color="purple" />

// Available collections:
// - TagCollections.skills
// - TagCollections.categories  
// - TagCollections.priorities
// - TagCollections.status
// - TagCollections.colors`;

  const propsData = [
    {
      prop: 'tags',
      type: 'string[]',
      default: '[]',
      description: 'Array of tag strings to display'
    },
    {
      prop: 'onTagAdd',
      type: 'function',
      default: 'undefined',
      description: 'Callback when a new tag is added'
    },
    {
      prop: 'onTagRemove',
      type: 'function',
      default: 'undefined',
      description: 'Callback when a tag is removed'
    },
    {
      prop: 'onTagClick',
      type: 'function',
      default: 'undefined',
      description: 'Callback when a tag is clicked'
    },
    {
      prop: 'editable',
      type: 'boolean',
      default: 'false',
      description: 'Whether tags can be added via input'
    },
    {
      prop: 'removable',
      type: 'boolean',
      default: 'true',
      description: 'Whether tags can be removed'
    },
    {
      prop: 'clickable',
      type: 'boolean',
      default: 'false',
      description: 'Whether tags are clickable'
    },
    {
      prop: 'maxTags',
      type: 'number',
      default: 'undefined',
      description: 'Maximum number of tags allowed'
    },
    {
      prop: 'placeholder',
      type: 'string',
      default: 'Add tag...',
      description: 'Placeholder text for input field'
    },
    {
      prop: 'variant',
      type: 'string',
      default: 'default',
      description: 'Style variant: "default", "outlined", "filled", "minimal"'
    },
    {
      prop: 'color',
      type: 'string',
      default: 'blue',
      description: 'Color theme: "blue", "green", "red", "yellow", "purple", "pink", "gray"'
    },
    {
      prop: 'size',
      type: 'string',
      default: 'medium',
      description: 'Size: "small", "medium", "large"'
    }
  ];

  const styles = {
    container: {
      padding: '1.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      color: primaryTextColor,
      backgroundColor: theme?.backgroundColor || '#ffffff',
      minHeight: '100vh'
    },
    header: {
      borderBottom: `1px solid ${isLight ? '#e5e7eb' : '#374151'}`,
      paddingBottom: '1rem',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: primaryTextColor,
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: secondaryTextColor,
      marginBottom: '1rem'
    },
    tabContainer: {
      borderBottom: `1px solid ${isLight ? '#e5e7eb' : '#374151'}`,
      marginBottom: '2rem'
    },
    tabs: {
      display: 'flex',
      gap: '0.5rem',
      overflowX: 'auto'
    },
    tab: {
      padding: '0.75rem 1rem',
      border: 'none',
      backgroundColor: 'transparent',
      color: secondaryTextColor,
      cursor: 'pointer',
      borderRadius: '0.375rem 0.375rem 0 0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      borderBottom: '2px solid transparent'
    },
    activeTab: {
      color: theme?.primaryColor || '#3b82f6',
      backgroundColor: isLight ? '#f8fafc' : '#1e293b',
      borderBottomColor: theme?.primaryColor || '#3b82f6'
    },
    section: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: primaryTextColor,
      marginBottom: '1rem'
    },
    codeBlock: {
      backgroundColor: isLight ? '#1e293b' : '#0f172a',
      color: '#e2e8f0',
      padding: '1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      overflow: 'auto',
      position: 'relative',
      marginBottom: '1rem'
    },
    copyButton: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      padding: '0.25rem 0.5rem',
      backgroundColor: theme?.primaryColor || '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '1rem',
      border: `1px solid ${isLight ? '#e5e7eb' : '#374151'}`
    },
    th: {
      padding: '0.75rem',
      textAlign: 'left',
      backgroundColor: isLight ? '#f9fafb' : '#1f2937',
      borderBottom: `1px solid ${isLight ? '#e5e7eb' : '#374151'}`,
      fontWeight: '600',
      color: primaryTextColor
    },
    td: {
      padding: '0.75rem',
      borderBottom: `1px solid ${isLight ? '#e5e7eb' : '#374151'}`,
      color: primaryTextColor
    },
    code: {
      backgroundColor: isLight ? '#f1f5f9' : '#334155',
      padding: '0.125rem 0.25rem',
      borderRadius: '0.25rem',
      fontSize: '0.875rem',
      fontFamily: 'Monaco, Consolas, monospace'
    },
    badge: {
      backgroundColor: theme?.primaryColor || '#3b82f6',
      color: 'white',
      padding: '0.125rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    exampleContainer: {
      padding: '1.5rem',
      border: `1px solid ${isLight ? '#e5e7eb' : '#374151'}`,
      borderRadius: '0.5rem',
      backgroundColor: isLight ? '#f9fafb' : '#1f2937',
      marginBottom: '2rem'
    },
    tag: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      padding: '0.25rem 0.75rem',
      backgroundColor: '#3b82f6',
      color: 'white',
      borderRadius: '1rem',
      fontSize: '0.875rem',
      margin: '0.125rem'
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Installation</h3>
              <div style={styles.codeBlock}>
                <button 
                  style={styles.copyButton}
                  onClick={() => copyToClipboard('npm install vj-ui-components')}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>npm install vj-ui-components</pre>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Basic Usage</h3>
              <p style={{ color: secondaryTextColor, marginBottom: '1rem' }}>
                The Tags component allows you to display, add, and remove tags with a clean interface.
              </p>
              <div style={styles.codeBlock}>
                <button 
                  style={styles.copyButton}
                  onClick={() => copyToClipboard(basicUsageCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>{basicUsageCode}</pre>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Interactive Features</h3>
              <div style={styles.codeBlock}>
                <button 
                  style={styles.copyButton}
                  onClick={() => copyToClipboard(interactiveCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>{interactiveCode}</pre>
              </div>
            </div>
          </div>
        );

      case 'variants':
        return (
          <div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Variants, Colors & Sizes</h3>
              <p style={{ color: secondaryTextColor, marginBottom: '1rem' }}>
                Customize the appearance of tags with different variants, colors, and sizes.
              </p>
              <div style={styles.codeBlock}>
                <button 
                  style={styles.copyButton}
                  onClick={() => copyToClipboard(variantsCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>{variantsCode}</pre>
              </div>
            </div>
          </div>
        );

      case 'collections':
        return (
          <div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Predefined Tag Collections</h3>
              <p style={{ color: secondaryTextColor, marginBottom: '1rem' }}>
                Use predefined collections for common tag categories.
              </p>
              <div style={styles.codeBlock}>
                <button 
                  style={styles.copyButton}
                  onClick={() => copyToClipboard(collectionsCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || 'Copy'}
                </button>
                <pre>{collectionsCode}</pre>
              </div>
            </div>
          </div>
        );

      case 'props':
        return (
          <div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Tags Props</h3>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Prop</th>
                    <th style={styles.th}>Type</th>
                    <th style={styles.th}>Default</th>
                    <th style={styles.th}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {propsData.map((prop, index) => (
                    <tr key={index}>
                      <td style={styles.td}>
                        <code style={styles.code}>{prop.prop}</code>
                      </td>
                      <td style={styles.td}>
                        <span style={styles.badge}>{prop.type}</span>
                      </td>
                      <td style={styles.td}>
                        <code style={styles.code}>{prop.default}</code>
                      </td>
                      <td style={styles.td}>{prop.description}</td>
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
              
              {/* Editable Tags Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Editable Tags (Add & Remove)</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`const [skills, setSkills] = useState(['JavaScript', 'React']);

<Tags
  tags={skills}
  onTagAdd={(tag) => setSkills([...skills, tag])}
  onTagRemove={(tagToRemove) => 
    setSkills(skills.filter(tag => tag !== tagToRemove))
  }
  editable={true}
  removable={true}
  placeholder="Add a skill..."
  color="blue"
  variant="default"
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`const [skills, setSkills] = useState(['JavaScript', 'React']);

<Tags
  tags={skills}
  onTagAdd={(tag) => setSkills([...skills, tag])}
  onTagRemove={(tagToRemove) => 
    setSkills(skills.filter(tag => tag !== tagToRemove))
  }
  editable={true}
  removable={true}
  placeholder="Add a skill..."
  color="blue"
  variant="default"
/>`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Tags 
                    tags={editableSkills} 
                    onTagAdd={(tag) => setEditableSkills([...editableSkills, tag])}
                    onTagRemove={(tagToRemove) => setEditableSkills(editableSkills.filter(tag => tag !== tagToRemove))}
                    editable={true}
                    removable={true}
                    placeholder="Add a skill..."
                    color="blue" 
                    variant="default"
                  />
                  <p className="text-sm mt-2" style={{ color: secondaryTextColor }}>
                    Try typing to add new tags and click × to remove them
                  </p>
                </div>
              </div>

              {/* Default Variant Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Default Variant</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`<Tags 
  tags={['JavaScript', 'React', 'CSS']} 
  variant="default" 
  color="blue" 
  removable={false}
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Tags 
  tags={['JavaScript', 'React', 'CSS']} 
  variant="default" 
  color="blue" 
  removable={false}
/>`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Tags 
                    tags={['JavaScript', 'React', 'CSS']} 
                    variant="default" 
                    color="blue" 
                    removable={false}
                  />
                </div>
              </div>

              {/* Outlined Variant Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Outlined Variant</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`<Tags 
  tags={['Frontend', 'Backend', 'Full Stack']} 
  variant="outlined" 
  color="green" 
  removable={true}
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Tags 
  tags={['Frontend', 'Backend', 'Full Stack']} 
  variant="outlined" 
  color="green" 
  removable={true}
/>`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Tags 
                    tags={frontendBackend} 
                    onTagRemove={(tagToRemove) => setFrontendBackend(frontendBackend.filter(tag => tag !== tagToRemove))}
                    variant="outlined" 
                    color="green" 
                    removable={true}
                  />
                </div>
              </div>

              {/* Filled Variant Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Filled Variant</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`<Tags 
  tags={['Design', 'Development', 'Testing']} 
  variant="filled" 
  color="purple" 
  removable={true}
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Tags 
  tags={['Design', 'Development', 'Testing']} 
  variant="filled" 
  color="purple" 
  removable={true}
/>`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Tags 
                    tags={designDev} 
                    onTagRemove={(tagToRemove) => setDesignDev(designDev.filter(tag => tag !== tagToRemove))}
                    variant="filled" 
                    color="purple" 
                    removable={true}
                  />
                </div>
              </div>

              {/* Minimal Variant Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Minimal Variant</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`<Tags 
  tags={['HTML', 'CSS', 'JS']} 
  variant="minimal" 
  color="yellow" 
  removable={true}
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Tags 
  tags={['HTML', 'CSS', 'JS']} 
  variant="minimal" 
  color="yellow" 
  removable={true}
/>`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Tags 
                    tags={htmlCssJs} 
                    onTagRemove={(tagToRemove) => setHtmlCssJs(htmlCssJs.filter(tag => tag !== tagToRemove))}
                    variant="minimal" 
                    color="yellow" 
                    removable={true}
                  />
                </div>
              </div>

              {/* Clickable Tags Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Clickable Tags</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`<Tags
  tags={['React', 'Vue', 'Angular']}
  onTagClick={(tag) => alert(\`Clicked: \${tag}\`)}
  clickable={true}
  color="red"
  variant="default"
  removable={false}
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Tags
  tags={['React', 'Vue', 'Angular']}
  onTagClick={(tag) => alert(\`Clicked: \${tag}\`)}
  clickable={true}
  color="red"
  variant="default"
  removable={false}
/>`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Tags
                    tags={['React', 'Vue', 'Angular']}
                    onTagClick={(tag) => alert(`Clicked: ${tag}`)}
                    clickable={true}
                    color="red"
                    variant="default"
                    removable={false}
                  />
                  <p className="text-sm mt-2" style={{ color: secondaryTextColor }}>
                    Click on any tag to see the alert
                  </p>
                </div>
              </div>

              {/* Different Colors Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Different Colors</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`<Tags tags={['Blue']} color="blue" />
<Tags tags={['Green']} color="green" />
<Tags tags={['Red']} color="red" />
<Tags tags={['Yellow']} color="yellow" />
<Tags tags={['Purple']} color="purple" />
<Tags tags={['Pink']} color="pink" />
<Tags tags={['Gray']} color="gray" />`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Tags tags={['Blue']} color="blue" />
<Tags tags={['Green']} color="green" />
<Tags tags={['Red']} color="red" />
<Tags tags={['Yellow']} color="yellow" />
<Tags tags={['Purple']} color="purple" />
<Tags tags={['Pink']} color="pink" />
<Tags tags={['Gray']} color="gray" />`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="flex flex-wrap gap-2">
                    <Tags tags={['Blue']} color="blue" removable={false} />
                    <Tags tags={['Green']} color="green" removable={false} />
                    <Tags tags={['Red']} color="red" removable={false} />
                    <Tags tags={['Yellow']} color="yellow" removable={false} />
                    <Tags tags={['Purple']} color="purple" removable={false} />
                    <Tags tags={['Pink']} color="pink" removable={false} />
                    <Tags tags={['Gray']} color="gray" removable={false} />
                  </div>
                </div>
              </div>

              {/* Different Sizes Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Different Sizes</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`<Tags tags={['Small']} size="small" color="blue" />
<Tags tags={['Medium']} size="medium" color="blue" />
<Tags tags={['Large']} size="large" color="blue" />`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Tags tags={['Small']} size="small" color="blue" />
<Tags tags={['Medium']} size="medium" color="blue" />
<Tags tags={['Large']} size="large" color="blue" />`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-16" style={{ color: secondaryTextColor }}>Small:</span>
                      <Tags tags={['Small']} size="small" color="blue" removable={false} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-16" style={{ color: secondaryTextColor }}>Medium:</span>
                      <Tags tags={['Medium']} size="medium" color="blue" removable={false} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-16" style={{ color: secondaryTextColor }}>Large:</span>
                      <Tags tags={['Large']} size="large" color="blue" removable={false} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Max Tags Limit Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Max Tags Limit</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`<Tags
  tags={['Tag 1', 'Tag 2']}
  editable={true}
  maxTags={3}
  placeholder="Max 3 tags..."
  color="orange"
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`<Tags
  tags={['Tag 1', 'Tag 2']}
  editable={true}
  maxTags={3}
  placeholder="Max 3 tags..."
  color="orange"
/>`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Tags
                    tags={limitedTags}
                    onTagAdd={(tag) => setLimitedTags([...limitedTags, tag])}
                    onTagRemove={(tagToRemove) => setLimitedTags(limitedTags.filter(tag => tag !== tagToRemove))}
                    editable={true}
                    maxTags={3}
                    placeholder="Max 3 tags..."
                    color="orange"
                  />
                  <p className="text-sm mt-2" style={{ color: secondaryTextColor }}>
                    Try adding more than 3 tags - the input will be disabled
                  </p>
                </div>
              </div>

              {/* Predefined Collections Example */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Predefined Collections</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`import { TagCollections } from 'vj-ui-components';

// Skills collection
<Tags tags={TagCollections.skills.slice(0, 4)} color="blue" />

// Categories collection  
<Tags tags={TagCollections.categories} color="green" />

// Priorities collection
<Tags tags={TagCollections.priorities} color="red" />

// Status collection
<Tags tags={TagCollections.status} color="purple" />`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`import { TagCollections } from 'vj-ui-components';

// Skills collection
<Tags tags={TagCollections.skills.slice(0, 4)} color="blue" />

// Categories collection  
<Tags tags={TagCollections.categories} color="green" />

// Priorities collection
<Tags tags={TagCollections.priorities} color="red" />

// Status collection
<Tags tags={TagCollections.status} color="purple" />`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <div className="flex flex-col gap-4">
                    <div>
                      <span className="text-sm font-medium mb-2 block" style={{ color: secondaryTextColor }}>Skills:</span>
                      <Tags tags={TagCollections.skills.slice(0, 4)} color="blue" removable={false} />
                    </div>
                    <div>
                      <span className="text-sm font-medium mb-2 block" style={{ color: secondaryTextColor }}>Categories:</span>
                      <Tags tags={TagCollections.categories.slice(0, 3)} color="green" removable={false} />
                    </div>
                    <div>
                      <span className="text-sm font-medium mb-2 block" style={{ color: secondaryTextColor }}>Priorities:</span>
                      <Tags tags={TagCollections.priorities} color="red" removable={false} />
                    </div>
                    <div>
                      <span className="text-sm font-medium mb-2 block" style={{ color: secondaryTextColor }}>Status:</span>
                      <Tags tags={TagCollections.status.slice(0, 3)} color="purple" removable={false} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Example with State Management */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4" style={{ color: primaryTextColor }}>Advanced State Management</h4>
                <div style={styles.codeBlock}>
                  <button 
                    style={styles.copyButton}
                    onClick={() => copyToClipboard(`const [technologies, setTechnologies] = useState([
  'React', 'Node.js', 'MongoDB'
]);

const handleAddTech = (tech) => {
  if (!technologies.includes(tech)) {
    setTechnologies([...technologies, tech]);
  }
};

const handleRemoveTech = (techToRemove) => {
  setTechnologies(technologies.filter(tech => tech !== techToRemove));
};

const handleTechClick = (tech) => {
  console.log(\`Selected technology: \${tech}\`);
};

<Tags
  tags={technologies}
  onTagAdd={handleAddTech}
  onTagRemove={handleRemoveTech}
  onTagClick={handleTechClick}
  editable={true}
  clickable={true}
  removable={true}
  placeholder="Add technology..."
  maxTags={10}
  color="blue"
  variant="outlined"
  size="medium"
/>`)}
                  >
                    <IconCopy size={12} />
                    {copySuccess || 'Copy'}
                  </button>
                  <pre>{`const [technologies, setTechnologies] = useState([
  'React', 'Node.js', 'MongoDB'
]);

const handleAddTech = (tech) => {
  if (!technologies.includes(tech)) {
    setTechnologies([...technologies, tech]);
  }
};

const handleRemoveTech = (techToRemove) => {
  setTechnologies(technologies.filter(tech => tech !== techToRemove));
};

const handleTechClick = (tech) => {
  console.log(\`Selected technology: \${tech}\`);
};

<Tags
  tags={technologies}
  onTagAdd={handleAddTech}
  onTagRemove={handleRemoveTech}
  onTagClick={handleTechClick}
  editable={true}
  clickable={true}
  removable={true}
  placeholder="Add technology..."
  maxTags={10}
  color="blue"
  variant="outlined"
  size="medium"
/>`}</pre>
                </div>
                <div className={`p-6 border rounded-lg ${isLight ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}`}>
                  <Tags
                    tags={technologies}
                    onTagAdd={(tech) => {
                      if (!technologies.includes(tech)) {
                        setTechnologies([...technologies, tech]);
                      }
                    }}
                    onTagRemove={(techToRemove) => setTechnologies(technologies.filter(tech => tech !== techToRemove))}
                    onTagClick={(tech) => {
                      console.log(`Selected technology: ${tech}`);
                      alert(`Selected technology: ${tech}`);
                    }}
                    editable={true}
                    clickable={true}
                    removable={true}
                    placeholder="Add technology..."
                    maxTags={10}
                    color="blue"
                    variant="outlined"
                    size="medium"
                  />
                  <p className="text-sm mt-2" style={{ color: secondaryTextColor }}>
                    This example combines adding, removing, and clicking functionality
                  </p>
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
          <IconTag size={32} color={theme?.primaryColor || '#3b82f6'} />
          Tags Component
        </h1>
        <p className="text-lg" style={{ color: secondaryTextColor }}>
          Interactive tag components for categorizing and organizing content with support for adding, removing, and clicking.
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

export default TagsDocs;
