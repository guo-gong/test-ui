import React from 'react';
import Text from '../ui/Text';
import Link from '../ui/Link';

const SignUpPrompt: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-xs">
      <Text color="text-text-secondary" fontSize="text-sm" fontWeight="font-normal">
        Don't have an account?
      </Text>
      <Link href="/signup" fontWeight="font-semibold">
        Sign Up
      </Link>
    </div>
  );
};

export default SignUpPrompt;
