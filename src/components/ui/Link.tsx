import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  children: React.ReactNode; 
  href: string; 
  onClick?: () => void;
  variant?: 'primary' | 'text-secondary';
  fontWeight?: 'normal' | 'font-medium' | 'font-semibold';
  className?: string; 
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  fontWeight = 'font-normal',
  className
}) => {
  const baseClasses = `
    text-sm
    ${fontWeight}
    transition-colors duration-200
  `;

  const variantClasses = {
    primary: 'text-action-primary hover:text-indigo-700 active:text-indigo-800',
    'text-secondary': 'text-text-secondary hover:text-gray-600 active:text-gray-700',
  };

  return (
    <RouterLink
      to={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
