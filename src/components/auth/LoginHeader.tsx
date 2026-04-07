import React from 'react';
import Text from '../ui/Text';

interface LoginHeaderProps {
  title: string; 
  subtitle: string; 
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-md">
      <Text color="text-primary-dark" fontSize="text-2xl" fontWeight="font-bold">
        {title}
      </Text>
      <Text color="text-text-secondary" fontSize="text-base" fontWeight="font-normal">
        {subtitle}
      </Text>
    </div>
  );
};

export default LoginHeader;
