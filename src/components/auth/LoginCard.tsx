import React from 'react';

interface LoginCardProps {
  children: React.ReactNode;
}

const LoginCard: React.FC<LoginCardProps> = ({ children }) => {
  return (
    <div
      className="
        flex flex-col gap-3xl
        p-3xl
        bg-white rounded-lg shadow-card
        w-full max-w-[440px]
      "
    >
      {children}
    </div>
  );
};

export default LoginCard;
