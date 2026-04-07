/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1F2937',
        'text-secondary': '#6B7280',
        'text-label': '#374151',
        'text-placeholder': '#9CA3AF',
        'action-primary': '#4F46E5',
        'white': '#FFFFFF',
        'border-default': '#D1D5DB',
        'background-page': '#F3F4F6',
      },
      fontSize: {
        '2xl': '28px',
        'base': '16px',
        'sm': '14px',
      },
      fontWeight: {
        'bold': '700',
        'semibold': '600',
        'medium': '500',
        'normal': '400',
      },
      spacing: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      borderRadius: {
        'md': '8px',
        'lg': '16px',
      },
      boxShadow: {
        'card': '0px 4px 12px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}