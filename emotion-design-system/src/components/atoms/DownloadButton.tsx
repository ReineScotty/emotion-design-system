import React from 'react';
import './DownloadButton.css';

interface DownloadButtonProps {
  label?: string;
  url?: string;
  fileName?: string;
  variant?: 'primary' | 'secondary' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * DownloadButton Component
 * 
 * A semantic, accessible download button following BEM naming conventions.
 * Supports multiple variants and sizes for flexibility within the design system.
 */
export const DownloadButton: React.FC<DownloadButtonProps> = ({
  label = 'Download',
  url,
  fileName = 'download',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
}) => {
  const handleDownload = () => {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    if (onClick) {
      onClick();
    }
  };

  const buttonClasses = [
    'button-download',
    `button-download--${variant}`,
    `button-download--${size}`,
    disabled && 'button-download--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={handleDownload}
      disabled={disabled}
      aria-label={label}
    >
      <span className="button-download__icon">⬇</span>
      <span className="button-download__label">{label}</span>
    </button>
  );
};

export default DownloadButton;
