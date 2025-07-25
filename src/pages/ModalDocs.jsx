import React, { useState } from 'react';
import { 
  IconWindowMaximize, IconEye, IconCopy, IconDownload, IconCheck,
  IconTrash, IconEdit, IconSettings, IconUser,  
  IconAlertTriangle, IconX, IconPhoto, IconFileText, IconMail, 
  IconBell, IconMaximize, IconMinimize,
  IconInfoCircle
} from '@tabler/icons-react';
import { Modal } from 'vj-ui-components';

const ModalDocs = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [copySuccess, setCopySuccess] = useState('');

  // Modal state for examples
  const [modals, setModals] = useState({
    basic: false,
    confirm: false,
    form: false,
    fullscreen: false,
    glassmorphism: false,
    settings: false,
    sizes: false,
    animations: false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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

  const toggleModal = (modalName) => {
    setModals(prev => ({
      ...prev,
      [modalName]: !prev[modalName]
    }));
  };

  const handleFormSubmit = () => {
    alert('Form submitted!');
    toggleModal('form');
    setFormData({ name: '', email: '', message: '' });
  };

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
    { id: 'variants', label: 'Variants', icon: <IconPhoto size={16} /> },
    { id: 'sizes', label: 'Sizes', icon: <IconMaximize size={16} /> },
    { id: 'animations', label: 'Animations', icon: <IconSettings size={16} /> },
    { id: 'props', label: 'Props', icon: <IconFileText size={16} /> },
    { id: 'examples', label: 'Live Examples', icon: <IconEye size={16} /> }
  ];

  // Code examples
  const basicUsageCode = `import { Modal } from 'vj-ui-components';
import { IconInfo } from '@tabler/icons-react';

const BasicModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Basic Modal"
        size="md"
        variant="default"
      >
        <div>
          <p>This is a basic modal with default styling.</p>
          <p>Click the X button or press Escape to close.</p>
        </div>
      </Modal>
    </>
  );
};`;

  const variantsCode = `// Default variant
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Default Modal"
  variant="default"
>
  Content here
</Modal>

// Glassmorphism variant
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Glassmorphism Modal"
  variant="glassmorphism"
  primaryColor="#8b5cf6"
  backgroundColor="rgba(139, 92, 246, 0.1)"
>
  Beautiful glass effect modal
</Modal>

// Card variant
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Card Modal"
  variant="card"
>
  Card-style modal with rounded corners
</Modal>

// Minimal variant
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Minimal Modal"
  variant="minimal"
>
  Clean minimal design
</Modal>`;

  const sizesCode = `// Extra Small
<Modal size="xs" title="XS Modal">...</Modal>

// Small
<Modal size="sm" title="Small Modal">...</Modal>

// Medium (default)
<Modal size="md" title="Medium Modal">...</Modal>

// Large
<Modal size="lg" title="Large Modal">...</Modal>

// Extra Large
<Modal size="xl" title="XL Modal">...</Modal>

// Full screen
<Modal size="full" title="Fullscreen Modal">...</Modal>`;

  const animationsCode = `// Fade animation (default)
<Modal enterAnimation="fade">...</Modal>

// Scale with fade
<Modal enterAnimation="fadeScale">...</Modal>

// Slide from top
<Modal enterAnimation="slideDown">...</Modal>

// Slide from bottom
<Modal enterAnimation="slideUp">...</Modal>

// Slide from left
<Modal enterAnimation="slideLeft">...</Modal>

// Slide from right
<Modal enterAnimation="slideRight">...</Modal>

// Custom duration
<Modal 
  enterAnimation="fadeScale"
  animationDuration={500}
>
  ...
</Modal>`;

  const confirmationCode = `<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Delete Item"
  size="sm"
  showConfirmButton={true}
  showCancelButton={true}
  confirmText="Delete"
  cancelText="Cancel"
  confirmButtonVariant="danger"
  onConfirm={() => {
    // Handle confirmation
    console.log('Item deleted');
    onClose();
  }}
  onCancel={onClose}
  primaryColor="#ef4444"
>
  <p>Are you sure you want to delete this item?</p>
</Modal>`;

  const propsData = [
    { name: 'isOpen', type: 'boolean', default: 'false', description: 'Controls whether the modal is visible' },
    { name: 'onClose', type: 'function', default: 'undefined', description: 'Callback fired when modal should close' },
    { name: 'title', type: 'string', default: '""', description: 'Title displayed in modal header' },
    { name: 'children', type: 'ReactNode', default: 'undefined', description: 'Content to display in modal body' },
    { name: 'size', type: 'string', default: '"md"', description: 'Modal size: "xs", "sm", "md", "lg", "xl", "full"' },
    { name: 'variant', type: 'string', default: '"default"', description: 'Visual variant: "default", "glassmorphism", "card", "minimal"' },
    { name: 'primaryColor', type: 'string', default: '"#6366f1"', description: 'Primary theme color' },
    { name: 'backgroundColor', type: 'string', default: '"#ffffff"', description: 'Background color of modal' },
    { name: 'enterAnimation', type: 'string', default: '"fade"', description: 'Entry animation: "fade", "fadeScale", "slideUp", "slideDown", "slideLeft", "slideRight"' },
    { name: 'animationDuration', type: 'number', default: '300', description: 'Animation duration in milliseconds' },
    { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'Show close button in header' },
    { name: 'showConfirmButton', type: 'boolean', default: 'false', description: 'Show confirm button in footer' },
    { name: 'showCancelButton', type: 'boolean', default: 'false', description: 'Show cancel button in footer' },
    { name: 'confirmText', type: 'string', default: '"Confirm"', description: 'Text for confirm button' },
    { name: 'cancelText', type: 'string', default: '"Cancel"', description: 'Text for cancel button' },
    { name: 'onConfirm', type: 'function', default: 'undefined', description: 'Callback for confirm button click' },
    { name: 'onCancel', type: 'function', default: 'undefined', description: 'Callback for cancel button click' },
    { name: 'confirmButtonVariant', type: 'string', default: '"primary"', description: 'Confirm button style: "primary", "danger", "success"' },
    { name: 'showMaximizeButton', type: 'boolean', default: 'false', description: 'Show maximize/minimize button' },
    { name: 'closeOnBackdropClick', type: 'boolean', default: 'true', description: 'Close modal when clicking backdrop' },
    { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Close modal when pressing Escape key' },
    { name: 'preventBodyScroll', type: 'boolean', default: 'true', description: 'Prevent body scrolling when modal is open' }
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
            <div className="p-3 bg-purple-100 rounded-lg">
              <IconWindowMaximize size={32} className="text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold" style={{ color: primaryTextColor }}>Modal Component</h1>
              <p style={{ color: secondaryTextColor }}>Flexible and customizable modal dialogs with animations and variants</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white rounded-lg shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Basic Usage Tab */}
        {activeTab === 'basic' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Basic Usage</h2>
              <p className="mb-6 text-gray-600">
                The Modal component provides a flexible way to display content in an overlay. 
                Import it from vj-ui-components and use it with minimal configuration.
              </p>
              
              {/* Live Example First */}
              <div className="space-y-6 mb-6">
                <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Try it out:</h3>
                  <button
                    onClick={() => toggleModal('basic')}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <IconInfoCircle size={20} />
                    Open Basic Modal
                  </button>
                </div>
              </div>

              {/* Code Example Below */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Basic Usage Code:</span>
                  <button
                    onClick={() => copyToClipboard(basicUsageCode)}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-200"
                  >
                    {copySuccess === 'Copied!' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                    {copySuccess || 'Copy'}
                  </button>
                </div>
                <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{basicUsageCode}</code>
                </pre>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-blue-900">Key Features:</h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• Keyboard accessibility (Escape key support)</li>
                  <li>• Click outside to close</li>
                  <li>• Body scroll prevention</li>
                  <li>• Smooth animations</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Variants Tab */}
        {activeTab === 'variants' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Modal Variants</h2>
              <p className="mb-6 text-gray-600">
                Choose from different visual styles to match your design needs.
              </p>
              
              {/* Live Examples First */}
              <div className="space-y-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Default</h4>
                    <p className="text-sm mb-3 text-gray-600">Clean, minimal design</p>
                    <button
                      onClick={() => toggleModal('basic')}
                      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                    >
                      Open Default
                    </button>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Glassmorphism</h4>
                    <p className="text-sm mb-3 text-gray-600">Beautiful frosted glass effect</p>
                    <button
                      onClick={() => toggleModal('glassmorphism')}
                      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                    >
                      Open Glassmorphism
                    </button>
                  </div>
                </div>
              </div>

              {/* Code Example Below */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Variants Code:</span>
                  <button
                    onClick={() => copyToClipboard(variantsCode)}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-200"
                  >
                    {copySuccess === 'Copied!' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                    {copySuccess || 'Copy'}
                  </button>
                </div>
                <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{variantsCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Sizes Tab */}
        {activeTab === 'sizes' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Modal Sizes</h2>
              <p className="mb-6 text-gray-600">
                Different size options to fit your content needs.
              </p>
              
              {/* Live Examples First */}
              <div className="space-y-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { size: 'xs', label: 'Extra Small', width: '300px' },
                    { size: 'sm', label: 'Small', width: '400px' },
                    { size: 'md', label: 'Medium', width: '600px' },
                    { size: 'lg', label: 'Large', width: '800px' },
                    { size: 'xl', label: 'Extra Large', width: '1200px' },
                    { size: 'full', label: 'Full Screen', width: '100%' }
                  ].map((sizeOption) => (
                    <div key={sizeOption.size} className="p-4 bg-gray-50 rounded-lg text-center">
                      <h4 className="font-semibold mb-1 text-gray-900">{sizeOption.label}</h4>
                      <p className="text-xs mb-3 text-gray-600">{sizeOption.width}</p>
                      <button
                        onClick={() => toggleModal('sizes')}
                        className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        Open {sizeOption.size.toUpperCase()}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Example Below */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Sizes Code:</span>
                  <button
                    onClick={() => copyToClipboard(sizesCode)}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-200"
                  >
                    {copySuccess === 'Copied!' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                    {copySuccess || 'Copy'}
                  </button>
                </div>
                <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{sizesCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Animations Tab */}
        {activeTab === 'animations' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Animations</h2>
              <p className="mb-6 text-gray-600">
                Customize the entrance and exit animations for your modals.
              </p>
              
              {/* Live Examples First */}
              <div className="space-y-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { animation: 'fade', label: 'Fade' },
                    { animation: 'fadeScale', label: 'Fade + Scale' },
                    { animation: 'slideUp', label: 'Slide Up' },
                    { animation: 'slideDown', label: 'Slide Down' },
                    { animation: 'slideLeft', label: 'Slide Left' },
                    { animation: 'slideRight', label: 'Slide Right' }
                  ].map((animOption) => (
                    <div key={animOption.animation} className="p-4 bg-gray-50 rounded-lg text-center">
                      <h4 className="font-semibold mb-3 text-gray-900">{animOption.label}</h4>
                      <button
                        onClick={() => toggleModal('animations')}
                        className="px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                      >
                        Try {animOption.label}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Example Below */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Animations Code:</span>
                  <button
                    onClick={() => copyToClipboard(animationsCode)}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-200"
                  >
                    {copySuccess === 'Copied!' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                    {copySuccess || 'Copy'}
                  </button>
                </div>
                <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{animationsCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Props Tab */}
        {activeTab === 'props' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Props Reference</h2>
              <p className="mb-6 text-gray-600">
                Complete list of props available for the Modal component.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-900">Prop</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-900">Type</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-900">Default</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((prop, index) => (
                      <tr key={prop.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-4 py-3 font-mono text-sm text-purple-600">{prop.name}</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">{prop.type}</td>
                        <td className="border border-gray-200 px-4 py-3 font-mono text-sm text-gray-600">{prop.default}</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">{prop.description}</td>
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
                {/* Modal Trigger Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Basic Modal */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-center">
                    <IconInfoCircle size={32} className="mx-auto mb-3 text-blue-600" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Basic Modal</h3>
                    <p className="text-sm mb-4 text-gray-600">Simple modal with default styling</p>
                    <button
                      onClick={() => toggleModal('basic')}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Open Basic
                    </button>
                  </div>

                  {/* Confirmation Modal */}
                  <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl text-center">
                    <IconAlertTriangle size={32} className="mx-auto mb-3 text-red-600" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Confirmation</h3>
                    <p className="text-sm mb-4 text-gray-600">Confirm or cancel actions</p>
                    <button
                      onClick={() => toggleModal('confirm')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Open Confirm
                    </button>
                  </div>

                  {/* Form Modal */}
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl text-center">
                    <IconEdit size={32} className="mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Form Modal</h3>
                    <p className="text-sm mb-4 text-gray-600">Modal with form inputs</p>
                    <button
                      onClick={() => toggleModal('form')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Open Form
                    </button>
                  </div>

                  {/* Glassmorphism Modal */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl text-center">
                    <IconPhoto size={32} className="mx-auto mb-3 text-purple-600" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Glassmorphism</h3>
                    <p className="text-sm mb-4 text-gray-600">Beautiful glass effect</p>
                    <button
                      onClick={() => toggleModal('glassmorphism')}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Open Glass
                    </button>
                  </div>

                  {/* Fullscreen Modal */}
                  <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl text-center">
                    <IconMaximize size={32} className="mx-auto mb-3 text-yellow-600" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Fullscreen</h3>
                    <p className="text-sm mb-4 text-gray-600">Full screen modal</p>
                    <button
                      onClick={() => toggleModal('fullscreen')}
                      className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                      Open Fullscreen
                    </button>
                  </div>

                  {/* Settings Modal */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-center">
                    <IconSettings size={32} className="mx-auto mb-3 text-gray-600" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Settings</h3>
                    <p className="text-sm mb-4 text-gray-600">Complex settings modal</p>
                    <button
                      onClick={() => toggleModal('settings')}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Open Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Modal Examples */}
        
        {/* Basic Modal */}
        <Modal
          isOpen={modals.basic}
          onClose={() => toggleModal('basic')}
          title="Basic Modal"
          size="md"
          variant="default"
        >
          <div>
            <p className="mb-4">This is a basic modal with default styling. It includes a title, close button, and can contain any content you need.</p>
            <p className="text-gray-600">Click the X button or press Escape to close the modal.</p>
          </div>
        </Modal>

        {/* Confirmation Modal */}
        <Modal
          isOpen={modals.confirm}
          onClose={() => toggleModal('confirm')}
          title="Delete Item"
          size="sm"
          variant="default"
          showConfirmButton={true}
          showCancelButton={true}
          confirmText="Delete"
          cancelText="Cancel"
          confirmButtonVariant="danger"
          onConfirm={() => {
            alert('Item deleted!');
            toggleModal('confirm');
          }}
          onCancel={() => toggleModal('confirm')}
          primaryColor="#ef4444"
        >
          <div className="flex items-center gap-3 mb-4">
            <IconTrash size={20} className="text-red-500" />
            <span className="font-medium">Are you sure?</span>
          </div>
          <p className="text-gray-600">This action cannot be undone. The item will be permanently deleted from your account.</p>
        </Modal>

        {/* Form Modal */}
        <Modal
          isOpen={modals.form}
          onClose={() => toggleModal('form')}
          title="Contact Form"
          size="md"
          variant="default"
          showConfirmButton={true}
          showCancelButton={true}
          confirmText="Send Message"
          cancelText="Cancel"
          onConfirm={handleFormSubmit}
          onCancel={() => toggleModal('form')}
          primaryColor="#10b981"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                placeholder="Enter your message"
              />
            </div>
          </div>
        </Modal>

        {/* Glassmorphism Modal */}
        <Modal
          isOpen={modals.glassmorphism}
          onClose={() => toggleModal('glassmorphism')}
          title="Glassmorphism Design"
          size="lg"
          variant="glassmorphism"
          primaryColor="#8b5cf6"
          backgroundColor="rgba(139, 92, 246, 0.1)"
          enterAnimation="fadeScale"
        >
          <div>
            <p className="mb-6">This modal showcases the glassmorphism design variant with beautiful frosted glass effects, backdrop blur, and subtle transparency.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-4 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                  <h4 className="font-medium mb-2">Feature {i}</h4>
                  <p className="text-sm opacity-80">Beautiful glass card with transparency</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600">The glassmorphism effect creates depth and visual hierarchy while maintaining elegance.</p>
          </div>
        </Modal>

        {/* Fullscreen Modal */}
        <Modal
          isOpen={modals.fullscreen}
          onClose={() => toggleModal('fullscreen')}
          title="Document Viewer"
          size="full"
          variant="default"
          showMaximizeButton={true}
          enterAnimation="slideUp"
        >
          <div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Document Content</h3>
              <p className="mb-4">This is a fullscreen modal perfect for displaying documents, images, or any content that benefits from maximum screen real estate.</p>
              <p className="mb-4">You can also use the maximize button to toggle between normal and fullscreen modes.</p>
              <p>The modal supports scrolling when content exceeds the available height, ensuring all content remains accessible regardless of screen size.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Array.from({length: 12}, (_, i) => (
                <div key={i} className="h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-medium">
                  Item {i + 1}
                </div>
              ))}
            </div>
          </div>
        </Modal>

        {/* Settings Modal */}
        <Modal
          isOpen={modals.settings}
          onClose={() => toggleModal('settings')}
          title="Application Settings"
          size="lg"
          variant="card"
          enterAnimation="slideRight"
        >
          <div className="space-y-6">
            {/* User Settings */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <IconUser size={20} />
                User Preferences
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Email notifications</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="rounded" />
                  <span>SMS notifications</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Marketing emails</span>
                </label>
              </div>
            </div>

            {/* Theme Settings */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <IconPhoto size={20} />
                Theme Settings
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="radio" name="theme" defaultChecked />
                  <span>Light theme</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="theme" />
                  <span>Dark theme</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="theme" />
                  <span>Auto (system)</span>
                </label>
              </div>
            </div>

            {/* Language Settings */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <IconMail size={20} />
                Language & Region
              </h3>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </Modal>

        {/* Features Overview */}
        <div className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-xl shadow-sm p-8 border border-white/50 mt-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: primaryTextColor }}>Modal Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-purple-600">🎨 Design Variants</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Default clean design</li>
                <li>• Glassmorphism with blur effects</li>
                <li>• Minimal with subtle borders</li>
                <li>• Card style with rounded corners</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-blue-600">📐 Size Options</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Extra small (xs) - 300px</li>
                <li>• Small (sm) - 400px</li>
                <li>• Medium (md) - 600px</li>
                <li>• Large (lg) - 800px</li>
                <li>• Extra large (xl) - 1200px</li>
                <li>• Full screen support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-green-600">✨ Animations</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Fade in/out</li>
                <li>• Scale with fade</li>
                <li>• Slide from all directions</li>
                <li>• Customizable duration</li>
                <li>• Smooth transitions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-orange-600">🎛️ Behavior</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Backdrop click to close</li>
                <li>• Escape key support</li>
                <li>• Body scroll prevention</li>
                <li>• Maximize/minimize</li>
                <li>• Custom buttons</li>
                <li>• Form integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDocs;
