import React, { useState, useEffect, useRef } from 'react';

const Loader = ({
  variant = 'circular',
  duration = 3000,
  progress: controlledProgress,
  size = 'medium',
  color = '#3b82f6',
  showPercentage = true,
  autoStart = true,
  onComplete,
  onProgress,
  children,
  style = {},
  ...props
}) => {
  const [internalProgress, setInternalProgress] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const progress = controlledProgress !== undefined ? controlledProgress : internalProgress;

  const sizeMap = {
    small: {
      circular: { width: 32, height: 32, strokeWidth: 2 },
      linear: { width: 150, height: 4 },
      spinner: { width: 24, height: 24 },
      dots: { dotSize: 8, gap: 4 }
    },
    medium: {
      circular: { width: 48, height: 48, strokeWidth: 3 },
      linear: { width: 200, height: 6 },
      spinner: { width: 32, height: 32 },
      dots: { dotSize: 10, gap: 6 }
    },
    large: {
      circular: { width: 64, height: 64, strokeWidth: 4 },
      linear: { width: 300, height: 8 },
      spinner: { width: 48, height: 48 },
      dots: { dotSize: 12, gap: 8 }
    }
  };

  const currentSize = sizeMap[size] || sizeMap.medium;

  useEffect(() => {
    if (controlledProgress !== undefined || !autoStart) return;

    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setInternalProgress(newProgress);
      onProgress?.(newProgress);

      if (newProgress >= 100) {
        clearInterval(intervalRef.current);
        onComplete?.();
      }
    }, 16); // ~60fps

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [duration, autoStart, onComplete, onProgress, controlledProgress]);

  useEffect(() => {
    if (controlledProgress !== undefined) {
      onProgress?.(controlledProgress);
      if (controlledProgress >= 100) {
        onComplete?.();
      }
    }
  }, [controlledProgress, onProgress, onComplete]);

  const renderCircular = () => {
    const { width, height, strokeWidth } = currentSize.circular;
    const radius = (width - strokeWidth * 2) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '0.5rem',
        ...style 
      }} {...props}>
        <div style={{ position: 'relative', width, height }}>
          <svg
            width={width}
            height={height}
            style={{ transform: 'rotate(-90deg)' }}
          >
            {/* Background circle */}
            <circle
              cx={width / 2}
              cy={height / 2}
              r={radius}
              stroke="#e5e7eb"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx={width / 2}
              cy={height / 2}
              r={radius}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 0.3s ease'
              }}
            />
          </svg>
          {showPercentage && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1rem' : '0.875rem',
              fontWeight: '600',
              color: color
            }}>
              {Math.round(progress)}%
            </div>
          )}
        </div>
        {children && (
          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.875rem', 
            color: '#6b7280' 
          }}>
            {children}
          </div>
        )}
      </div>
    );
  };

  const renderLinear = () => {
    const { width, height } = currentSize.linear;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '0.5rem',
        ...style 
      }} {...props}>
        <div style={{
          width,
          height,
          backgroundColor: '#e5e7eb',
          borderRadius: height / 2,
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: color,
            borderRadius: height / 2,
            transition: 'width 0.3s ease'
          }} />
        </div>
        {showPercentage && (
          <div style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: color
          }}>
            {Math.round(progress)}%
          </div>
        )}
        {children && (
          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.875rem', 
            color: '#6b7280' 
          }}>
            {children}
          </div>
        )}
      </div>
    );
  };

  const renderSpinner = () => {
    const { width, height } = currentSize.spinner;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '0.5rem',
        ...style 
      }} {...props}>
        <div
          style={{
            width,
            height,
            border: `${Math.max(2, width / 16)}px solid #e5e7eb`,
            borderTop: `${Math.max(2, width / 16)}px solid ${color}`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}
        />
        {children && (
          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.875rem', 
            color: '#6b7280' 
          }}>
            {children}
          </div>
        )}
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  };

  const renderDots = () => {
    const { dotSize, gap } = currentSize.dots;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '0.5rem',
        ...style 
      }} {...props}>
        <div style={{ 
          display: 'flex', 
          gap: `${gap}px`,
          alignItems: 'center'
        }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: dotSize,
                height: dotSize,
                backgroundColor: color,
                borderRadius: '50%',
                animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite both`
              }}
            />
          ))}
        </div>
        {children && (
          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.875rem', 
            color: '#6b7280' 
          }}>
            {children}
          </div>
        )}
        <style jsx>{`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            } 40% {
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    );
  };

  switch (variant) {
    case 'linear':
      return renderLinear();
    case 'spinner':
      return renderSpinner();
    case 'dots':
      return renderDots();
    case 'circular':
    default:
      return renderCircular();
  }
};

export default Loader;
