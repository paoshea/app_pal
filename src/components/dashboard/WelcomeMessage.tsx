
import React from 'react';

interface WelcomeMessageProps {
  userName: string;
}

export default function WelcomeMessage({ userName }: WelcomeMessageProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Welcome back, {userName}!</h1>
      <p className="mt-1 text-sm text-gray-500">Here's what's happening with your projects today.</p>
    </div>
  );
}
