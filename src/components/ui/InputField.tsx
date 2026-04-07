import React from 'react';

interface InputFieldProps {
  id: string; 
  label: string; 
  type: 'text' | 'email' | 'password'; 
  placeholder?: string; 
  value: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  error?: string; 
  className?: string; 
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-sm ${className}`}>
      <label htmlFor={id} className="text-text-label text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          h-12 w-full
          px-lg py-md
          border border-border-default rounded-md
          text-sm text-primary-dark font-normal
          placeholder-text-placeholder
          focus:outline-none focus:ring-2 focus:ring-action-primary focus:border-action-primary
          transition-all duration-200
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
        `}
      />
      {error && (
        <p className="text-red-500 text-sm font-normal mt-xs">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
