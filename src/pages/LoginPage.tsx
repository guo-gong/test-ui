import React from 'react';
import LoginCard from '../components/auth/LoginCard';
import LoginHeader from '../components/auth/LoginHeader';
import LoginForm from '../components/auth/LoginForm';
import SignUpPrompt from '../components/auth/SignUpPrompt';

const LoginPage: React.FC = () => {
  return (
    <div
      className="
        min-h-screen
        flex flex-col items-center justify-center
        bg-background-page
        px-2xl py-2xl
      "
    >
      <LoginCard>
        <LoginHeader
          title="Welcome Back"
          subtitle="Sign in to continue"
        />
        <LoginForm />
        <SignUpPrompt />
      </LoginCard>
    </div>
  );
};

export default LoginPage;
