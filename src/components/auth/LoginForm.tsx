import React, { useState } from 'react';
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import Link from '../ui/Link';

// Basic email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string; general?: string } = {};
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({}); // Clear previous errors

    if (validateForm()) {
      setIsLoading(true);
      setErrors({}); // Clear any previous general errors

      try {
        // Simulate API call
        console.log('Attempting to log in with:', { email, password });
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        // Simulate success or failure
        if (email === 'test@example.com' && password === 'password') {
          console.log('Login successful!');
          // In a real app, you'd handle authentication (e.g., store token, redirect)
          alert('Login Successful!');
        } else {
          setErrors({ general: 'Invalid email or password.' });
          console.error('Login failed: Invalid credentials');
        }
      } catch (err) {
        setErrors({ general: 'An unexpected error occurred. Please try again.' });
        console.error('Login error:', err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2xl w-full">
      <div className="flex flex-col gap-xl">
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <div className="flex justify-end">
          <Link href="/forgot-password" fontWeight="font-medium">
            Forgot Password?
          </Link>
        </div>
      </div>

      {errors.general && (
        <p className="text-red-500 text-sm font-normal text-center">
          {errors.general}
        </p>
      )}

      <Button type="submit" isLoading={isLoading} disabled={isLoading}>
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
