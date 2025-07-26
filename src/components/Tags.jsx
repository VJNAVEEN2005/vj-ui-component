import React, { useState, useRef, useEffect } from 'react';

// Predefined tag collections
export const TagCollections = {
  skills: [
    'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Node.js', 
    'Python', 'Java', 'C++', 'HTML', 'CSS', 'SASS', 'MongoDB', 
    'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'Git'
  ],
  categories: [
    'Work', 'Personal', 'Important', 'Urgent', 'Ideas', 'Projects', 
    'Learning', 'Health', 'Finance', 'Travel'
  ],
  priorities: ['Low', 'Medium', 'High', 'Critical'],
  status: ['Todo', 'In Progress', 'Review', 'Done', 'Cancelled'],
  colors: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Gray']
};

const Tags = ({
  tags = [],
  onTagAdd,
  onTagRemove,
  onTagClick,
  editable = false,
  removable = true,
  clickable = false,
  maxTags,
  placeholder = 'Add tag...',
  variant = 'default',
  color = 'blue',
  size = 'medium',
  style = {},
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null);

  const colorMap = {
    blue: {
      bg: '#dbeafe',
      text: '#1e40af',
      border: '#3b82f6',
      hover: '#bfdbfe'
    },
    green: {
      bg: '#dcfce7',
      text: '#166534',
      border: '#22c55e',
      hover: '#bbf7d0'
    },
    red: {
      bg: '#fee2e2',
      text: '#dc2626',
      border: '#ef4444',
      hover: '#fecaca'
    },
    yellow: {
      bg: '#fef3c7',
      text: '#d97706',
      border: '#f59e0b',
      hover: '#fde68a'
    },
    purple: {
      bg: '#ede9fe',
      text: '#7c3aed',
      border: '#8b5cf6',
      hover: '#ddd6fe'
    },
    pink: {
      bg: '#fce7f3',
      text: '#be185d',
      border: '#ec4899',
      hover: '#fbcfe8'
    },
    gray: {
      bg: '#f3f4f6',
      text: '#374151',
      border: '#6b7280',
      hover: '#e5e7eb'
    }
  };

  const sizeMap = {
    small: {
      fontSize: '0.75rem',
      padding: '0.125rem 0.5rem',
      gap: '0.25rem',
      borderRadius: '0.75rem'
    },
    medium: {
      fontSize: '0.875rem',
      padding: '0.25rem 0.75rem',
      gap: '0.375rem',
      borderRadius: '1rem'
    },
    large: {
      fontSize: '1rem',
      padding: '0.375rem 1rem',
      gap: '0.5rem',
      borderRadius: '1.25rem'
    }
  };

  const currentColor = colorMap[color] || colorMap.blue;
  const currentSize = sizeMap[size] || sizeMap.medium;

  const getTagStyle = () => {
    const baseStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: currentSize.gap,
      fontSize: currentSize.fontSize,
      padding: currentSize.padding,
      borderRadius: currentSize.borderRadius,
      margin: '0.125rem',
      transition: 'all 0.2s ease',
      cursor: clickable ? 'pointer' : 'default',
      border: variant === 'outlined' ? `1px solid ${currentColor.border}` : 'none',
      ...style
    };

    switch (variant) {
      case 'outlined':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          color: currentColor.text,
          border: `1px solid ${currentColor.border}`
        };
      case 'filled':
        return {
          ...baseStyle,
          backgroundColor: currentColor.border,
          color: 'white'
        };
      case 'minimal':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          color: currentColor.text,
          border: 'none'
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: currentColor.bg,
          color: currentColor.text
        };
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (maxTags && tags.length >= maxTags) {
        return;
      }
      if (!tags.includes(inputValue.trim())) {
        onTagAdd?.(inputValue.trim());
        setInputValue('');
      }
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      onTagRemove?.(tags[tags.length - 1]);
    }
  };

  const handleTagRemove = (e, tagToRemove) => {
    e.stopPropagation();
    onTagRemove?.(tagToRemove);
  };

  const handleTagClick = (tag) => {
    if (clickable) {
      onTagClick?.(tag);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0.25rem',
    padding: editable ? '0.5rem' : '0',
    border: editable ? `1px solid ${isInputFocused ? currentColor.border : '#d1d5db'}` : 'none',
    borderRadius: editable ? '0.5rem' : '0',
    backgroundColor: editable ? '#ffffff' : 'transparent',
    minHeight: editable ? '2.5rem' : 'auto',
    transition: 'border-color 0.2s ease',
    ...style
  };

  const inputStyle = {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: currentSize.fontSize,
    flex: 1,
    minWidth: '120px',
    padding: '0.25rem 0'
  };

  return (
    <div style={containerStyle} {...props}>
      {tags.map((tag, index) => (
        <span
          key={index}
          style={{
            ...getTagStyle(),
            ':hover': clickable ? { backgroundColor: currentColor.hover } : {}
          }}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
          {removable && onTagRemove && (
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                padding: '0',
                marginLeft: '0.25rem',
                fontSize: '1rem',
                lineHeight: 1,
                opacity: 0.7,
                transition: 'opacity 0.2s ease'
              }}
              onClick={(e) => handleTagRemove(e, tag)}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0.7'}
            >
              ×
            </button>
          )}
        </span>
      ))}
      
      {editable && onTagAdd && (!maxTags || tags.length < maxTags) && (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder={placeholder}
          style={inputStyle}
        />
      )}
      
      {maxTags && (
        <span style={{
          fontSize: '0.75rem',
          color: '#6b7280',
          marginLeft: '0.5rem'
        }}>
          {tags.length}/{maxTags}
        </span>
      )}
    </div>
  );
};

export default Tags;
