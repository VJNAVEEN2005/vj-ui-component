import React from 'react';

// Base Skeleton Component
const Skeleton = ({ 
  variant = 'text', 
  width = '100%', 
  height = 'auto', 
  lines = 1,
  animation = 'pulse',
  baseColor = '#e5e7eb',
  highlightColor = '#f3f4f6',
  style = {},
  ...props 
}) => {
  const getSkeletonStyle = () => {
    const baseStyle = {
      backgroundColor: baseColor,
      borderRadius: variant === 'circular' ? '50%' : 
                   variant === 'rounded' ? '8px' : '4px',
      display: 'inline-block',
      width,
      ...style
    };

    if (variant === 'text') {
      return {
        ...baseStyle,
        height: height === 'auto' ? '1em' : height,
        marginBottom: '0.5em'
      };
    }

    if (variant === 'circular') {
      const size = width || height || '40px';
      return {
        ...baseStyle,
        width: size,
        height: size
      };
    }

    return {
      ...baseStyle,
      height: height === 'auto' ? '200px' : height
    };
  };

  const getAnimationClass = () => {
    switch (animation) {
      case 'wave':
        return 'skeleton-wave';
      case 'pulse':
        return 'skeleton-pulse';
      case 'none':
        return '';
      default:
        return 'skeleton-pulse';
    }
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={getAnimationClass()}
            style={{
              ...getSkeletonStyle(),
              width: index === lines - 1 ? '60%' : width,
              marginBottom: index === lines - 1 ? 0 : '0.5em'
            }}
          />
        ))}
        <style jsx>{`
          .skeleton-pulse {
            animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .skeleton-wave {
            background: linear-gradient(90deg, ${baseColor} 25%, ${highlightColor} 50%, ${baseColor} 75%);
            background-size: 200% 100%;
            animation: skeleton-wave 1.5s ease-in-out infinite;
          }
          
          @keyframes skeleton-pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          
          @keyframes skeleton-wave {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div
        className={getAnimationClass()}
        style={getSkeletonStyle()}
        {...props}
      />
      <style jsx>{`
        .skeleton-pulse {
          animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .skeleton-wave {
          background: linear-gradient(90deg, ${baseColor} 25%, ${highlightColor} 50%, ${baseColor} 75%);
          background-size: 200% 100%;
          animation: skeleton-wave 1.5s ease-in-out infinite;
        }
        
        @keyframes skeleton-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes skeleton-wave {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
};

// SkeletonCard Component
export const SkeletonCard = ({ 
  showAvatar = false, 
  lines = 3, 
  animation = 'pulse',
  ...props 
}) => {
  return (
    <div style={{ 
      padding: '1rem', 
      border: '1px solid #e5e7eb', 
      borderRadius: '8px',
      backgroundColor: 'white'
    }} {...props}>
      {showAvatar && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Skeleton variant="circular" width="40px" height="40px" animation={animation} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" animation={animation} />
            <Skeleton variant="text" width="40%" animation={animation} />
          </div>
        </div>
      )}
      <Skeleton variant="text" lines={lines} animation={animation} />
    </div>
  );
};

// SkeletonTable Component
export const SkeletonTable = ({ 
  rows = 3, 
  columns = 3, 
  showHeader = true,
  animation = 'pulse',
  ...props 
}) => {
  return (
    <div style={{ width: '100%' }} {...props}>
      {showHeader && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '1rem',
          padding: '0.75rem',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb'
        }}>
          {Array.from({ length: columns }).map((_, index) => (
            <Skeleton key={index} variant="text" width="80%" animation={animation} />
          ))}
        </div>
      )}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '1rem',
          padding: '0.75rem',
          borderBottom: '1px solid #e5e7eb'
        }}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} variant="text" animation={animation} />
          ))}
        </div>
      ))}
    </div>
  );
};

// SkeletonList Component
export const SkeletonList = ({ 
  items = 3, 
  showAvatar = false, 
  showAction = false,
  animation = 'pulse',
  ...props 
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} {...props}>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          padding: '0.75rem',
          border: '1px solid #e5e7eb',
          borderRadius: '6px',
          backgroundColor: 'white'
        }}>
          {showAvatar && (
            <Skeleton variant="circular" width="32px" height="32px" animation={animation} />
          )}
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="70%" animation={animation} />
            <Skeleton variant="text" width="50%" animation={animation} />
          </div>
          {showAction && (
            <Skeleton variant="rectangular" width="60px" height="32px" animation={animation} />
          )}
        </div>
      ))}
    </div>
  );
};

// SkeletonProfile Component
export const SkeletonProfile = ({ animation = 'pulse', ...props }) => {
  return (
    <div style={{ 
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: 'white'
    }} {...props}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Skeleton variant="circular" width="80px" height="80px" animation={animation} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" animation={animation} />
          <Skeleton variant="text" width="40%" animation={animation} />
          <Skeleton variant="text" width="80%" animation={animation} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <Skeleton variant="text" width="40px" animation={animation} />
            <Skeleton variant="text" width="60px" animation={animation} />
          </div>
        ))}
      </div>
    </div>
  );
};

// SkeletonImage Component
export const SkeletonImage = ({ 
  width = '200px', 
  height = '150px',
  animation = 'pulse',
  ...props 
}) => {
  return (
    <Skeleton 
      variant="rectangular" 
      width={width} 
      height={height} 
      animation={animation}
      {...props} 
    />
  );
};

export default Skeleton;
