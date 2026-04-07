import React from 'react';

interface TextProps {
  children: React.ReactNode;
  color?: string; // Tailwind color class, e.g., 'text-primary-dark'
  fontSize?: 'text-2xl' | 'text-base' | 'text-sm';
  fontWeight?: 'font-bold' | 'font-semibold' | 'font-medium' | 'font-normal';
  className?: string; // Additional CSS classes
}

const Text: React.FC<TextProps> = ({ children, color, fontSize, fontWeight, className }) => {
  const classes = [
    color,
    fontSize,
    fontWeight,
    className,
  ].filter(Boolean).join(' '); // Filter out undefined/null and join

  return (
    <span className={classes}>{children}</span>
  );
};

export default Text;
